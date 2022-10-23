import axios from 'axios'



export const createPizzas = (body) => {
    console.log("BODY: ", body)
    const url = `http://localhost:3333/pizzas`
    const headers = {
        "Content-Type": "application/json"
    }
    return axios.post(url, body, headers)
}