export interface IProduct {
  id: number;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
  reviews?: number;
}
