
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  brand: string;
  description: string;
  rating: number;
  discountPercentage?: number;
  available: boolean;
  slug: string;
  featured?: boolean;
  specifications?: {
    engine?: string;
    power?: string;
    torque?: string;
    topSpeed?: string;
    weight?: string;
    fuelCapacity?: string;
    [key: string]: string | undefined;
  };
}

export type Category = {
  id: number;
  name: string;
  slug: string;
  image: string;
};

export type Brand = {
  id: number;
  name: string;
  slug: string;
  logo: string;
};

export type CartItem = Product & {
  quantity: number;
};
