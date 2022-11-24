


import {createGlobalStyle} from 'styled-components'



const GlobalStyle =  createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=Raleway:wght@100;200;300;600&display=swap');

    body{
        margin:0;
        padding:0;
        box-sizing:border-box;
        
    }

    h1{
        font-family: 'Libre Baskerville', serif;
    }

    p{
        font-family: 'Raleway', sans-serif;
    }
`


export default GlobalStyle;