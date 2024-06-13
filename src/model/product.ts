import { Category } from "./category";
import { Farmer } from "./farmer";
import { Gallery } from "./gallary";

export interface ProductModel {
    id:              number;
    title:           string;
    description: string;
    image:           string;
    category:        Category;
    price:           string;
    old_price:       string;
    shipping_amount: string;
    stock_qty:       number;
    in_stock:        boolean;
    status:          string;
    featured:        boolean;
    views:           number;
    rating:          number;
    rating_count:    number;
    gallery:         Gallery[];
    farmer:          Farmer;
    pid:             string;
    slug:            string;
    date:            Date;    
}