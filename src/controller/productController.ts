import { ProductService } from "../services/productService";
import { Productview } from "../view/productView";
import { Product } from "../model/product";

/**
 * @description controller for prduct list page. handles business logic
 */
export class ProductController {
  view: Productview;
  private apiService: ProductService;
  private products: Product[] = [];
  private currentPageValue: string = "1";
  constructor(view: Productview) {
    this.apiService = new ProductService();
    this.view = view;
    this.fetchApiResponse(1);
    this.addPagination();
  }

  /**
   * @description handles page click event for pagination, fetches api response for respective page clicked
   */
  async pageClick(e: Event) {
    if (e.target instanceof HTMLButtonElement) {
      this.currentPageValue = this.view.handlePageClick(e);
      await this.fetchApiResponse(Number(e.target.value));
    }
  }

  /**
   * @description handles next button click event. Fetches api response for next page
   */
  async handleNextClicked(e: Event) {
    if (e.target instanceof HTMLButtonElement) {
      this.view.handleDisableStyle("next",Number(this.currentPageValue),e);
      this.currentPageValue = (Number(this.currentPageValue) + 1).toString();
      await this.fetchApiResponse(Number(this.currentPageValue));
      this.view.handleBackgroundStyle("next",Number(this.currentPageValue));
    }
  }

  /**
   * @description handles previous button click event. Fetches api repsonse for previous page.
   */
  async handlePrevClicked(e: Event) {
    if (e.target instanceof HTMLButtonElement) {
      this.view.handleDisableStyle("prev",Number(this.currentPageValue),e);
      this.currentPageValue = (Number(this.currentPageValue) - 1).toString();
      await this.fetchApiResponse(Number(this.currentPageValue));
      this.view.handleBackgroundStyle("prev",Number(this.currentPageValue));
    }
  }

  /**
   * @description fetches api reponse via service object and calls view method to add elements to the DOM.
   */
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

  /**
   * @description fetches limit and total products information through api call.
   */
  async addPagination() {
    await this.apiService.getLimitAndTotalPRoducts();
    this.currentPageValue = this.view.addPageButtons(
      this.apiService.total,
      this.apiService.limit
    );
  }
}
