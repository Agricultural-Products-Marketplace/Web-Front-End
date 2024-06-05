import { Dispatch } from "redux";
import { UserProfile } from '../types';
import { url } from "../../api/apiUrl";

export const FETCH_USER_PROFILE_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_PROFILE_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_PROFILE_FAILURE = 'FETCH_USER_FAILURE';



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

export type ProfileActionTypes = FetchUserProfileRequestAction | FetchUserProfileSuccessAction | FetchUserProfileFailureAction;

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
