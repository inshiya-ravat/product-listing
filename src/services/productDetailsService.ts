import { ERROR } from "../constant";
import { ProductDetail } from "../model/productDetail";

export class ProductDetailService {
  async getProductDetail(id: string) {
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      if (!response.ok) {
        throw new Error(`${response.status} ${ERROR}`);
      }
      const data:ProductDetail = await response.json();
      return data;
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
    }
  }
}
