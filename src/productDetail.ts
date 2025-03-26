import { ProductDetailController } from "./controller/productDetailsController";
import { ProductDetailView } from "./view/productDetailsView";

const productDetailcontroller = new ProductDetailController(new ProductDetailView());
document.addEventListener("DOMContentLoaded",() => productDetailcontroller);