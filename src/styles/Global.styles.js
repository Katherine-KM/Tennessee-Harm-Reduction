import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

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

    // headers + link

    --h1-fs: clamp(1.8rem, 5vw, 2.8rem);
    --h2-lg-fs: clamp(1.5rem, 5vw, 2.5rem); 
    --h2-sm-fs: clamp(1.2rem, 5vw, 2.25rem);
    --h4-link-fs: clamp(1.2rem, 5vw, 1.5rem);

    // Paragraph lg + lg button
    --p-lg-fs: clamp(1.05rem, 3vw, 1.25rem); 

    --p-md-fs: clamp(1rem, 5vw, 1.125rem);

    // Paragraph sm + sm button
    --p-sm-fs: 1rem;
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