import styled from 'styled-components';
import {shake} from '../../styles/global'

export const Container = styled.div`
    border: 2px solid gray; 
    text-align: center;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.1);
    margin-top:35px;
    margin-bottom:35px;
    h1{
        font-size: 35px;
        
    }
    h2{
        color: rgb(140, 200, 75);
        font-size: 15px;
        white-space:nowrap;
    }
    h3{
        font-size: 15px;
        color:rgb(42, 199, 227);
        white-space:nowrap;
    }
`;

export const ButtonReply = styled.div`
    padding-left: 30px;
    background: none;
    border: 0;
    a{
        cursor: pointer;
        svg{
            color: gray;
        }
        
    }
    &:hover{
        animation:${shake} 0.82s cubic-bezier(.36,.07,.19,.97) both;
    }
`

export const ButtonFavorite = styled.button.attrs({
    type: 'submit'
})`
    background: none !important;
    border: 0;
    cursor: pointer;
    color: red;
    &:hover{
        animation:${shake} 0.82s cubic-bezier(.36,.07,.19,.97) both;
    }
`