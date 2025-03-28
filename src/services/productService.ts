import { ERROR } from "../constant";

export class ProductService {
  limit: number = 0;
  total: number = 0;
  /**
   * @description fetch api response for product list
   */
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

  /**
   * @description fetch api response for limit and total number of products recieved in an api call.
   */
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
