import { Reducer } from 'redux';
import { FETCH_USER_PROFILE_FAILURE, FETCH_USER_PROFILE_REQUEST, FETCH_USER_PROFILE_SUCCESS, ProfileActionTypes } from '../actions/userActions';
import { UserProfile } from '../types';

interface ProfileState {
    profile: UserProfile | null;
    loading: boolean;
    error: string | null;
}

const persistedUserData = localStorage.getItem('UserData');
let initialProfile: UserProfile | null = null;

if (persistedUserData) {
    try {
        initialProfile = JSON.parse(persistedUserData) as UserProfile;
    } catch (e) {
        console.error("Failed to parse user data from localStorage", e);
    }
}

const initialState: ProfileState = {
    profile: initialProfile,
    loading: false,
    error: null,
};

const userReducer: Reducer<ProfileState, ProfileActionTypes> = (state = initialState, action): ProfileState => {
    switch (action.type) {
        case FETCH_USER_PROFILE_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_USER_PROFILE_SUCCESS:
            localStorage.setItem('UserData', JSON.stringify(action.payload));
            return {
                ...state,
                loading: false,
                profile: action.payload,
            };
        case FETCH_USER_PROFILE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;
