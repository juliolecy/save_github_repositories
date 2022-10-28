import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
}

html{
    font-size: 62.5%;
    scroll-behavior: smooth;
}

body{
    background: #0d2636;
    font-size: 1.6rem;
}

html, body, #JLINS{
    min-height: 100%;
}


body, input, button{
    color: #222;
    font-family: Arial, Helvetica, sans-serif;
}

button{
    cursor: pointer;
}
`;
