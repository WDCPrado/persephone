export interface Product {
  id: string;
  name: string;
  desc: string;
  price: string;
  quantity: number;
  images: Image[];
}

export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
}

export interface Image {
  id: string;
  productId: string;
  url: string;
  createdAt: string;
  updatedAt: string;
}
