export interface product {
  id: number;
  title: string;
  rating: number;
  reviews: [
    {
      rating: number;
    }
  ];
  stock: number;
  price: number;
  discountPercentage: number;
  thumbnail: string;
}
