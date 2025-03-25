import { ProductService } from "../services/productService";
import { Productview } from "../view/productView";
import { Product } from "../model/product";

export class ProductController {
  view: Productview;
  private apiService: ProductService;
  private products: Product[] = [];
  constructor(view: Productview) {
    this.apiService = new ProductService();
    this.fetchApiResponse(1);
    this.view = view;
  }
  async pageClick(e: Event) {
    if (e.target instanceof HTMLButtonElement) {
      this.fetchApiResponse(Number(e.target.value));
    }
  }
  async fetchApiResponse(skipNum: number) {
    try {
      this.products = await this.apiService.getProducts(skipNum);
      this.view.apiResponse(this.products);
    } catch (error) {
      if (error instanceof Error) {
        return alert(error.message);
      }
    }
  }
}
