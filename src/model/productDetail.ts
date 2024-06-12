import { Category } from "../services/category/getCategory";
import { Farmer } from "./farmer";

export interface ProductModelMain{
    product:ProductDetailModel
}

export interface ProductDetailModel {
    id:              number;
    title:           string;
    image:           string;
    description:     string;
    price:           string;
    old_price:       string;
    shipping_amount: string;
    stock_qty:       number;
    in_stock:        boolean;
    status:          string;
    featured:        boolean;
    hot_deal:        boolean;
    special_offer:   boolean;
    views:           number;
    rating:          number;
    pid:             string;
    slug:            string;
    date:            Date;
    category:        Category;
    farmer:          Farmer;
}