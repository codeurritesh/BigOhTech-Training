import axios from "axios";

export class ApiManagement {
  // private baseUrl = "https://picsum.photos/v2/list";
    private baseUrl = "http://localhost:3000/posts";
  static getUserData() {
    console.log("Fetching apipi");
    return axios
      .get("https://picsum.photos/v2/list")
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        return error;
      });
  }

  getUserData() {
    console.log("Fetching apipi");
    return axios
      .get(this.baseUrl)
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        return error;
      });
  }
}
export const apiManagement = new ApiManagement();
