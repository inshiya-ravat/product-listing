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
  private pageBtns: HTMLButtonElement[] = [];

  /**
   * @description add elements inside DOM
   */
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

  /**
   * @description add main containers
   */
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
      this.addAriaHidden(this.productImageElement, true);
      this.addAltAttribute(this.productImageElement,'product image');
      this.addLoading(this.productImageElement,"lazy");

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
      this.addAriaHidden(this.productRatingLabelElement,true);

      this.productRatingInputElement = this.createElement(
        "input"
      ) as HTMLInputElement;
      this.addInputElementAttributes(this.productRatingInputElement, [
        { property: "type", value: "range" },
        { property: "id", value: "rating" },
        { property: "disabled", value: "true" },
        { property: "value", value: getProductRating(product.rating) },
      ]);
      this.addAriaHidden(this.productRatingInputElement,true);

      this.productReviewElement = this.createElement(
        "p"
      ) as HTMLParagraphElement;
      this.addClassName(this.productReviewElement, "product-reviews");
      this.addTextContent(
        this.productReviewElement,
        product.reviews.length.toString()
      );
      this.addAriaHidden(this.productReviewElement,true);

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
      this.addTextContent(
        this.productPriceElement,
        createCustomLabel(product.price, "$")
      );
      this.addAriaLabel(this.productPriceElement, `price is ${product.price}`);

      this.productDiscountElement = this.createElement(
        "p"
      ) as HTMLParagraphElement;
      this.addClassName(this.productDiscountElement, "discount");
      this.addTextContent(
        this.productDiscountElement,
        createCustomLabel(product.discountPercentage, "% Off")
      );
      this.addAriaLabel(this.productDiscountElement,`get ${product.discountPercentage} percentage off on buying this product`);

      this.cartBtnElement = this.createElement("button") as HTMLButtonElement;
      this.addClassName(this.cartBtnElement, "cart-btn");
      this.addTextContent(this.cartBtnElement, "Add to Cart");
      this.addAriaLabel(this.cartBtnElement, "add item in cart");

      this.appendChildInParentNode();
    });
  }

  /**
   * @description appends child node into parent
   */
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

  /**
   * @description add button for pagination
   */
  addPageButtons(total: number, limit: number) {
    const buttons = document.getElementById("btns")!;
    this.noOfPages = total / limit;
    while (this.noOfPages >= 0) {
      const btn = this.createElement("button") as HTMLButtonElement;
      this.addClassName(btn, "pageBtn");
      this.addTextContent(btn, Math.ceil(this.noOfPages).toString());
      this.addValueAttribute(btn, Math.ceil(this.noOfPages).toString());
      this.addIdAttribute(btn, `btn-${btn.value}`);
      this.addAriaLabel(btn,`view products of page ${Math.ceil(this.noOfPages)}`);
      this.addCursorType(btn,'pointer');
      this.pageBtns.push(btn);
      this.noOfPages = this.noOfPages - 1;
    }
    for (let i = this.pageBtns.length - 1; i >= 0; i--) {
      buttons.appendChild(this.pageBtns[i]);
    }
    this.pageBtns[this.pageBtns.length - 1].style.backgroundColor = "#e9ecef";
    return this.pageBtns[this.pageBtns.length - 1].value;
  }

  /**
   * @description returns last page number
   */
  getLastPageNumber() {
    return this.pageBtns.length;
  }
}
