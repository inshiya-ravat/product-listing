import { ProductService } from "../services/productService";
import { Productview } from "../view/productView";
import { Product } from "../model/product";
import { $ } from "../utility/utils";

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
  async pageClick(e: Event) {
    if (e.target instanceof HTMLButtonElement) {
      const btns = document.querySelectorAll(
        ".pageBtn"
      )! as NodeListOf<HTMLButtonElement>;
      btns.forEach((btn) => {
        if (e.target instanceof HTMLButtonElement) {
          if (e.target.value === btn.value) {
            e.target.style.backgroundColor = "lightgray";
            this.currentPageValue = btn.value;
            const nextEl = document.getElementById(
              "next"
            )! as HTMLButtonElement;
            const prevEl = document.getElementById(
              "prev"
            )! as HTMLButtonElement;
            if (
              this.currentPageValue === this.view.getLastPageNumber().toString()
            ) {
              nextEl.disabled = true;
              e.target.style.cursor = "not-allowed";
            } else {
              nextEl.disabled = false;
            }
            if (this.currentPageValue === "1") {
              prevEl.disabled = true;
              e.target.style.cursor = 'not-allowed';
            } else {
              prevEl.disabled = false;
            }
          } else {
            btn.style.backgroundColor = "inherit";
          }
        }
      });
      this.fetchApiResponse(Number(e.target.value));
    }
  }
  handleNextClicked(e: Event) {
    if (e.target instanceof HTMLButtonElement) {
      const lastPage = this.view.getLastPageNumber();
      if (this.currentPageValue === lastPage.toString()) {
        e.target.disabled = true;
        e.target.style.cursor = "not-allowed";
      } else {
        e.target.disabled = false;
        const prevEl = document.getElementById("prev")! as HTMLButtonElement;
        prevEl.disabled = false;
        this.currentPageValue = (Number(this.currentPageValue) + 1).toString();
        const el = document.getElementById(`btn-${this.currentPageValue}`)!;
        $(el).css("background-color", "#e9ecef");
        this.fetchApiResponse(Number(this.currentPageValue));
      }
    }
  }
  handlePrevClicked(e: Event) {
    if (e.target instanceof HTMLButtonElement) {
      if (this.currentPageValue === "1") {
        e.target.disabled = true;
        e.target.style.cursor = "not-allowed";
      } else {
        e.target.disabled = false;
        const nextEl = document.getElementById("next")! as HTMLButtonElement;
        nextEl.disabled = false;
        this.currentPageValue = (Number(this.currentPageValue) - 1).toString();
        const el = document.getElementById(`btn-${this.currentPageValue}`)!;
        $(el).css("background-color", "#e9ecef");
        this.fetchApiResponse(Number(this.currentPageValue));
      }
    }
  }
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
  async addPagination() {
    await this.apiService.getLimitAndTotalPRoducts();
    this.currentPageValue = this.view.addPageButtons(
      this.apiService.total,
      this.apiService.limit
    );
  }
}
