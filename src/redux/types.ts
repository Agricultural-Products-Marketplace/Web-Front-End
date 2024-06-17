//types.ts
import { ADD_TO_CART, ADD_TO_WISHLIST, REMOVE_FROM_CART, REMOVE_FROM_WISHLIST } from "./actions/ActionTypes";
import { UserData } from "./actions/loginAction";
import { User } from "../model/user";
import { ProductModel } from "../model/product";
import { CartModel } from "../model/cart";


export interface cartState {
    cart: CartModel[];
}

export interface UserState{
    user: UserData[];
}

export interface AppState {
    cart: cartState;
}

export interface AddToCartAction {
    type: typeof ADD_TO_CART;
    payload: CartModel;
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
        last_login:Date;
        is_agent:boolean;
        is_customer:boolean;
        is_farmer:boolean;
        is_staff:boolean;
        date_joined: Date;
        username: string;
        email:string;
        first_name:string;
        last_name:string;
        phone:string;
    };
    address: []|null;
}

export interface UserLoginData{
    
}

export interface WishlistData{
    id:number;
    date:Date;
    user: User;
    product:ProductModel;
    access:any;
}

export type cartAction = AddToCartAction | RemoveFromCartAction; // Update this line

export interface AddToWishlistAction {
    type: typeof ADD_TO_WISHLIST;
    payload: ProductModel;
}

export interface RemoveFromWishlistAction {
    type: typeof REMOVE_FROM_WISHLIST;
    payload: number;
}


export type wishlistAction = AddToWishlistAction | RemoveFromWishlistAction;
