import { Reducer } from "redux";
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "../actions/ActionTypes";
import { LoginAction, UserData } from '../actions/loginAction';

export interface LoginState{
    isLoading:boolean;
    isAuthenticated:boolean;
    user: UserData | null;
    error: string | null;
}

const persistedState = localStorage.getItem('LoginState');
const initialState: LoginState = persistedState
    ? JSON.parse(persistedState)
    : {
        isLoading: false,
        isAuthenticated: false,
        user: null,
        error: null,
    };

const loginReducer: Reducer<LoginState, LoginAction> = (state = initialState, action) => {
    switch(action.type){
        case LOGIN_REQUEST:
            return {
                ...state,
                isLoading:true,
                error:null,
            };
        case LOGIN_SUCCESS:
            const newState = {
                ...state,
                isLoading:false,
                isAuthenticated:true,
                user:action.payload,
                error:null,
            };
            localStorage.setItem('LoginState', JSON.stringify(newState))
            return newState;
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoading:false,
                isAuthenticated:false,
                user:null,
                error:action.payload,
            };
        case LOGOUT:
            localStorage.removeItem('LoginState');
            localStorage.removeItem('UserData');
            localStorage.removeItem('UserCartData');
            localStorage.removeItem('WishlistData');
            return {
                ...state,
                isAuthenticated: false,
                user: null,
            };
        default:
            return state;
    }
};

export default loginReducer;
