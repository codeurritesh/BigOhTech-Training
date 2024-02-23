import { apiType } from "../datatypes/api-type";

export class ApiManagement {
  private baseUrl = "https://picsum.photos/v2/list";

  public async fetchApi() {
    const apiresponse: any = await fetch(this.baseUrl);
    const apiData: apiType = await apiresponse.json();
    console.log(apiData);
    return apiData;
  }
  public async fetchApiWithQueries() {
    console.log("Fetch with Query");
  }
}

class DataProviders {
  private baseUrl = "https://dummyjson.com";

  async get<TData>(url: string) {
    return await fetch(`${this.baseUrl}${url}`).then(res=>res.json) as Promise<TData>;
  }
  
  // Post, put, patch, delete
}

const fetcher = new DataProviders();

type ProductResponse = { id:string}

export class Product {
  public async getProducts() {
    const data = await fetcher.get<ProductResponse[]>("/products");

    return data
  }

  public async getProduct(id: string) {}
}

export const productApi = new Product()
