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
    background: ${({ theme }) => theme.colors.brown};
    background: linear-gradient(${({ theme }) => theme.colors.lightBrown}, ${({ theme }) => theme.colors.brown} );
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

.button-one {
    box-shadow:
    0 4px 8px rgba(0, 0, 0, 0.1),
    0 6px 20px rgba(0, 0, 0, 0.1);
    font-family: 'Rowdies' sans-serif;
    font-weight: bold;
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
        opacity: 0.8;
    }
}

.button-two {
    box-shadow:
    0 4px 8px rgba(0, 0, 0, 0.1),
    0 6px 20px rgba(0, 0, 0, 0.1);
    font-family: 'Rowdies' sans-serif;
    font-weight: bold;
    font-style: normal;
    font-size: 2rem;
    background-color: ${({ theme }) => theme.colors.darkBrown};
    color: ${({ theme }) => theme.colors.white};
    border: none;
    padding: 1.5rem;
    border-radius: 1rem;
    transition: 0.1s;
    cursor: pointer;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;

    &:hover {
        opacity: 0.8;
    }
}


.section {
    min-height: 100vh;
}

`;
