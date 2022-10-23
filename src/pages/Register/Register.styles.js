import styled from "styled-components";

export const FormStyled = styled.form`
    width: 400px;  
    padding: 20px; 
    background-color: #62929e;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    color: #fdfdff;

    & button{
        width: 100px;
        height: 40px;
        border-radius: 30px;
        border: none;
        background-color: #393d3f;
        cursor: pointer;
        color: #fdfdff;

        &:hover{
            opacity: 0.7;
        }
    }

`
export const DivStyled = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`
export const InputStyled = styled.input`
    padding: 0 5px;
    border-radius: 5px;
    border: none;

`