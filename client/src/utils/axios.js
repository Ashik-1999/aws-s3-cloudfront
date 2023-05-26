import axios from "axios";

export const baseUrl = "http://localhost:4000";
const instance = axios.create({
    baseURL: baseUrl,
});

export default instance;