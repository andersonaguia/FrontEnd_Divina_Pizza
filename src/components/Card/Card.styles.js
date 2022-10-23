import styled from "styled-components";

export const DivStyled = styled.div`
    width: 400px;
    min-height: 200px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;
    background-color: #c6c5b9;
    color: #393d3f;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    & h2{
        font-size: 1.2rem;
    }

    & p{
        font-size: 0.8rem;
    }

    & li{
        font-size: 0.8rem;
    }
`

export const ImgStyled = styled.img`
    width: 150px;
    height: 200px;
    border-radius: 10px 0 0 10px;
`

export const UlStyled = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 5px;
    list-style-type: none;

    & ul{
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 10px;
        list-style-type: none;
        flex-wrap: wrap;       
    }
`