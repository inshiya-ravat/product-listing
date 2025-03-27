type Review = { rating: number };
export interface Product {
  id: number;
  title: string;
  rating: number;
  reviews: Review[];
  stock: number;
  price: number;
  discountPercentage: number;
  thumbnail: string;
}
