import { create } from "domain";
import { ClassUtils } from "../ClassUtility/classUtils";
import { ProductDetail } from "../model/productDetail";
import { createCustomLabel, getProductRating } from "../utility/utils";

export class ProductDetailView extends ClassUtils {
  productDetails!: ProductDetail;
  mainSection!: HTMLElement;
  imageContainer!: HTMLElement;
  detailContainer!: HTMLElement;
  productImageElement!: HTMLImageElement;
  productCategoryElement!: HTMLParagraphElement;
  productTagContainer!: HTMLElement;
  productTitleElement!: HTMLHeadingElement;
  productDescElement!: HTMLParagraphElement;
  productRatingContainer!: HTMLElement;
  productPriceElement!: HTMLHeadingElement;
  productDiscountElement!: HTMLParagraphElement;
  productStockElement!: HTMLParagraphElement;
  productWarrantyElement!: HTMLParagraphElement;
  productShippingElemnt!: HTMLParagraphElement;
  productReturnElement!: HTMLParagraphElement;
  productReviewsContainer!: HTMLElement;
  quantityAndCartContainer!: HTMLElement;
  quantityContainer!: HTMLElement;
  decreaseQuantityBtnElement!: HTMLButtonElement;
  quantityElement!: HTMLParagraphElement;
  increaseQuantityBtnElement!: HTMLButtonElement;
  cartBtnElement!: HTMLButtonElement;
  addElementsInDOM(productDetails: ProductDetail) {
    this.productDetails = productDetails;
    this.mainSection = document.querySelector(".products-details-section")!;
    this.addElementsInMainContainer();
    this.addElementsInImageContainer();
    this.addElementsInDetailsContainer();
    this.addElementsInQuantityAndCartContainer();
  }
  addElementsInMainContainer() {
    this.imageContainer = this.createElement("section");
    this.detailContainer = this.createElement("main");
    this.quantityAndCartContainer = this.createElement("section");
    this.addClassName(this.quantityAndCartContainer,'quantity')
    this.mainSection.appendChild(this.imageContainer);
    this.mainSection.appendChild(this.detailContainer);
    this.mainSection.appendChild(this.quantityAndCartContainer);
  }
  addElementsInImageContainer() {
    this.productImageElement = this.createElement("img") as HTMLImageElement;
    this.addSrcAttribute(
      this.productImageElement,
      this.productDetails.thumbnail
    );
    this.imageContainer.appendChild(this.productImageElement);
  }
  addElementsInDetailsContainer() {
    this.productCategoryElement = this.createElement(
      "p"
    ) as HTMLParagraphElement;
    this.addTextContent(
      this.productCategoryElement,
      this.productDetails.category
    );

    this.productTagContainer = this.addTags();

    this.productTitleElement = this.createElement("h1") as HTMLHeadingElement;
    this.addTextContent(this.productTitleElement, this.productDetails.title);

    this.productDescElement = this.createElement("p") as HTMLParagraphElement;
    this.addTextContent(
      this.productDescElement,
      this.productDetails.description
    );

    this.productRatingContainer = this.addRatings();

    this.productPriceElement = this.createElement("h2") as HTMLHeadingElement;
    this.addTextContent(
      this.productPriceElement,
      createCustomLabel(this.productDetails.price, '$')
    );

    this.productDiscountElement = this.createElement(
      "p"
    ) as HTMLParagraphElement;
    this.addTextContent(
      this.productDiscountElement,
      createCustomLabel(this.productDetails.discountPercentage, '% Off')
    );
    this.addClassName(this.productDiscountElement, "discount");

    this.productStockElement = this.createElement("p") as HTMLParagraphElement;
    this.addTextContent(
      this.productStockElement,
      this.productDetails.availabilityStatus
    );
    this.addClassName(this.productStockElement, "stock-availability");

    this.productWarrantyElement = this.createElement(
      "p"
    ) as HTMLParagraphElement;
    this.addTextContent(
      this.productWarrantyElement,
      this.productDetails.warrantyInformation
    );
    this.addClassName(this.productWarrantyElement, "warranty-info");

    this.productShippingElemnt = this.createElement(
      "p"
    ) as HTMLParagraphElement;
    this.addTextContent(
      this.productShippingElemnt,
      this.productDetails.shippingInformation
    );
    this.addClassName(this.productShippingElemnt, "shipping-info");

    this.productReturnElement = this.createElement("p") as HTMLParagraphElement;
    this.addTextContent(
      this.productReturnElement,
      this.productDetails.returnPolicy
    );

    this.productReviewsContainer = this.addReviews();

    this.detailContainer.appendChild(this.productCategoryElement);
    this.detailContainer.appendChild(this.productTagContainer);
    this.detailContainer.appendChild(this.productTitleElement);
    this.detailContainer.appendChild(this.productDescElement);
    this.detailContainer.appendChild(this.productRatingContainer);
    this.detailContainer.appendChild(this.productPriceElement);
    this.detailContainer.appendChild(this.productDiscountElement);
    this.detailContainer.appendChild(this.productStockElement);
    this.detailContainer.appendChild(this.productWarrantyElement);
    this.detailContainer.appendChild(this.productShippingElemnt);
    this.detailContainer.appendChild(this.productReturnElement);
    this.detailContainer.appendChild(this.productReviewsContainer);
  }
  addElementsInQuantityAndCartContainer() {
    this.quantityContainer = this.createElement("div");
    this.decreaseQuantityBtnElement = this.createElement(
      "button"
    ) as HTMLButtonElement;
    this.addTextContent(this.decreaseQuantityBtnElement,'-');
    this.addClassName(this.decreaseQuantityBtnElement,'quantity-button');
    this.quantityElement = this.createElement("p") as HTMLParagraphElement;
    this.addTextContent(this.quantityElement,this.productDetails.minimumOrderQuantity.toString())
    this.increaseQuantityBtnElement = this.createElement(
      "button"
    ) as HTMLButtonElement;
    this.addTextContent(this.increaseQuantityBtnElement,'+');
    this.addClassName(this.increaseQuantityBtnElement,'quantity-button');
    this.quantityContainer.appendChild(this.decreaseQuantityBtnElement);
    this.quantityContainer.appendChild(this.quantityElement);
    this.quantityContainer.appendChild(this.increaseQuantityBtnElement);
    this.quantityAndCartContainer.appendChild(this.quantityContainer);
    this.cartBtnElement = this.createElement("button") as HTMLButtonElement;
    this.addTextContent(this.cartBtnElement,'Add to Cart')
    this.addClassName(this.cartBtnElement,'cart-btn')
    this.quantityAndCartContainer.appendChild(this.cartBtnElement);
  }
  addTags() {
    const productTagContainer: HTMLElement = this.createElement("div");
    this.addClassName(productTagContainer, "tags");
    this.productDetails.tags.forEach((tag: string) => {
      const productTagElement: HTMLParagraphElement = this.createElement(
        "p"
      ) as HTMLParagraphElement;
      this.addTextContent(productTagElement, tag);
      this.addClassName(productTagElement, "tag");
      productTagContainer.appendChild(productTagElement);
    });
    return productTagContainer;
  }
  addRatings() {
    const productRatingContainer: HTMLElement = this.createElement("div");
    this.addClassName(productRatingContainer, "product-rating");

    const productRatingLabelElement = this.createElement(
      "label"
    ) as HTMLLabelElement;
    this.addClassName(productRatingLabelElement, "rating");
    this.addTextContent(
      productRatingLabelElement,
      this.productDetails.rating.toString()
    );

    const productRatingInputElement = this.createElement(
      "input"
    ) as HTMLInputElement;
    this.addInputElementAttributes(productRatingInputElement, [
      { property: "type", value: "range" },
      { property: "id", value: "rating" },
      { property: "disabled", value: "true" },
      {
        property: "value",
        value: getProductRating(this.productDetails.rating),
      },
    ]);

    const productReviewElement = this.createElement(
      "p"
    ) as HTMLParagraphElement;
    this.addClassName(productReviewElement, "product-reviews");
    this.addTextContent(
      productReviewElement,
      createCustomLabel(this.productDetails.reviews.length, ' reviews')
    );

    productRatingContainer.appendChild(productRatingLabelElement);
    productRatingContainer.appendChild(productRatingInputElement);
    productRatingContainer.appendChild(productReviewElement);

    return productRatingContainer;
  }
  addReviews() {
    const reviewsContainer: HTMLElement = this.createElement("div");
    this.addClassName(reviewsContainer, "reviews");

    this.productDetails.reviews.forEach((review) => {
      const singleReviewcontainer: HTMLElement = this.createElement("div");
      this.addClassName(singleReviewcontainer, "review");

      const reviewProfileContainer: HTMLElement = this.createElement("div");
      this.addClassName(reviewProfileContainer, "review-profile-container");

      const reviewInfoContainer: HTMLElement = this.createElement("div");
      this.addClassName(reviewInfoContainer, "reviewer-info");

      const reviewerName = this.createElement("p") as HTMLParagraphElement;
      this.addTextContent(reviewerName, review.reviewerName);

      const reviewerEmail = this.createElement("p") as HTMLParagraphElement;
      this.addTextContent(reviewerEmail, review.reviewerEmail);

      reviewInfoContainer.appendChild(reviewerName);
      reviewInfoContainer.appendChild(reviewerEmail);
      reviewProfileContainer.appendChild(reviewInfoContainer);

      const reviewerRatingContainer: HTMLElement = this.createElement("div");
      this.addClassName(reviewerRatingContainer, "reviewer-rating");

      const rating = this.createElement("p") as HTMLParagraphElement;
      this.addTextContent(rating, review.rating.toString());

      const date = this.createElement("p") as HTMLParagraphElement;
      this.addTextContent(date, review.date.toString());

      reviewerRatingContainer.appendChild(rating);
      reviewerRatingContainer.appendChild(date);
      reviewProfileContainer.appendChild(reviewerRatingContainer);
      singleReviewcontainer.appendChild(reviewProfileContainer);

      const comment = this.createElement("p") as HTMLParagraphElement;
      this.addClassName(comment, "comment");
      this.addTextContent(comment, review.comment);
      singleReviewcontainer.appendChild(comment);
      reviewsContainer.appendChild(singleReviewcontainer);
    });
    return reviewsContainer;
  }
}
