export function createCustomLabel(
  productInfo: string | number,
  strToBeAppended: string
) {
  return productInfo + strToBeAppended;
}
export function getProductRating(rating: number) {
  return ((rating / 5) * 100).toString();
}
