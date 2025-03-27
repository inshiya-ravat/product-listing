import { ERROR } from "../constant";

export class ProductService {
  async getProducts(pageNum: number) {
    const response = await fetch(
      `https://dummyjson.com/products?skip=${(pageNum - 1) * 30}`
    );
    if (!response.ok) {
      throw new Error(`${response.status} ${ERROR}`);
    }
    try {
      const data = await response.json();
      return data.products;
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
    }
  }
}
