/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        colors: {
            // 对于tailwindcss本身没有定义的规则，必须添加定义
            'red': 'red',
            'blue': '#1fb6ff',
            'purple': '#7e5bef',
            'pink': '#ff49db',
            'orange': '#ff7849',
            'green': '#13ce66',
            'yellow': '#ffc82c',
            'gray-dark': '#273444',
            'gray': '#8492a6',
            'gray-light': '#d3dce6',
            'white': '#ffffff'
        },
        fontFamily: {
            sans: ['Graphik', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
        },
        extend: {
            spacing: {
                '8xl': '96rem',
                '9xl': '128rem',
            },
            borderRadius: {
                'none': '0',
                'sm': '.125rem',
                DEFAULT: '.25rem',
                'lg': '.5rem',
                'full': '9999px',
                '4xl': '2rem',
            }
        }
    },
}