/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            height: {
                screen: ["100vh /* fallback for Opera, IE and etc. */", "100dvh"],
                "screen-small": ["100vh /* fallback for Opera, IE and etc. */", "100svh"],
                "screen-large": ["100vh /* fallback for Opera, IE and etc. */", "100lvh"],
            },
        },
    },
    plugins: [],
};
