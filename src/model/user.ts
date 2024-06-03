export interface User {
    id:               number;
    password:         string;
    last_login:       null;
    is_superuser:     boolean;
    is_staff:         boolean;
    is_active:        boolean;
    date_joined:      Date;
    username:         string;
    email:            string;
    first_name:       string;
    last_name:        string;
    phone:            string;
    otp:              null;
    groups:           any[];
    user_permissions: any[];
}