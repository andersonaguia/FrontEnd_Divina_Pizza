import { NavStyled, UlStyled, HeaderStyled } from "./Navbar.styles";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return(
        <NavStyled>
            <HeaderStyled>Divina Pizza</HeaderStyled>
            <UlStyled>
                <li>
                    <Link to="/register">Cadastrar</Link>
                </li>
                <li>
                    <Link to="/home">Home</Link>
                </li>
            </UlStyled> 
        </NavStyled>
    )
}