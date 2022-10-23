import { createPizzaSchema } from "../../validations/Pizzas/createPizza.schema"
import { useForm } from "react-hook-form";
import { createPizzas } from './../../services/api/createPizzas';
import { DivStyled, FormStyled, InputStyled } from "./Register.styles";
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { yupResolver } from '@hookform/resolvers/yup'

export const Register = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(createPizzaSchema)
    })

    const onSubmit = (data) => {
        data.ingredients = data.ingredients.split(",")
        console.log(data)
        
            
        createPizzas(data)        
            .then((response) => {
                console.log(response.data)
                toast.success("Pizza cadastrada com sucesso")
                reset()                          
            })
            .catch((error) => {
                console.log(error)
                toast.error(error.response.data.error)
            })
        

       
    }

    return(
        <>
            <ToastContainer 
                theme="light" 
                position="top-center" 
                autoClose={3000}
                closeOnClick
            />
            <FormStyled onSubmit={handleSubmit(onSubmit)}>
                <h2>Cadastro de Pizzas</h2>  
                <DivStyled>
                    <label htmlFor="name">Nome</label>
                    <InputStyled type="text" id="name" placeholder="Digite o nome da pizza" {...register ('name')}/>
                    <span hidden={true}>{toast.error(errors.name?.message)}</span>
                </DivStyled>
                <DivStyled>
                    <label htmlFor="description">Descrição</label>
                    <InputStyled type="text" id="description" placeholder="Digite a descrição da pizza" {...register ('description')}/>
                    <span hidden={true}>{toast.error(errors.description?.message)}</span>
                </DivStyled>
                <DivStyled>
                    <label htmlFor="url">URL</label>
                    <InputStyled type="url" id="url" placeholder="Digite URL contendo a imagem da pizza" {...register ('url')}/>
                    <span hidden={true}>{toast.error(errors.url?.message, {toastID: "url"})}</span>
                </DivStyled>
                <DivStyled>
                    <label htmlFor="price">Preço</label>
                    <InputStyled type="number" id="price" placeholder="Digite o preço da pizza" {...register ('price')}/>
                    <span hidden={true}>{toast.error(errors.price?.message)}</span>
                </DivStyled>
                <DivStyled>
                    <label htmlFor="ingredients">Ingredientes</label>
                    <InputStyled type="text" id="ingredients" placeholder="Digite os ingredientes da pizza" {...register ('ingredients')}/>
                    <span hidden={true}>{toast.error(errors.ingredients?.message)}</span>
                </DivStyled>
                <button type="submit">Cadastrar</button>
            </FormStyled>
        </>
        
    )
}