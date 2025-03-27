import { ClassUtils } from "../ClassUtility/classUtils";
import { Product } from "../model/product";
import { createCustomLabel, getProductRating } from "../utility/utils";

export class Productview extends ClassUtils {
  private products: Product[] = [];
  private mainSection!: HTMLElement;
  private mainDivElement!: HTMLElement;
  private productSection!: HTMLAnchorElement;
  private productImageContainer!: HTMLElement;
  private productInfoContainer!: HTMLElement;
  private productRatingContainer!: HTMLElement;
  private productImageElement!: HTMLImageElement;
  private productNameElement!: HTMLParagraphElement;
  private productRatingLabelElement!: HTMLLabelElement;
  private productRatingInputElement!: HTMLInputElement;
  private productReviewElement!: HTMLParagraphElement;
  private stockAvailabilityElement!: HTMLParagraphElement;
  private productPriceElement!: HTMLParagraphElement;
  private productDiscountElement!: HTMLParagraphElement;
  private cartBtnElement!: HTMLButtonElement;
  private noOfPages!: number;
  addElementsInDOM(products: Product[]) {
    this.products = products;
    this.mainSection = document.querySelector(".main")!;
    if (this.mainSection.hasChildNodes()) {
      document.querySelector(".main-section")?.remove();
    }
    this.mainDivElement = this.createElement("div");
    this.addClassName(this.mainDivElement, "main-section");
    this.addElementsInMain();
  }

  private addElementsInMain() {
    this.products.forEach((product: Product) => {
      this.productSection = this.createElement("a") as HTMLAnchorElement;
      this.addClassName(this.productSection, "product-section");
      this.addHrefAttribute(
        this.productSection,
        `product?id=${product.id.toString()}`
      );

      this.productImageContainer = this.createElement("div");
      this.addClassName(this.productImageContainer, "img-container");

      this.productInfoContainer = this.createElement("div");
      this.addClassName(this.productInfoContainer, "product-info");

      this.productRatingContainer = this.createElement("div");
      this.addClassName(this.productRatingContainer, "product-rating");

      this.productImageElement = this.createElement("img") as HTMLImageElement;
      this.addSrcAttribute(this.productImageElement, product.thumbnail);

      this.productNameElement = this.createElement("p") as HTMLParagraphElement;
      this.addClassName(this.productNameElement, "product-name");
      this.addTextContent(this.productNameElement, product.title);

      this.productRatingLabelElement = this.createElement(
        "label"
      ) as HTMLLabelElement;
      this.addClassName(this.productRatingLabelElement, "rating");
      this.addTextContent(
        this.productRatingLabelElement,
        product.rating.toString()
      );

      this.productRatingInputElement = this.createElement(
        "input"
      ) as HTMLInputElement;
      this.addInputElementAttributes(this.productRatingInputElement, [
        { property: "type", value: "range" },
        { property: "id", value: "rating" },
        { property: "disabled", value: "true" },
        { property: "value", value: getProductRating(product.rating) },
      ]);

      this.productReviewElement = this.createElement(
        "p"
      ) as HTMLParagraphElement;
      this.addClassName(this.productReviewElement, "product-reviews");
      this.addTextContent(
        this.productReviewElement,
        product.reviews.length.toString()
      );

      this.stockAvailabilityElement = this.createElement(
        "p"
      ) as HTMLParagraphElement;
      this.addClassName(this.stockAvailabilityElement, "stock-availability");
      this.addTextContent(
        this.stockAvailabilityElement,
        createCustomLabel(product.stock, " available in stock!")
      );

      this.productPriceElement = this.createElement(
        "p"
      ) as HTMLParagraphElement;
      this.addClassName(this.productPriceElement, "product-price");
      this.addTextContent(this.productPriceElement, product.price.toString());

      this.productDiscountElement = this.createElement(
        "p"
      ) as HTMLParagraphElement;
      this.addClassName(this.productDiscountElement, "discount");
      this.addTextContent(
        this.productDiscountElement,
        createCustomLabel(product.discountPercentage, "% Off")
      );

      this.cartBtnElement = this.createElement("button") as HTMLButtonElement;
      this.addClassName(this.cartBtnElement, "cart-btn");
      this.addTextContent(this.cartBtnElement, "Add to Cart");

      this.appendChildInParentNode();
    });
  }

  private appendChildInParentNode() {
    this.productImageContainer.appendChild(this.productImageElement);
    this.productRatingContainer.appendChild(this.productRatingLabelElement);
    this.productRatingContainer.appendChild(this.productRatingInputElement);
    this.productRatingContainer.appendChild(this.productReviewElement);
    this.productInfoContainer.appendChild(this.productImageContainer);
    this.productInfoContainer.appendChild(this.productNameElement);
    this.productInfoContainer.appendChild(this.productRatingContainer);
    this.productInfoContainer.appendChild(this.stockAvailabilityElement);
    this.productInfoContainer.appendChild(this.productPriceElement);
    this.productInfoContainer.appendChild(this.productDiscountElement);
    this.productInfoContainer.appendChild(this.cartBtnElement);
    this.productSection.appendChild(this.productImageContainer);
    this.productSection.appendChild(this.productInfoContainer);
    this.mainDivElement?.appendChild(this.productSection);
    this.mainSection?.appendChild(this.mainDivElement);
  }

  addPageButtons(total: number, limit: number) {
    const buttons = document.getElementById("btns")!;
    this.noOfPages = total / limit;
    const pageBtns = [];
    while (this.noOfPages >= 0) {
      const btn = this.createElement("button") as HTMLButtonElement;
      this.addClassName(btn, "pageBtn");
      this.addTextContent(btn, Math.ceil(this.noOfPages).toString());
      this.addValueAttribute(btn, Math.ceil(this.noOfPages).toString());
      pageBtns.push(btn);
      this.noOfPages = this.noOfPages - 1;
    }
    for (let i = pageBtns.length - 1; i >= 0; i--) {
      buttons.appendChild(pageBtns[i]);
    }
  }
}
