import { ProductService } from "../services/productService";
import { Productview } from "../view/productView";
import { Product } from "../model/product";

export class ProductController {
  view: Productview;
  private apiService: ProductService;
  private products: Product[] = [];
  constructor(view: Productview) {
    this.apiService = new ProductService();
    this.view = view;
    this.fetchApiResponse(1);
    this.addPagination();
  }
  async pageClick(e: Event) {
    if (e.target instanceof HTMLButtonElement) {
      const btns = document.querySelectorAll(
        ".pageBtn"
      )! as NodeListOf<HTMLButtonElement>;
      btns.forEach((btn) => {
        if (e.target instanceof HTMLButtonElement) {
          if (e.target.value === btn.value) {
            e.target.style.backgroundColor = "lightgray";
          } else {
            btn.style.backgroundColor = "inherit";
          }
        }
      });
      this.fetchApiResponse(Number(e.target.value));
    }
  }
  async fetchApiResponse(skipNum: number) {
    try {
      this.products = await this.apiService.getProducts(skipNum);
      this.view.addElementsInDOM(this.products);
    } catch (error) {
      if (error instanceof Error) {
        return alert(error.message);
      }
    }
  }
  async addPagination() {
    await this.apiService.getLimitAndTotalPRoducts();
    this.view.addPageButtons(this.apiService.total, this.apiService.limit);
  }
}
