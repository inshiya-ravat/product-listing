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
}
