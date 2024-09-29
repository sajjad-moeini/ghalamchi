import axios from "axios";

export const Http = axios.create({
       baseURL:import.meta.env.VITE_API_URL
})