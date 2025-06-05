export type ShippingMethod = 'delivery' | 'pickup';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
  color?: string;
}

export interface CheckoutFormData {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  city?: string;
  state?: string;
  zipCode?: string;
  termsAccepted: boolean;
}