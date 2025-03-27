import { ProductDetailController } from "./controller/productDetailsController";
import { ProductDetailView } from "./view/productDetailsView";

document.addEventListener("DOMContentLoaded", () => {
  new ProductDetailController(new ProductDetailView());
});
