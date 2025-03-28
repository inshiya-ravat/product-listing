type Loading = "eager" | "lazy"
export class ClassUtils {
  /**
   * @description creates an html element
   */
  protected createElement(nameOfElement: keyof HTMLElementTagNameMap) {
    return document.createElement(nameOfElement);
  }

  /**
   * @description add classname to the element 
   */
  protected addClassName(element: HTMLElement, elementClass: string) {
    element.className = elementClass;
  }

  /**
   * @description add href path to anchor element
   */
  protected addHrefAttribute(element: HTMLAnchorElement, hrefPath: string) {
    element.href = hrefPath;
  }

  /**
   * @description add src attribute to image element 
   */
  protected addSrcAttribute(element: HTMLImageElement, src: string) {
    element.src = src;
  }

  /**
   * @description add text content to html element 
   */
  protected addTextContent(element: HTMLElement, str: string) {
    element.textContent = str;
  }

  /**
   * @description add multiple attributes to input element
   */
  protected addInputElementAttributes(
    element: HTMLInputElement,
    arrAttributes: Array<{ property: string; value: string }>
  ) {
    arrAttributes.forEach((attribute) => {
      const prop = attribute.property;
      element.setAttribute(prop, attribute.value);
    });
  }

  /**
   * @description add value attribute to button element 
   */
  protected addValueAttribute(element: HTMLButtonElement, str: string) {
    element.value = str;
  }

  /**
   * @description add id to html element 
   */
  protected addIdAttribute(element:HTMLElement, str:string){
    element.id = str;
  }

  /**
   * @description add aria hidden to the element
   */
  protected addAriaHidden(element:HTMLElement,str:boolean){
    element.ariaHidden = str.toString();
  }

  /**
   * @description add aria label for descriptive information to be delivered to screen reader
   */
  protected addAriaLabel(element:HTMLElement,str:string){
    element.ariaLabel = str;
  }

  /**
   * add for attribute to form elements
   */
  protected addForAttribute(element:HTMLFormElement,str:string){
    element.for = str;
  }

  /**
   * add alternative text to image elements 
   */
  protected addAltAttribute(element:HTMLImageElement,str:string){
    element.alt = str;
  }

  /**
   * @description add loading property to image elements 
   */
  protected addLoading(element:HTMLImageElement, str:Loading){
    element.loading = str;
  }

  /**
   * add cursor type to button elements 
   */
  protected addCursorType(element:HTMLButtonElement,str:string){
    element.style.cursor = str;
  }
}
