type Review = {
  rating: number;
  comment: string;
  date: Date;
  reviewerName: string;
  reviewerEmail: string;
};
export type ProductDetail = {
  id: number;
  title: string;
  description:string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  tags: [];
  brand: string;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  thumbnail: string;
};
