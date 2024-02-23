import { Response } from "../datatypes/Response";

class ApiManagement {
  private baseUrl = "https://dummyjson.com";

  public async getAllProducts() {
    const response: any = await fetch(`${this.baseUrl}/products?limit=20`);
    const allProducts: Response = await response.json();
    return allProducts.products;
  }

  public async getAllLimitedProducts(page: number, limit: number) {
    const response: any = await fetch(
      `${this.baseUrl}/products?skip=${page * limit - limit}&limit=${limit}`
    );
    const allProducts: Response = await response.json();
    return allProducts.products;
  }

  public async fetchApiWithQueries() {
    console.log("Fetch with Query");
  }

  public async getAllCategories() {
    const response: any = await fetch(`${this.baseUrl}/products/categories`);
    const allCategories: string[] = await response.json();
    return allCategories;
  }

  // Generic
  // Proper handling of error

  public async getProductsOfCategories(category: string) {
    const response: any = await fetch(
      `${this.baseUrl}/products/category/${category}`
    );
    const allProductsOfCategory: Response = await response.json();
    return allProductsOfCategory.products;
  }

  public async getSearchedProduct(search: string) {
    const response: any = await fetch(
      `${this.baseUrl}/products/search?q=${search}`
    );
    const allSearchData: Response = await response.json();
    return allSearchData.products;
  }

  public async getProductById<Product>(productId: number) {
    const response: any = await fetch(`${this.baseUrl}/products/${productId}`);
    const allSearchData: Product = await response.json();
    return allSearchData;
  }

  public async addNewProduct<Product>(product: Product) {
    fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((result: Product) => {
        return result;
      });
  }

  public async updateProduct<Product>(product: Product) {
    fetch(`https://dummyjson.com/products/1`, {
      method: "PUT" /* or PATCH */,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((result: Product) => {
        return result;
      });
  }

  public async deleteProduct(productId: number) {
    const response = await fetch(
      "https://dummyjson.com/products/" + productId,
      {
        method: "DELETE",
      }
    );
    const deletedResult = await response.json();
    return deletedResult;
  }
}
export const apiManagement = new ApiManagement();
