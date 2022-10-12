import { useEffect, useState } from "react";
import { findPizzas } from "../../services/api/findPizzas";
import { Card } from "../../components/Card/Card";
import { SectionStyled } from "./Home.styles";

export const Home = () => {
    const [pizzas, setPizzas] = useState(null)
    
    useEffect(() => {
        findPizzas()
            .then((response) => {
                console.log(response)
                setPizzas(response.data)
                console.log(pizzas)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])


    return(
        <SectionStyled>
            {        
                pizzas ? pizzas.map((pizza, index) => (
                    <Card 
                        key={index} 
                        id={pizza.id}
                        name={pizza.name}
                        description={pizza.description}
                        ingredients={pizza.ingredients}
                        price={pizza.price}
                        url={pizza.url}
                    />
                )) : <h2>Carregando dados</h2>
            }
        </SectionStyled>
    )
}