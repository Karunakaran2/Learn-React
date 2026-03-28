interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface CartItem extends Product {
  quantity: number;
}

interface Cart {
  items: CartItem[];
}

interface NavProps {
  setPage: (page: string) => void;
}

export type { Product, CartItem, Cart, NavProps };
