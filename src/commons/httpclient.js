import axios from "axios";

export default axios.create({
  baseURL: "https://employee-list-finals.herokuapp.com",
  headers: {
    "Content-Type": "application/json",
  },
});
