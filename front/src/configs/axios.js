import axios from "axios";

const instance = axios.create({
  // Your backend base url endpoint
  baseURL: "http://localhost:8080",
});

export default instance;
