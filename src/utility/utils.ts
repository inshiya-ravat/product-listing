export function createCustomLabel(
  productInfo: string | number,
  strToBeAppended: string
) {
  return productInfo + strToBeAppended;
}
export function getProductRating(rating: number) {
  return ((rating / 5) * 100).toString();
}
export function $(element:HTMLElement){   
  return {
      element: element,
      css: function (property:string, value:string){
          element.style.setProperty(property,value)
          return this
      }
  }
}