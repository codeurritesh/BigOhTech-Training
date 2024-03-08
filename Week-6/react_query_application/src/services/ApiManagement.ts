import axios from "axios";
import { Response } from "../dataTypes/Response";

export class ApiManagement {
    private baseUrl = "http://localhost:3000/posts";
  static getData() {
    console.log("Fetching apipi");
    return axios
      .get("http://localhost:3000/posts")
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        return error;
      });
  }
  static async postData(postData:Response) {
    const response=await axios.post('http://localhost:3000/posts', postData)
    return response.data;
  };
}
