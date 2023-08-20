# learn ebooklib source code
- __init__.py 定义常量和版本号
- utils.py 定义工具函数
- epub.py 关键代码

## epub.py

- 设计缺陷：epub.py中含有很多常量，理论上可以移动到单独的py文件中，维护更加清晰。

### TOC and navigation elements：
- Section(object) 表示节
- Link(object) 表示链接

### Exceptions：
- EpubException(Exception)

### EpubItem(object)：
Base class for the items in a book.

### EpubNcx(EpubItem)：
Represents Navigation Control File (NCX) in the EPUB. toc.ncx.

### EpubCover(EpubItem)
Represents Cover image in the EPUB file.

### EpubHtml(EpubItem)
Represents HTML document in the EPUB file.

这个类非常重要，对应着某个?.xhtml文档。

其中需要注意的关键methods有：
- set_language()
- add_link(): 添加CSS样式定义
```python
add_link(href='styles.css', rel='stylesheet', type='text/css')
```
- add_item()：添加item，这里的item必须为EpubItem的类型。
```python
if item.get_type() == ebooklib.ITEM_STYLE:
    self.add_link(href=item.get_name(), rel='stylesheet', type='text/css')

if item.get_type() == ebooklib.ITEM_SCRIPT:
    self.add_link(src=item.get_name(), type='text/javascript')
```

### EpubImage(EpubItem)
Represents Image in the EPUB file.

### EpubSMIL(EpubItem)
SMIL support. leave a stub for not implemented.

### EpubCoverHtml(EpubHtml)
Represents Cover page in the EPUB file.
这里是特化的EpubHtml类型。关键方法：
- get_content() 这里返回处理后的Cover页面文本。

### EpubNav(EpubHtml)
Represents Navigation Document in the EPUB file.

epub 3兼容的nav/xhtml导航页面。

这个名称EpubNav在设计上有很大问题，而原作者也意识到了这点。
> Navigation xhtml file should behave like other xhtml files

应该将 EpubNav 改为 EpubNavHtml。

## EpubBook(object)

最为重要的一个类。方法如下：

```
__init__()
```

```
reset(): 重置所有类变量

self.metadata = {}
self.items = []
self.spine = []
self.guide = []
self.pages = [] // 这个指的是页面，也就是Text文件夹下面xhtml
self.toc = []
self.bindings = [] // 这个的含义是什么？

self.IDENTIFIER_ID = 'id'
self.FOLDER_NAME = 'EPUB' //文件夹的名称

// 内部递增计数器，设计不够好
self._id_html = 0
self._id_image = 0
self._id_static = 0

self.title = ''
self.language = 'en'
self.direction = None

// map structure. value is template string
self.templates = {
    'ncx': NCX_XML,
    'nav': NAV_XML,
    'chapter': CHAPTER_XML,
    'cover': COVER_XML
}

self.add_metadata() //添加初始元数据，似乎没必要

self.set_identifier(str(uuid.uuid4())) // init uuid

# custom prefixes and namespaces to be set to the content.opf doc
# 暂时不需要
self.prefixes = []
self.namespaces = {}
```

```
def set_identifier(self, uid):

设置类对应变量uid
更新metadata中identifier
```

```
def set_language(self, lang):
def set_direction(self, direction):
```

```
def set_cover(self, file_name, content, create_page=True):
```

```
def add_author(self, author, file_as=None, role=None, uid='creator'):

设置metadata
更新file_as（可选）
更新role（可选）
```

上面的这些方法，都是在处理元数据，对应样例结果为：
```xml
<metadata xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:opf="http://www.idpf.org/2007/opf">
  <meta property="dcterms:modified">2022-11-23T23:13:28Z</meta>
  <meta content="Ebook-lib 0.17.1" name="generator" />
  <dc:identifier id="id">a3491e27-608c-451d-916c-aead3d3faae2</dc:identifier>
  <dc:title>在异世界获得超强能力的我，在现实世界照样无敌～等级提升改变人生命运～</dc:title>
  <dc:language>zh</dc:language>
  <dc:creator id="creator">美红 著</dc:creator>
  <meta content="cover-img" name="cover" />
</metadata>
```

