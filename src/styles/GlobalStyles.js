import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body{
        font-family: sans-serif;
        background-color: lightgrey;
    }

    span{
        color: #854DFF;
    }
    hr{
        width: 100%;
        height: 1px;
        background-color: lightgray;
    }

    .container{
        width: 1440px;
        height: 100vh;
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    .containerCalculator{
        width: 840px;
        height: 700px;
        background-color: white;
        border-radius: 24px 24px 200px 24px;
        box-shadow: 3px 3px 10px rgba(0,0,0,0.2);
    }

    .containerForm{
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 20%;
    }

    .containerButton{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

`;

export {GlobalStyles};