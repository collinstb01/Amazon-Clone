import axios from "axios"

const API = axios.create({
    baseURL: "http://localhost:5000/api"
})

// export const getUser = (id) => API.get(`/getUser/${id}`, id)
export const signUp = (input) => API.post("/signUp", input)
export const signIn = (input) => API.post("/signIn", input)
export const addToCart2 = (data) => API.post("/addtocart", data)

// deleting a product, all product and fetching a user products
export const fetchUserProducts = (id) => API.get(`/fectchUserProducts/${id}`)
export const deleteAll = (userId) => API.delete(`/deleteAll/${userId}`, userId)
export const deleteOne = ({id, userId}) => API.delete(`/deleteOne/${id}/${userId}`,{id, userId})

