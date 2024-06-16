import { ProductModel } from "./product";
import { User } from "./user";

export interface CartModel {
    id?:              number;
    qty?:             number;
    price?:           string;
    sub_total?:       string;
    shipping_amount?: string;
    service_fee?:     string;
    tax_fee?:         string;
    total?:           string;
    country?:         string;
    cart_id?:         string;
    date?:            Date;
    product:         ProductModel;
    user?:            User;
}