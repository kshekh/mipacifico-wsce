const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');
module.exports = {
    mode: 'jit',
    content: [

        'src/*.{html,js,jsx}',
        'src/**/*.{html,js,jsx}',

    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ["'roboto'", ...defaultTheme.fontFamily.sans],
                opensans: ["'Open Sans'", ...defaultTheme.fontFamily.sans],
                ubuntu: ["'Ubuntu'", ...defaultTheme.fontFamily.sans],
                'archivo-black': ["'Archivo Black'", ...defaultTheme.fontFamily.sans],
                'fredoka-one': ["'Fredoka One'", ...defaultTheme.fontFamily.sans],

            },
            colors: {
                color: {
                    DEFAULT: '#212529',
                    '1': '#44b8dc', //button color
                    '2': '#0d63af', //blue
                    '3': '#a4a4a4', //light gray
                    '4': '#6d95f2 ',
                    '5': '#9fa2ef ',
                    '6': '#d0c62a ', //dark yellow
                    '7': '#061923 ', //dark green
                    '8': '#0a7596', //hover back color
                    '9': '#061923', //project back color
                    '10': '#0e75bb', // project back color
                    '11': '#5282f0', // service heading color
                    '12': '#e6e6e6', // service and counter back color
                    '13': '#d0c62a', // breackdown subheading color
                    '14': '#def3f9', // notice background
                    '15': '#08141a', // notice background
                    '16': '#eaf5f9', // notice background
                    '17': '#158fb5', // notice background
                },

                spalsh: {
                    DEFAULT: '#071922',
                },

                cyan: {
                    DEFAULT: '#00bcd4',
                },
                teal: {
                    DEFAULT: '#009688',
                },
                success: {
                    DEFAULT: '#28d094',
                },
                warning: {
                    DEFAULT: '#ff9149',
                },
                link: {
                    DEFAULT: '#673ab7',
                    '1': '#512e90',
                },
                darken: {
                    '1': '#e53935',
                    '2': '#f9a825',

                },

            },
            boxShadow: {

                '1': '0 2px 30px 2px rgb(0 0 0 / 10%)',
                '2': '0 5px 75px 2px rgb(64 70 74 / 20%)',
                '3': '0 0 10px #ff4961',
                '4': '0 2px 18px 1px rgb(49 53 72 / 10%)',
                '5': '0 14px 24px rgb(62 57 107 / 20%)',
                '6': '0 10px 18px 0 rgb(62 57 107 / 20%)',



            },

            minHeight: (theme) => ({
                ...theme('spacing'),
            }),

            minWidth: (theme) => ({
                ...theme('spacing'),
            }),


            spacing: {
                'sidebar': '260px',
                '18': '4.5rem',
                '22': '5.5rem',
                '26': '6.5rem',
                '30': '7.5rem',
                '34': '8.5rem',
                '38': '9.5rem',
                '42': '10.5rem',
                '46': '11.5rem',
                '50': '12.5rem',
                '54': '13.5rem',
                '58': '14.5rem',
                '62': '15.5rem',
                '66': '16.5rem',
                '70': '17.5rem',
                '74': '18.5rem',
                '78': '19.5rem',
                '82': '20.5rem',
                '86': '21.5rem',
                '90': '22.5rem',
                '94': '23.5rem',
                '98': '24.5rem',
                '102': '25.5rem',
                '106': '26.5rem',
                '110': '27.5rem',
                'xs': '28rem',
                'sm': '32rem',
                'md': '36rem',
                'ml': '40rem',
                'mxg': '44rem',
                'mlg': '48rem',
                'lg': '52rem',
                'xl': '60rem',
                '2xl': '72rem',
                '3xl': '80rem',
                '4xl': '96rem',
            },


            backgroundImage: {

                'hero':'linear-gradient(to bottom, #1175ba 0%,#0d4f7c 100%)',
                '2':'linear-gradient(to bottom, #2876b8 0%,#2876b8 100%)',
                '3':'linear-gradient(45deg, #eaf5f9 0%,#eaf5f9 41%,#dff0f6 44%,#c8e5ef 49%,#5eb3cf 67%,#4dabc9 70%,#39a2c3 75%,#35a0c2 77%,#35a0c2 100%)',
                '4':'linear-gradient(45deg, #0f9fc0 0%,#0f9fc0 45%,#1ea6c7 50%,#4fbedd 60%,#5ac3e2 64%,#5ac3e2 100%)',
                '5':'linear-gradient(45deg, #5ac3e2 0%,#5ac3e2 36%,#4fbedd 40%,#1ea6c7 50%,#0f9fc0 55%,#0f9fc0 100%)',
                '6':'linear-gradient(45deg, #1175b9 0%,#081924 100%)',
                '7':'linear-gradient(45deg, #418be8 0%,#3c8fe5 13%,#299ddd 36%,#1aa7d6 73%,#13abd3 100%)',
            },
            borderWidth: {
                '3': '3px',
                '5': '5px',
                '6': '6px',
                '7': '7px',
                '8': '8px',
            },
            fontSize: {
                mi: '.75rem',
                xs: '.814rem',
                md: '.9375rem',
                '2.5xl': '1.75rem',
                '3.5xl': '2rem',
                '4.5xl': '2.5rem',
                '5.5xl': '3.5rem',
                '6.5xl': ['4rem', '1.10'],
                '7.5xl': '5rem',
                '8xl': '7rem',
                '10xl': '8rem',
            },
            zIndex: {
                '9': '9',
                '99': '99',
                '999': '999',
                '9999': '9999',
            },


            textIndent: (theme, { negative }) => theme('spacing'),


        },

        screens: {
            'mv': '360px',
            // => @media (min-width: 360px) { ... }

            'xs': '480px',
            // => @media (min-width: 480px) { ... }

            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'ml': '992px', // Medium Large
            // => @media (min-width: 992px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'sl': '1199px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }    

            '3xl': '1920px',
            // => @media (min-width: 1920px) { ... }    

            'wrapper': '1150px',
            // => @media (min-width: 1150px) { ... } 


        },
    },

    variants: {
        extend: {},
    },
    plugins: [
        plugin(function ({ addBase, components, theme }) {
            addBase({

                
                '.trnstsn': {
                    transition: 'all 0.35s ease-in-out',

                },
                'a, button, input, textarea, select': {
                    transition: 'all 0.35s ease-in-out',

                },

                
             


            })
        }),
        require('@tailwindcss/forms'),
        require('tailwindcss-text-indent')(),
        require('@tailwindcss/line-clamp'),
    ],
}