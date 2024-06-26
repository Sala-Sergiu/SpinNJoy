export interface Basket {
  id: number;
  buyerId: string;
  items: BasketItem[];
  paymentIntentId?: string;
  clientSecret?: string;
}

export interface BasketItem {
  productId: number;
  brand: string;
  model: string;
  type: string;
  color: string;
  price: number;
  weight: number;
  stock: number;
  imageUrl: string;
  quantity: number;
}
