import axios from "axios"

const API = axios.create({
    baseURL: "http://localhost:5000/api"
})

export const getUser = (id) => API.get(`/getUser/${id}`, id)
export const signUp = (input) => API.post("/signUp", input)
export const signIn = (input) => API.post("/signIn", input)