这里，我们来看下这个方法的实现：
```python
def add_metadata(self, namespace, name, value, others=None):
    "Add metadata"

    # 如果namespace存在于预设中，那就取预设的对应值
    if namespace in NAMESPACES:
        namespace = NAMESPACES[namespace]

    # 如果 namespace 不在已有的类变量metadata中，代表还没有初始化，这里初始化
    if namespace not in self.metadata:
        self.metadata[namespace] = {}

    # 如果name值之前没有设置过，那就初始化name对应的值，为一个空数组
    if name not in self.metadata[namespace]:
        self.metadata[namespace][name] = []

    # 此时将value添加到数组，以元组形式，其中others一般为一个元组
    self.metadata[namespace][name].append((value, others))
```

```
def get_metadata(self, namespace, name):
在NAMESPACE中取对应namespace的值，然后继续取这个map对应name的值
```
```
def set_unique_metadata(self, namespace, name, value, others=None):
设置metadata:
- 覆盖式
- 添加式，代理到之前的add_metadata()
```

```python
# 这个函数用于添加EpubItem
def add_item(self, item):

# 如果media_type为空，根据item.name进行文件类型推断，然后设置media_type
if item.media_type == '':
    (has_guessed, media_type) = guess_type(item.get_name().lower())

    if has_guessed:
        if media_type is not None:
            item.media_type = media_type
        else:
            item.media_type = has_guessed
    else:
        item.media_type = 'application/octet-stream'

# 如果item没有id
if not item.get_id():
    # make chapter_, image_ and static_ configurable
    # https://github.com/aerkalov/ebooklib/issues/229

    # item类型：html、image、ncx、smil

    # 这里chapter和html是1:1关系，思考设计的优劣。
    # 对于轻小说：book,volume,chapter,page。一页(page)才是一个html文档。
    # 但是在制作epub，会将特定章节的多个pages汇聚成一个chapter，然后和html一一对应。
    if isinstance(item, EpubHtml):
        item.id = 'chapter_%d' % self._id_html
        self._id_html += 1
        # If there's a page list, append it to the book's page list
        self.pages += item.pages
    elif isinstance(item, EpubImage):
        item.id = 'image_%d' % self._id_image
        self._id_image += 1
    else:
        # static_语义太差，还不如用一个other_，或者unknown_
        item.id = 'static_%d' % self._id_image
        self._id_image += 1

    # NCX因为唯一性，不需要递增内部状态计数器。

# 这里建立了双向引用：item <--> book
item.book = self
self.items.append(item)

return item
```

```
def get_item_with_id(self, uid):
>>> book.get_item_with_id('image_001')

def get_item_with_href(self, href):
>>> book.get_item_with_href('EPUB/document.xhtml')

def get_items(self):
Returns all items as tuple.

def get_items_of_type(self, item_type):
>>> book.get_items_of_type(epub.ITEM_IMAGE)

def get_items_of_media_type(self, media_type):
Returns all items of specified media type.

这里有个注意点：type和media_type
type是内部定义的item类型，例如epub.ITEM_IMAGE
media_type是外部设置的item类型，例如jpg格式。
```

```
def set_template(self, name, value):

At the moment we use these templates:
  - ncx
  - nav
  - chapter
  - cover

这里定义默认的关键xhtml的模板。
```

```
//自定义命名空间，先忽略。
def add_prefix(self, name, uri):
>>> epub_book.add_prefix('bkterms', 'http://booktype.org/')
```

## EpubWriter

这个类用于写操作。

