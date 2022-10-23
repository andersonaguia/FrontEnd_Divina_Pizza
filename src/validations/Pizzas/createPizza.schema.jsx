import * as yup from 'yup'

export const createPizzaSchema = yup.object().shape({
    name: yup.string().min(4).max(30).required("Nome é obrigatório"),
    description: yup.string().min(6).max(50).required("Descrição é obrigatório"),
    url: yup.string().url("Digite uma URL válida").required("Imagem da pizza é obrigatória"),
    price: yup.number("Preço deve ser um número").positive("Preço deve ser maior que zero").required("Obrigatório inserir o preço da pizza"),
    ingredients: yup.string().required("Obrigatório inserir os ingredientes")
}).required()