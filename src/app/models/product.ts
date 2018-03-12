import { Deal } from "./deal";

export class Product {
    id: number;
    name: string;
    price: number;
    image: string;
    deal?: Deal;
}