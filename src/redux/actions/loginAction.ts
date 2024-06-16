import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../reducers/rootReducer";
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "./ActionTypes";
import { url } from "../../api/apiUrl";
import { fetchUserProfile } from "./userActions";

export interface UserData{
    access:string;
    refresh:string;
}



interface LoginRequestAction extends Action<typeof LOGIN_REQUEST>{}
interface LoginSuccessAction extends Action<typeof LOGIN_SUCCESS>{
    payload : UserData;
}
interface LoginFailureAction extends Action<typeof LOGIN_FAILURE>{
    payload:string;
}
interface LogoutAction extends Action<typeof LOGOUT>{}

export type LoginAction = LoginRequestAction | LoginSuccessAction | LoginFailureAction | LogoutAction; 

export const loginRequest = ():LoginRequestAction =>({
    type: LOGIN_REQUEST
});

export const loginSuccess = (userData : UserData):LoginSuccessAction =>({
    type : LOGIN_SUCCESS,
    payload:userData
});

export const loginFailure = (error:string):LoginFailureAction =>({
    type:LOGIN_FAILURE,
    payload:error
});

export const logout = () => {
    return {
        type: LOGOUT,
    };
}

export const loginUser=(
    Credentials:{email:string; password:string}
):ThunkAction<void, RootState,unknown, LoginAction> => async dispatch =>{
    dispatch(loginRequest());
    try{
        console.log('Trying');
        const response = await fetch(url+'v1/auth/login/',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(Credentials)
        });
        if(!response.ok){
            throw new Error('Incorrect Password or Email');
        }
        const userData:UserData = await response.json();
        console.log(userData);
        dispatch(loginSuccess(userData));
        dispatch(fetchUserProfile(userData.access));
    }
    catch(error:any){
        dispatch(loginFailure(error.message))
    }
}