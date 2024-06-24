export interface OrderItem {
  productId: number;
  brand: string;
  pictureUrl: string;
  price: number;
  quantity: number;
}

export interface ShippingAddress {
  fullName: string;
  address1: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

export interface Order {
  id: number;
  buyerId: string;
  shippingAddress: ShippingAddress;
  orderDate: string;
  orderItems: OrderItem[];
  subtotal: number;
  deliveryFee: number;
  orderStatus: string;
  total: number;
}
