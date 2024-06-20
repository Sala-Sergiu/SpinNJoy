export interface Product {
  id: number;
  brand: string;
  model: string;
  type: string;
  color: string;
  price: number;
  weight?: number;
  stock: number;
  imageUrl: string;
  description: string;
}

export interface ProductParams {
  orderBy: string;
  searchTerm?: string;
  types: string[];
  brands: string[];
  pageNumber: number;
  pageSize: number;
}
