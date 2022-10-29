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
    background-image: linear-gradient(to right top, #000000, #020202, #040304, #050507, #050709, #060b0d, #060e11, #061113, #061518, #06181c, #051b20, #031e25);
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
