import axios, { AxiosResponse } from "axios";
import { Product } from "../datatypes/Product";

interface ApiResponse {
  products: Product[];
}

class ApiManagement {
  private baseUrl = "https://dummyjson.com"; 
  public async getAllProducts(){
    try {
      const response: AxiosResponse<ApiResponse> = await axios.get(`${this.baseUrl}/products`, {
        params: {
          limit: 50
        }
      });
      return response.data.products;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  }
  public async getProductById(productId: number) {
    try {
      const response: AxiosResponse<Product> = await axios.get(`${this.baseUrl}/products/${productId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  }
}
export const apiManagement = new ApiManagement();
