import { SHOW_MESSAGE_BOX,HIDE_MESSAGE_BOX } from "../actions/ActionTypes";
import { showMessageBox,hideMessageBox, ShowpopActionType } from "../actions/showpopAction";
import { RootState } from "./rootReducer";

interface showpopState{
    show : boolean
}

const initialState:showpopState = {
    show:false,
}

const showpopReducer = (state:showpopState = initialState,action:ShowpopActionType):showpopState =>{
    switch(action.type){
        case SHOW_MESSAGE_BOX:
            return{
                ...state,
                show:true,
            };
        case HIDE_MESSAGE_BOX:
            return{
                ...state,
                show:false,
            };
        default:
            return state;
    }
}

export default showpopReducer;