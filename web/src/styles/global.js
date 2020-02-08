import { createGlobalStyle, keyframes } from 'styled-components'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, border-style, #root{
        min-height:100%;
    }

    body{
        background: #e0e0e0;
        -webkit-font-smoothing: antialiased !important;
    }

    body, input, button{
        color: #222;
        font-size: 14px;
        font-family: Arial, Helvetica, sans-serif;
    }
    button{
        cursor: pointer;
    }
`

export const shake = keyframes`
    10%, 90%{transform:translate3d(-1px, 0, 0);}
    20%, 80%{transform:translate3d(2px, 0, 0);}
    30%, 50%, 70%{transform:translate3d(-2px, 0, 0);}
    40%, 60%{transform:translate3d(2px, 0, 0);}
`