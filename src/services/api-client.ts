import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f07f77bc9ab240f19f0a1ba137384fcf",
  },
});