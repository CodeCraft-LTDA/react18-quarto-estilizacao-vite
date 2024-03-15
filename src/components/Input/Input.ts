import styled, {keyframes} from "styled-components";

const rotate = keyframes`
    from {
        transform: rotate(0deg) scale(1);
    }
    to {
        transform: rotate(360deg) scale(3);
    }
`

export const Input = styled.input`
    width: 100%;
    height: 30px;
    padding: 0 10px;
    margin: 10px 0;
    border-radius: 5px;
    border: 1px solid #ccc;
    outline: none;
    box-sizing: border-box;
    animation: ${rotate} 2s alternate-reverse infinite;
    transition: 0.3s;
    &:focus {
        border: 1px solid red;
    }
`