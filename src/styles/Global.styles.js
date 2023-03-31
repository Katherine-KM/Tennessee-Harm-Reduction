import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

:root {
    --clr-bgNeutral: rgba(253, 246, 240, 1);

    // Button & Darker Text
    --clr-primary-400: rgba(235, 140, 91, 1);

    // Navbar / Link
    --clr-primary-300: rgba(255, 211, 182, 1);

    // Lighter Text 
    --clr-primary-200: rgba(243, 176, 136, 1); 

    // Secondary Red Text
    --clr-secondary: rgba(198, 76, 75, 1);

    --h1-fs: clamp(1.5rem, 2rem, 2.85rem);
    --h2-lg-fs: 40px; 
    --h2-sm-fs: 36px;
    --p-lg-fs: 20px; 
    --p-md-fs: 18px;
    --p-sm-fs: 16px;
    --h4-link-fs: 24px;
}

main {
    max-width: 1600px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
}

// Reset

*,
*::before,
*::after {
    box-sizing: border-box;
}

* {
    margin: 0; 
    padding: 0;
}

html:focus-within {
    scroll-behavior: smooth;
}

html, 
body {
    height: 100%;
}

body{
    text-rendering: optimizeSpeed;
    background-color: white;
    font-family: 'Montserrat', sans-serif;
}
`

export default GlobalStyles;