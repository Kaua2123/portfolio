import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 62.5%; /* para uso da medida relativa "rem"  */
    scroll-behavior: smooth;
}

body {
    font-size: 1.7rem;
    background: linear-gradient(#C8835D, #62402E);
    line-height: 1.5;
}

h1, h2, h3, h4, h5, h6 {
    font-family: 'Abril Fatface regular';
    color: ${({ theme }) => theme.colors.white};
}

h1 {
    font-size: 6rem;
}

h2 {
    font-size: 5rem;
}

h3 {
    font-size: 4rem;
}

h4 {
    font-size: 3.5rem;
}

h5 {
    font-size: 3rem;
}

h6 {
    font-size: 2.5rem;
}

a {
    text-decoration: none;
}

button {
    font-family: 'Rowdies' sans-serif;
    font-weight: 850;
    font-style: normal;
    font-size: 2rem;
    background-color: ${({ theme }) => theme.colors.darkerBrown};
    color: ${({ theme }) => theme.colors.white};
    border: none;
    padding: 2rem;
    border-radius: 0.4rem;
    width: 25rem;
    transition: 0.1s;
    cursor: pointer;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;

    &:hover {
        color: ${({ theme }) => theme.colors.lightBrown};
    }
}

.section {
    height: 100vh;
}

`;
