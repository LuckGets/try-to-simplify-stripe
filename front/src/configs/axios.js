import { Axios } from "axios";

const axios = new Axios();

// Your backend base url endpoint
axios.defaults.baseURL = "http://localhost:8080";

export default axios;
