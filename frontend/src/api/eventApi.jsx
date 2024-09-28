import axios from "axios"
const url = "http://localhost:3000";
// const url = "https://event360.onrender.com";

const api = axios.create({
    baseURL:`${url}`,
})

export const getEvents = () =>{
    return api.get("/api/listEvents");
}