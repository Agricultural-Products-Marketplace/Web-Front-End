// reducers/userReducer.ts

import { Reducer } from 'react';
import { FETCH_USER_PROFILE_FAILURE, FETCH_USER_PROFILE_REQUEST, FETCH_USER_PROFILE_SUCCESS, ProfileActionTypes } from '../actions/userActions';
import { UserProfile } from '../types';

interface ProfileState{
    profile:UserProfile | null;
    loading:boolean;
    error:string|null;
}

const initialState:ProfileState={
    profile:null,
    loading: false,
    error:null
};

const userReducer = (state = initialState,action:ProfileActionTypes):ProfileState =>{
    switch(action.type){
        case FETCH_USER_PROFILE_REQUEST:
            return{
                ...state,
                loading:true,
                error:null,
            };
        case FETCH_USER_PROFILE_SUCCESS:
            return{
                ...state,
                loading:false,
                profile:action.payload,
            };
        case FETCH_USER_PROFILE_FAILURE:
            return{
                ...state,
                loading:false,
                error:action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;