import axios from 'axios'

export const findPizzas = (id = "") => {
    const url = `http://localhost:3333/pizzas/${id}`
    const headers = {
        "Content-Type": "application/json"
    }

    return axios.get(url, headers)
}