import axios from "axios";

const baseUrl = "localhost:3000/";

const unauthorizedClient = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export { unauthorizedClient };
