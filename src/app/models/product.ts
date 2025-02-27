export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    photos: string[];
    rating: number;
    reviews: Review[];
}

export interface Review {
    user: string;
    rating: number;
    comment: string;
}

export interface ProductsResponse {
    products: Product[];
}