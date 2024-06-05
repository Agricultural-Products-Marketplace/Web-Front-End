import { Reducer } from "redux";
import { LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAILURE, LOGOUT } from "../actions/ActionTypes";
import { LoginAction, UserData } from '../actions/loginAction';

export interface LoginState{
    isLoading:boolean;
    isAuthenticated:boolean;
    user: UserData | null;
    error: string | null;
}

const initialState:LoginState ={
    isLoading:false,
    isAuthenticated:false,
    user:null,
    error:null,
}

const loginReducer: Reducer<LoginState,LoginAction> = (state = initialState,action) => {
    switch(action.type){
        case LOGIN_REQUEST:
            return{
                ...state,
                isLoading:true,
                error:null,
            };
        case LOGIN_SUCCESS:
            return{
                ...state,
                isLoading:false,
                isAuthenticated:true,
                user:action.payload,
                error:null,
            };
        case LOGIN_FAILURE:
            return{
                ...state,
                isLoading:false,
                isAuthenticated:false,
                user:null,
                error:action.payload
            };
        case LOGOUT:
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