//types.ts

import ProductModel from "../model/product";
import { ADD_TO_CART, REMOVE_FROM_CART } from "./actions/ActionTypes";
import { UserData } from "./actions/loginAction";
import About from '../Pages/about/index';
import { User } from "../model/user";

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

export type cartAction = AddToCartAction | RemoveFromCartAction; // Update this line
