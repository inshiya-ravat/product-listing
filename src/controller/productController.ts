import { Productview } from "../view/productView";

export class ProductController {
  view: Productview;
  constructor(view: Productview) {
    this.view = view;
  }
  pageClick(e: Event) {
    if (e.target instanceof HTMLButtonElement) {
      this.view.apiResponse(Number(e.target.value));
    }
  }
}
