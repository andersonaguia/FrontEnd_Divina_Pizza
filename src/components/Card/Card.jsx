import PropTypes from 'prop-types'
import { DivStyled, ImgStyled, UlStyled } from './Card.styles'

export const Card = ({ id, name, description, ingredients, price, url}) => {
    return(
        <DivStyled>
            <ImgStyled src={url} alt="foto da pizza"/>
            <UlStyled>
                <li>
                    <h2>{name}</h2>
                </li>
                <li>
                    <p>{description}</p>
                </li>
                <li>
                    <h4>Ingredientes:</h4>
                    <ul>                        
                        {
                            ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))
                        }            
                    </ul>
                </li>
                <li>
                    <h3>R$ {price.toFixed(2)}</h3>
                </li>
            </UlStyled>                        
        </DivStyled>        
    )
}

Card.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    ingredients: PropTypes.array.isRequired,
    price: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired
}