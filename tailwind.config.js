/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            xs: '318px',
            sm: '373px',
            md: '766px',
            lg: '1278px',
            xl: '1918px'
        },
        extend: {
            colors: {
                "accent-one": "#ff61ab",
                "accent-two": "#ff6176",
                "accent-three": "#ff8161",
                "accent-four": "#ffb561",
                "accent-five": "#ffea62",
                "accent-six": "#dfff61",
                "accent-seven": "#abff61",
                "accent-eight": "#76ff61",
                "accent-nine": "#61ff81",
                "accent-ten": "#61ffb5",
                "neu-light": "var(--neu-light)",
                "neu-mid": "var(--neu-mid)",
                "neu-dark": "var(--neu-dark)",

                "neu-accent-light": "var(--neu-accent-light)",
                "neu-accent-mid": "var(--neu-accent-mid)",
                "neu-accent-dark": "var(--neu-accent-dark)",

                "neu-accent-green-light": "var(--neu-accent-green-light)",
                "neu-accent-green-mid": "var(--neu-accent-green-mid)",
                "neu-accent-green-dark": "var(--neu-accent-green-dark)",

                "neu-accent-orange-light": "var(--neu-accent-orange-light)",
                "neu-accent-orange-mid": "var(--neu-accent-orange-mid)",
                "neu-accent-orange-dark": "var(--neu-accent-orange-dark)",

                "neu-accent-red-light": "var(--neu-accent-red-light)",
                "neu-accent-red-mid": "var(--neu-accent-red-mid)",
                "neu-accent-red-dark": "var(--neu-accent-red-dark)"
            }
        },
    },
    plugins: [require("tailwind-shades-for-custom-colors")]
}
