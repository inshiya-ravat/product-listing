import { product } from "./model/product";
import { createCustomLabel, getProductRating } from "./utility/utils";

async function getProducts(num: number) {
  const response = await fetch(
    `https://dummyjson.com/products?skip=${(num - 1) * 30}`
  );
  if (response.ok) {
    const data = await response.json();
    const products: product[] = data.products;

    const mainSection = document.querySelector(".main");
    if (mainSection?.hasChildNodes) {
      document.querySelector(".main-section")?.remove();
    }
    const mainDivElement = document.createElement("div");
    mainDivElement.className = "main-section";

    products.forEach((product: product) => {
      //containers
      const productSection = document.createElement("a");
      productSection.className = "product-section";
      productSection.href = "#";

      const productImageContainer = document.createElement("div");
      productImageContainer.className = "img-container";

      const productInfoContainer = document.createElement("div");
      productInfoContainer.className = "product-info";

      const productRatingContainer = document.createElement("div");
      productRatingContainer.className = "product-rating";

      //elements
      const productImageElement = document.createElement("img");
      productImageElement.src = product.thumbnail;

      const productNameElement = document.createElement("p");
      productNameElement.className = "product-name";
      productNameElement.textContent = product.title;

      const productRatingLabelElement = document.createElement("label");
      productRatingLabelElement.className = "rating";
      productRatingLabelElement.textContent = product.rating.toString();

      const productRatingInputElement = document.createElement("input");
      productRatingInputElement.type = "range";
      productRatingInputElement.id = "rating";
      productRatingInputElement.disabled = true;
      productRatingInputElement.value = getProductRating(product.rating);

      const productReviewElement = document.createElement("p");
      productReviewElement.className = "product-reviews";
      productReviewElement.textContent = product.reviews.length.toString();

      const stockAvailabilityElement = document.createElement("p");
      stockAvailabilityElement.className = "stock-availability";
      stockAvailabilityElement.textContent = createCustomLabel(
        product.stock,
        " available in stock!"
      );

      const productPriceElement = document.createElement("p");
      productPriceElement.className = "product-price";
      productPriceElement.textContent = createCustomLabel(product.price, "$");

      const productDiscountElement = document.createElement("p");
      productDiscountElement.className = "discount";
      productDiscountElement.textContent = createCustomLabel(
        product.discountPercentage,
        "% Off"
      );

      const cartBtnElement = document.createElement("button");
      cartBtnElement.className = "cart-btn";
      cartBtnElement.title = "Add to Cart";
      cartBtnElement.textContent = "Add to Cart";

      //append
      productImageContainer.appendChild(productImageElement);
      productRatingContainer.appendChild(productRatingLabelElement);
      productRatingContainer.appendChild(productRatingInputElement);
      productRatingContainer.appendChild(productReviewElement);
      productInfoContainer.appendChild(productImageContainer);
      productInfoContainer.appendChild(productNameElement);
      productInfoContainer.appendChild(productRatingContainer);
      productInfoContainer.appendChild(stockAvailabilityElement);
      productInfoContainer.appendChild(productPriceElement);
      productInfoContainer.appendChild(productDiscountElement);
      productInfoContainer.appendChild(cartBtnElement);
      productSection.appendChild(productImageContainer);
      productSection.appendChild(productInfoContainer);
      mainDivElement?.appendChild(productSection);
      mainSection?.appendChild(mainDivElement);
    });
  }
}
const paginationSection = document.querySelector(".pagination")!;
paginationSection.addEventListener("click", (event: Event) => {
  if (event.target instanceof HTMLButtonElement) {
    getProducts(Number(event.target.value));
  }
});
