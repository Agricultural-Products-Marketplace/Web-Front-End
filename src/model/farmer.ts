import { User } from "./user";

export interface Farmer {
    id:          number;
    image:       string;
    name:        string;
    description: string;
    mobile:      string;
    active:      boolean;
    date:        Date;
    slug:        string;
    user:        User;
}