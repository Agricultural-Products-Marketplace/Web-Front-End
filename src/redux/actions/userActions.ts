import { Dispatch } from "redux";
import { UserProfile } from '../types';
import { url } from "../../api/apiUrl";
import { FETCH_USER_PROFILE_FAILURE, FETCH_USER_PROFILE_REQUEST, FETCH_USER_PROFILE_SUCCESS, UPDATE_USER_PROFILE_FAILURE, UPDATE_USER_PROFILE_REQUEST, UPDATE_USER_PROFILE_SUCESS } from "./ActionTypes";





interface FetchUserProfileRequestAction{
    type: typeof FETCH_USER_PROFILE_REQUEST;
}

interface FetchUserProfileSuccessAction{
    type: typeof FETCH_USER_PROFILE_SUCCESS;
    payload: UserProfile;
}

interface FetchUserProfileFailureAction{
    type: typeof FETCH_USER_PROFILE_FAILURE;
    payload: string;
}

interface UpdateUserProfileRequestAction{
    type: typeof UPDATE_USER_PROFILE_REQUEST;
}

interface UpdateUserProfileSuccessAction{
    type: typeof UPDATE_USER_PROFILE_SUCESS;
    payload:UserProfile;
}

interface UpdateUserProfileFailureAction{
    type:typeof UPDATE_USER_PROFILE_FAILURE;
    payload:string
}
  


export type ProfileActionTypes = FetchUserProfileRequestAction | FetchUserProfileSuccessAction | FetchUserProfileFailureAction | UpdateUserProfileRequestAction | UpdateUserProfileSuccessAction | UpdateUserProfileFailureAction;

export const fetchUserProfile = (accessToken:string) => async(
    dispatch:Dispatch<ProfileActionTypes>
)=> {
    dispatch({type:FETCH_USER_PROFILE_REQUEST});

    try{
        const response = await fetch(`${url}v1/auth/profile/`,{
            headers:{
                Authorization: `Bearer ${accessToken}`,
            },
        });

        if(!response.ok){
            throw new Error('Failed to fetch user profile');
        }

        const userProfile:UserProfile = await response.json();
        dispatch({
            type:FETCH_USER_PROFILE_SUCCESS,
            payload:userProfile
        });

    }
    catch(error: any){
        dispatch({
            type:FETCH_USER_PROFILE_FAILURE,
            payload:error.message
        })
    }
}


export const UpdateUserProfile = (accessToken:any,updatedFields: { [key: string]: string }) => async(
    dispatch:Dispatch<ProfileActionTypes>
)=> {
    dispatch({type:UPDATE_USER_PROFILE_REQUEST});

    try{
        const response = await fetch(`${url}v1/auth/profile/update/`,{
            headers:{
                Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify(updatedFields),
        });

        if(response.ok){
            localStorage.removeItem("UserData");
            try{
                console.log("this is geeting this data 1");
                console.log("this is geeting this data 2");
                const response = await fetch(`${url}v1/auth/profile/`,{
                    headers:{
                        Authorization: `Bearer ${accessToken}`,
                    },
                });
        
                if(!response.ok){
                    throw new Error('Failed to fetch user profile');
                }
        
                const userProfile:UserProfile = await response.json();
                dispatch({
                    type:FETCH_USER_PROFILE_SUCCESS,
                    payload:userProfile
                });
                localStorage.setItem("UserData",JSON.stringify(userProfile));
        
            }
            catch(error: any){
            dispatch({
                type:FETCH_USER_PROFILE_FAILURE,
                payload:error.message
            });
        }
        
        throw new Error('Failed to fetch user profile');
        
    }

    }
    catch(error: any){
        dispatch({
            type:FETCH_USER_PROFILE_FAILURE,
            payload:error.message
        })
    }
}

