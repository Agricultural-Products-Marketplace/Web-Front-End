import { ProductModel } from "./product";
import { User } from "./user";

export interface ReviewModel {
    id:      number;
    product: ProductModel;
    profile: Profile;
    review:  string;
    replay:  null;
    rating:  string;
    user:    User;
}


export interface Profile {
    image:      string;
    first_name: Date;
    last_name:  Date;
    user:       User;
}