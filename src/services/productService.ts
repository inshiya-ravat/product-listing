import { ERROR } from "../constant";

export class ProductService {
  limit: number = 0;
  total: number = 0;
  async getProducts(pageNum: number) {
    try {
      const response = await fetch(
        `https://dummyjson.com/products?skip=${(pageNum - 1) * 30}`
      );
      if (!response.ok) {
        throw new Error(`${response.status} ${ERROR}`);
      }
      const data = await response.json();
      return data.products;
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
    }
  }
  async getLimitAndTotalPRoducts() {
    try {
      const response = await fetch("https://dummyjson.com/products");
      if (!response.ok) {
        throw new Error(`${response.status} ${ERROR}`);
      }
      const data = await response.json();
      this.limit = data.limit;
      this.total = data.total;
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
    }
  }
}
