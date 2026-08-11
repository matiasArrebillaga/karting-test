import axios from "axios";

const api = axios.create({
    baseURL: "http://localgost:3001/api"
});

export default api;