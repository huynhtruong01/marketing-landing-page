/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                primary: '#FF7D01',
                ['primary-light']: '#F4A81D',
                secondary: '#051441',
                ['secondary-light']: '#5A73E5',
                ['secondary-lighter']: '#6B7D92',
                ['footer']: '#052347',
                ['footer-light']: '#11317C',
                section: '#E2E7FB',
                ['section-light']: '#F4F8FD',
                description: '#AFACCD',
                'description-second': '#8B9FCF',
                'description-third': '#5D677E',
                icon: '#F4F7FF',
            },
            width: {
                container: 1120,
            },
            maxWidth: {
                container: 1120,
            },
        },
    },
    plugins: [],
}
