import { ProductDetailService } from "../services/productDetailsService";
import { ProductDetailView } from "../view/productDetailsView";

export class ProductDetailController {
  view: ProductDetailView;
  id: string;
  apiService: ProductDetailService;
  constructor(view: ProductDetailView) {
    this.view = view;
    this.apiService = new ProductDetailService();
    this.id = new URLSearchParams(window.location.search).get("id")!;
    this.fetchApiResponse(this.id);
  }
  
  /**
   * @description fethced detail information of a product vis service object.
   */
  async fetchApiResponse(id: string) {
    try {
      const productInfo = await this.apiService.getProductDetail(id);
      if(productInfo !== undefined){
        this.view.addElementsInDOM(productInfo)
      }
    } catch (error) {
      if (error instanceof Error) {
        return alert(error.message);
      }
    }
  }
}
