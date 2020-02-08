import styled from 'styled-components';
import {shake} from '../../styles/global'

export const Button = styled.div`
    background: rgb(255,125,64);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    color: white;
    padding: 30px;
    border-radius: 4px;
    text-align:center;
    font-size: 25px;
    margin-bottom: 15px;
    &:hover{
        /* background:rgb(247, 222, 32); */
        /* color: gray; */
        animation:${shake} 0.82s cubic-bezier(.36,.07,.19,.97) both;
    }
`;
