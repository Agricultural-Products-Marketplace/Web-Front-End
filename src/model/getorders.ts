import { Farmer } from "./farmer";
import { User } from "./user";

export interface GetOrder {
    id:              number;
    sub_total:       string;
    shipping_amount: string;
    service_free:    string;
    tax_fee:         string;
    total:           string;
    payment_status:  string;
    order_status:    string;
    initial_total:   string;
    saved:           string;
    full_name:       string;
    email:           string;
    mobile:          string;
    address:         string;
    city:            string;
    state:           string;
    country:         string;
    oid:             string;
    date:            Date;
    buyer:           User;
    farmer:          Farmer[];
}