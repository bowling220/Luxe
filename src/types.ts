export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'men' | 'women' | 'kids' | 'accessories';
  image: string;
  images: string[];
  sizes: string[];
  colors: string[];
}

export interface CartItem {
  productId: string;
  quantity: number;
  size?: string;
  color?: string;
}

export type CartState = {
  items: CartItem[];
  total: number;
};