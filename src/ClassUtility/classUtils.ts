type Loading = "eager" | "lazy"
export class ClassUtils {
  protected createElement(nameOfElement: keyof HTMLElementTagNameMap) {
    return document.createElement(nameOfElement);
  }

  protected addClassName(element: HTMLElement, elementClass: string) {
    element.className = elementClass;
  }

  protected addHrefAttribute(element: HTMLAnchorElement, hrefPath: string) {
    element.href = hrefPath;
  }

  protected addSrcAttribute(element: HTMLImageElement, src: string) {
    element.src = src;
  }

  protected addTextContent(element: HTMLElement, str: string) {
    element.textContent = str;
  }

  protected addInputElementAttributes(
    element: HTMLInputElement,
    arrAttributes: Array<{ property: string; value: string }>
  ) {
    arrAttributes.forEach((attribute) => {
      const prop = attribute.property;
      element.setAttribute(prop, attribute.value);
    });
  }

  protected addValueAttribute(element: HTMLButtonElement, str: string) {
    element.value = str;
  }

  protected addIdAttribute(element:HTMLElement, str:string){
    element.id = str;
  }

  protected addAriaHidden(element:HTMLElement,str:boolean){
    element.ariaHidden = str.toString();
  }

  protected addAriaLabel(element:HTMLElement,str:string){
    element.ariaLabel = str;
  }

  protected addForAttribute(element:HTMLFormElement,str:string){
    element.for = str;
  }

  protected addAltAttribute(element:HTMLImageElement,str:string){
    element.alt = str;
  }

  protected addLoading(element:HTMLImageElement, str:Loading){
    element.loading = str;
  }

  protected addCursorType(element:HTMLButtonElement,str:string){
    element.style.cursor = str;
  }
}
