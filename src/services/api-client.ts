import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6fdf47f0da2f48d086b485ff64abb795",
  },
});
