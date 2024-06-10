//types.ts

import ProductModel from "../model/product";
import { ADD_TO_CART, REMOVE_FROM_CART } from "./actions/ActionTypes";
import { UserData } from "./actions/loginAction";
import { User } from "../model/user";
import { ProductData } from "../services/product/getProducts";

export interface cartState {
    cart: ProductModel[];
}

export interface UserState{
    user: UserData[];
}

export interface AppState {
    cart: cartState;
}

export interface AddToCartAction {
    type: typeof ADD_TO_CART;
    payload: ProductModel;
}

export interface RemoveFromCartAction {
    type: typeof REMOVE_FROM_CART;
    payload: number;
}

export interface WebInformation{
    id:number;
    social_media:SocialMedia[];
    title:string;
    email:string;
    phone:string;
    description:string;
    active:boolean;
    date:Date;
    main_logo:string;
    icon_logo:string;
    support:number
}

export interface SocialMedia{
    id:number,
    name:string,
    link:string,
    logo:string,
    date:Date,
    website:number
};

export interface UserProfile{
    id:number;
    image:string;
    About:string | null;
    gender: string | null;
    pid: string;
    user : {id:number;
        password:string;
        last_login:Date;
        is_superuser: boolean;
        is_staff : boolean;
        is_active: boolean;
        date_joined: Date;
        username: string;
        email:string;
        first_name:string;
        last_name:string;
        phone:string;
        otp: null;
        groups:any[];
        user_permissions: any[];};
    address: []|null;
}

export interface UserLoginData{
    
}

export interface WishlistData{
    id:number;
    date:Date;
    user: User;
    product:ProductData;
}

export type cartAction = AddToCartAction | RemoveFromCartAction; // Update this line