静态常量，用于默认参数值的初始化。
```python
DEFAULT_OPTIONS = {
    'epub2_guide': True,
    'epub3_landmark': True,
    'epub3_pages': True,
    'landmark_title': 'Guide',
    'pages_title': 'Pages',
    'spine_direction': True,
    'package_direction': False,
    'play_order': {
        'enabled': False,
        'start_from': 1
    }
}
```

```python
# init函数中，记录入参，更新自身options，以及初始化order
def __init__(self, name, book, options=None):
    self.file_name = name
    self.book = book

    self.options = dict(self.DEFAULT_OPTIONS)
    if options:
        self.options.update(options)

    self._init_play_order()
```

这个order暂时不知道指什么，下面查看该函数：
本质上只是更新了自身实例的保护变量。
```python
def _init_play_order(self):
    self._play_order = {
        'enabled': False,
        'start_from': 1
    }

    try:
        self._play_order['enabled'] = self.options['play_order']['enabled']
        self._play_order['start_from'] = self.options['play_order']['start_from']
    except KeyError:
        pass
```

插件hooks:
```python
def process(self):
    # should cache this html parsing so we don't do it for every plugin
    for plg in self.options.get('plugins', []):
        if hasattr(plg, 'before_write'):
            plg.before_write(self.book)

    for item in self.book.get_items():
        if isinstance(item, EpubHtml):
            for plg in self.options.get('plugins', []):
                if hasattr(plg, 'html_before_write'):
                    plg.html_before_write(self.book, item)
```
这里仅仅实现了对before_write和html_before_write的处理。其他hook的用处，暂时我也没有头绪。

```python
# CONTAINER_PATH = 'META-INF/container.xml'
def _write_container(self):
    container_xml = CONTAINER_XML % {'folder_name': self.book.FOLDER_NAME}
    self.out.writestr(CONTAINER_PATH, container_xml)
```

```python
def _write_opf_metadata(self, root):
    nsmap = {'dc': NAMESPACES['DC'], 'opf': NAMESPACES['OPF']}
    # 注意这个update，实际上似乎没有用到大写的NAMESPACE，需要仔细权衡是否真的需要
    nsmap.update(self.book.namespaces)

    # meta根元素
    metadata = etree.SubElement(root, 'metadata', nsmap=nsmap)

    # mtime 节点
    el = etree.SubElement(metadata, 'meta', {'property': 'dcterms:modified'})
    if 'mtime' in self.options:
        mtime = self.options['mtime']
    else:
        import datetime
        mtime = datetime.datetime.now()
    el.text = mtime.strftime('%Y-%m-%dT%H:%M:%SZ')

    # 遍历metadata map
    for ns_name, values in six.iteritems(self.book.metadata):
        # 'OPF': 'http://www.idpf.org/2007/opf',
        # 这里对opf NS的变量进行单独处理。
        if ns_name == NAMESPACES['OPF']:
            for values in values.values():
                for v in values:
                    # v[0] is value, v[1] is {}, has key-value
                    if 'property' in v[1] and v[1]['property'] == 'dcterms:modified':
                        continue
                    try:
                        el = etree.SubElement(metadata, 'meta', v[1])
                        if v[0]:
                            el.text = v[0]
                    except ValueError:
                        logging.error('Could not create metadata.')
        else:
            # 这里是
            for name, values in six.iteritems(values):
                for v in values:
                    try:
                        if ns_name:
                            el = etree.SubElement(metadata, '{%s}%s' % (ns_name, name), v[1])
                        else:
                            el = etree.SubElement(metadata, '%s' % name, v[1])

                        el.text = v[0]
                    except ValueError:
                        logging.error('Could not create metadata "{}".'.format(name))
```
对于嵌套多层的复杂数据结构，采用debug加以确认，这样理解起来更加清晰。

---

```python
def _write_opf_manifest(self, root):
这个方法处理多类item，例如nav，ncx，cover。记录ncx_id。
```

