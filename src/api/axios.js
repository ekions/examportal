import axios from "axios";

const API = axios.create({
  baseURL: "https://vocabulary-presently-false-develops.trycloudflare.com",
  withCredentials: true, // if you’re using cookies/sessions
});

export default API;