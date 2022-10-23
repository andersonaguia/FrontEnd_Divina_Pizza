import styled from "styled-components";

export const NavStyled = styled.nav`
    width: 100%;
    height: 70px;
    padding: 0 20px;
    background-color: #546a7b;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const UlStyled = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;
    text-transform: uppercase;
    
    gap: 20px;

    & a{
        color: #fdfdff;
        &:hover{
            opacity: 0.7;
        }
    }
`

export const HeaderStyled = styled.header`
    font-size: 1.5rem;
    color: #fdfdff;
`