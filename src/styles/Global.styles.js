import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
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

:root {
    font-size: 62.5%
}

body{
    text-rendering: optimizeSpeed;
    background-color: white;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.6rem;

    // CSS Variables

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

    // 28.8px - 45px
    --h1-fs: clamp(2.9rem, 3.8vw, 4.5rem);
    // 24px - 40px
    --h2-fs: clamp(2.4rem, 5vw, 4rem);
    // 19px - 36px 
    --h3-fs: clamp(1.9rem, 5vw, 3.6rem);
    // 19px - 24px
    --h4-link-fs: clamp(1.9rem, 5vw, 2.4rem);

    // Paragraph lg
    // 17px - 20px
    --p-lg-fs: clamp(1.7rem, 1.5vw, 2rem);  

    // Paragraph md
    // 16px - 18px
    --p-md-fs: clamp(1.6rem, 3vw, 1.8rem);
}

main {
    max-width: 1600px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
}

h1, h2, h3 {
    font-weight: 700; 
}

h1 {
    // 28.8px - 45px
    font-size: var(--h1-fs);
    line-height: clamp(3.2rem, 5vw, 5.1rem); 
}

h2 {
    // 24px - 40px
    font-size: var(--h2-fs);
    line-height: clamp(3.1rem, 5vw, 5rem); 
}

h3 {
    // 19px - 36px 
    font-size: var(--h3-fs);
}

a, h4 {
    // 19px - 24px
    font-size: var(--h4-link-fs)
}

p, button {
    line-height: 2rem;
}

.p-lg {
    // 17px - 20px
    font-size: var(--p-lg-fs);
    line-height: clamp(2.2rem, 5vw, 2.4rem); 
}

.p-md {
    // 16px - 18px
    font-size: var(--p-md-fs);
    line-height: clamp(2rem, 5vw, 2.2rem); 
}
`;

export default GlobalStyles;

