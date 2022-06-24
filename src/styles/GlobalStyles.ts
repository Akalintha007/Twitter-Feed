import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    color: var(--white);
}

html, border-style, #root {
    max-width: 100vw;
    max-height: 100vh;

    width: 100%;
    height: 100%;
}

*, button, input {
     border: 0;
     background: none;
     font-family: -apple-system, system-ui ,sans-serif;
}

html {
    background: var(--primary);
}

 :root {
     --primary: #FFF;
     --secondary: #15181C;
     --search: ;
     --white: #D9D9D9;
     --gray: #000;
     --outline: #c2bebe;
     
     --like: #E8265E;
     --twitter: #33A1F2;
   
 }
`;