```python
def _write_opf_spine(self, root, ncx_id):

    # https://www.w3.org/publishing/epub3/epub-packages.html#attrdef-spine-page-progression-direction
```

```python
def _write_opf_guide(self, root):
    # - http://www.idpf.org/epub/20/spec/OPF_2.0.1_draft.htm#Section2.6
```

```python
def _write_opf_guide(self, root):
    # - http://www.idpf.org/epub/20/spec/OPF_2.0.1_draft.htm#Section2.6
```

```python
# 暂时不需要。
def _write_opf_bindings(self, root):
    if len(self.book.bindings) > 0:
        bindings = etree.SubElement(root, 'bindings', {})
        for item in self.book.bindings:
            etree.SubElement(bindings, 'mediaType', item)
```

```python
def _write_opf_file(self, root):
    tree_str = etree.tostring(root, pretty_print=True, encoding='utf-8', xml_declaration=True)

    self.out.writestr('%s/content.opf' % self.book.FOLDER_NAME, tree_str)
```

上面这些都是保护方法。

---

```python
# 写opf的关键过程
def _write_opf(self):
    package_attributes = {'xmlns': NAMESPACES['OPF'],
                          'unique-identifier': self.book.IDENTIFIER_ID,
                          'version': '3.0'}
    if self.book.direction and self.options['package_direction']:
        package_attributes['dir'] = self.book.direction

    root = etree.Element('package', package_attributes)

    prefixes = ['rendition: http://www.idpf.org/vocab/rendition/#'] + self.book.prefixes
    root.attrib['prefix'] = ' '.join(prefixes)

    # METADATA
    self._write_opf_metadata(root)

    # MANIFEST
    _ncx_id = self._write_opf_manifest(root)

    # SPINE
    self._write_opf_spine(root, _ncx_id)

    # GUIDE
    self._write_opf_guide(root)

    # BINDINGS
    self._write_opf_bindings(root)

    # WRITE FILE
    self._write_opf_file(root)
```

```python
# 这个方法定义了一个基础的nav 页面模板，代码较长。
def _get_nav(self, item):
    ...
    root.set('lang', self.book.language)
    # lang="zh" xml:lang="zh"
    # '{%s}lang' % NAMESPACES['XML'] => xml:lang= ?
    root.attrib['{%s}lang' % NAMESPACES['XML']] = self.book.language

    # 注意这个方法的递归实现。
    _create_section(nav, self.book.toc)

    # LANDMARKS / GUIDE
    # - http://www.idpf.org/epub/30/spec/epub30-contentdocs.html#sec-xhtml-nav-def-types-landmarks
    # 这里是landmark的标记

    # page-list的标记
    if self.options.get('epub3_pages'):
    inserted_pages = get_pages_for_items([item for item in self.book.get_items_of_type(ebooklib.ITEM_DOCUMENT) \
        if not isinstance(item, EpubNav)])
    # 上面代码遍历items中所有不是nav文档的item，然后生成一个pages数组
    # output可以参考你我战的小说源码
```

---

```python
def _get_ncx(self):
# 不应该使用get开头命名，里面不是简单的获取逻辑，而是计算得出的结果。

```
```xml
<meta content="c22bf00d-12d7-4c5b-a4b4-61f9534b1b86" name="dtb:uid"/>
<meta content="0" name="dtb:depth"/>
<meta content="0" name="dtb:totalPageCount"/>
<meta content="0" name="dtb:maxPageNumber"/>
```
- depth：目录层级
- totalPageCount: 用于纸质书籍，电子书可以设置为0
- maxPageNumber: 用于纸质书籍，电子书可以设置0

```python
_create_section(nav_map, self.book.toc, 0)
# uid=0，代表一个内部状态：计数器，不断递增+1。
```

