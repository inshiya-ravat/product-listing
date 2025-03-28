/**
 * @description creates a custom label
 */
export function createCustomLabel(
  productInfo: string | number,
  strToBeAppended: string
) {
  return productInfo + strToBeAppended;
}
/**
 * @description calculates rating percentage for a product
 */
export function getProductRating(rating: number) {
  return ((rating / 5) * 100).toString();
}
/**
 * @description utility to add styles to an element 
 */
export function $(element: HTMLElement) {
  return {
    element: element,
    css: function (property: string, value: string) {
      element.style.setProperty(property, value);
      return this;
    },
  };
}
