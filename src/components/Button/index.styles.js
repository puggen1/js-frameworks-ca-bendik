import styled from "styled-components";


const Button = styled.button`
    background-color: #EAAA52 ;
    border-radius: 5px;
    border: solid 1px #EAAA52;
    padding: 5px 10px;
    color: #464343;
    text-decoration: none;
    box-sizing: border-box;
    :hover{
        cursor: pointer;
        background-color: #fff;

    };
    :active{
        border-color: #000;
        background-color: #fff;
    }
`


export {Button};