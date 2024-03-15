import styled from "styled-components";

export const Input = styled.input`
    width: 100%;
    height: 30px;
    padding: 0 10px;
    margin: 10px 0;
    border-radius: 5px;
    border: 1px solid #ccc;
    outline: none;
    box-sizing: border-box;
    transition: 0.3s;
    &:focus {
        border: 1px solid red;
    }
`