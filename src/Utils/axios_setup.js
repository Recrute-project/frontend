import axios from "axios"
import backend from "./backend"

let instance = axios.create({
   baseURL: backend.settings.baseURL,
   withCredentials: true
})

export default instance;