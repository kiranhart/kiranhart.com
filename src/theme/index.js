import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
 
    *,
    *::after,
    *::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        align-items: center;
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};

        height: 100vh;

        font-family: 'Lato', -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        transition: all 0.25s linear;
    }

    .active-link {
        color: ${({ theme }) => theme.text};
        opacity: 0.7;
    }
    
    a {
        text-decoration: none;
        color: ${({ theme }) => theme.text};

        transition: all 0.25s linear;

        &:hover {
            opacity: 0.7;
        }
    }
`;

export const lightTheme = {
    body: '#FAFAFA',
    text: '#070707',
    toggleBorder: '#FFF',
    gradient: 'linear-gradient(#39598A, #79D7ED)',
};
  
export const darkTheme = {
    body: '#070707',
    text: '#FAFAFA',
    toggleBorder: '#6B8096',
    gradient: 'linear-gradient(#091236, #1E215D)',
};