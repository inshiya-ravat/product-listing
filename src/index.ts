import { ProductController } from "./controller/productController";
import { Productview } from "./view/productView";

document.addEventListener("DOMContentLoaded", () => {
  const productController = new ProductController(new Productview());
  const mainSection = document.querySelector(".main")!;
  mainSection.addEventListener("click", (e: Event) => {
    if (e.target instanceof HTMLButtonElement) {
      e.preventDefault();
    }
  });
  const paginationSection = document.getElementById("btns")!;
  paginationSection.addEventListener("click", (e: Event) => {
    productController.pageClick(e);
  });
  const nextbutton = document.getElementById("next")!;
  nextbutton.addEventListener("click", (e: Event) => {
    productController.handleNextClicked(e);
  });
  const prevButton = document.getElementById("prev")!;
  prevButton.addEventListener("click", (e: Event) => {
    productController.handlePrevClicked(e);
  });
});
