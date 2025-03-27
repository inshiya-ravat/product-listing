import { ProductController } from "./controller/productController";
import { Productview } from "./view/productView";
const productController = new ProductController(new Productview());
document.addEventListener("DOMContentLoaded", () => productController);
const paginationSection = document.querySelector(".pagination")!;
paginationSection.addEventListener("click", (e: Event) => {
  productController.pageClick(e);
});