---
```python
def _write_items(self):
    # self.FOLDER_NAME = 'EPUB'
    for item in self.book.get_items():
        # => OEBPS/toc.ncx
        if isinstance(item, EpubNcx):
            self.out.writestr('%s/%s' % (self.book.FOLDER_NAME, item.file_name), self._get_ncx())
        #  EpubNav should be rename to EpubNavHtml
        # => Text/nav.xhtml
        elif isinstance(item, EpubNav):
            self.out.writestr('%s/%s' % (self.book.FOLDER_NAME, item.file_name), self._get_nav(item))
        #  manifest is a boolean value
        elif item.manifest:
            self.out.writestr('%s/%s' % (self.book.FOLDER_NAME, item.file_name), item.get_content())
        else:
            self.out.writestr('%s' % item.file_name, item.get_content())
```
```python
def write(self):
    # check for the option allowZip64
    self.out = zipfile.ZipFile(self.file_name, 'w', zipfile.ZIP_DEFLATED)
    self.out.writestr('mimetype', 'application/epub+zip', compress_type=zipfile.ZIP_STORED)

    # /META-INF/container.xml
    self._write_container()
    # /OEBPS/content.opf
    self._write_opf()
    # /OEBPS/*
    # - write other xhtml files(except for file content.opf)
    # - write images
    # - write styles
    # - write fonts
    self._write_items()

    self.out.close()
```
## EpubReader
这个方法一般而言看起来没什么用，主要用于自动化检测write逻辑是否正确。
```python
class EpubReader(object):
    DEFAULT_OPTIONS = {}

    def __init__(self, epub_file_name, options=None):
        self.file_name = epub_file_name # input file name
        self.book = EpubBook() # init new book instance
        self.zf = None # represent zipfile instance

        self.opf_file = ''
        self.opf_dir = ''

        self.options = dict(self.DEFAULT_OPTIONS)
        if options:
            self.options.update(options)
```
```python
# this method only focus on after_read lifecycle
def process(self):
    # should cache this html parsing so we don't do it for every plugin
    for plg in self.options.get('plugins', []):
        if hasattr(plg, 'after_read'):
            plg.after_read(self.book)

    for item in self.book.get_items():
        if isinstance(item, EpubHtml):
            for plg in self.options.get('plugins', []):
                if hasattr(plg, 'html_after_read'):
                    plg.html_after_read(self.book, item)
```

```python
def load(self):
    # delegate to protected method _load()
    self._load()

    return self.book
```

```python
def _load(self):
    try:
        self.zf = zipfile.ZipFile(self.file_name, 'r', compression=zipfile.ZIP_DEFLATED, allowZip64=True)
    except zipfile.BadZipfile as bz:
        raise EpubException(0, 'Bad Zip file')
    except zipfile.LargeZipFile as bz:
        raise EpubException(1, 'Large Zip file')

    # 1st check metadata
    self._load_container()
    self._load_opf_file()

    self.zf.close()
```
- self._load_container()
```python
self.opf_file = root_file.get('full-path')
self.opf_dir = zip_path.dirname(self.opf_file)
```
这个只提取了container.xml的元数据。

- self._load_opf_file()
```python
def _load_opf_file(self):
    try:
        s = self.read_file(self.opf_file)
    except KeyError:
        raise EpubException(-1, 'Can not find container file')

    # 解析opf file为etree
    self.container = parse_string(s)

    # 委托内部方法来处理各个子部分。
    self._load_metadata()
    self._load_manifest()
    self._load_spine()
    self._load_guide()

    # read nav file if found
    # ...
```
主要就这四个方法。
- self._load_metadata()
- self._load_manifest()
- self._load_spine()
- self._load_guide()

---
self._load_metadata()
```python
else:
    # 这个rfind的输入实例t.tag是怎样的？
    tag = t.tag[t.tag.rfind('}') + 1:]

    if (t.prefix and t.prefix.lower() == 'dc') and tag == 'identifier':
        _id = t.get('id', None)
```
---
self._load_spine()
```python
# self.book.spine = ?
# read ncx or nav file
```
