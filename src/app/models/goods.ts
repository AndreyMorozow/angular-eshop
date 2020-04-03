export interface Goods {
    id: string;
    name: string;
    description: string;
    isAddToCart?: boolean;
    isAddToFavorite?: boolean;
    price: number;
    image: string;
}
