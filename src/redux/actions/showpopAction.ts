import { HIDE_MESSAGE_BOX, SHOW_MESSAGE_BOX } from "./ActionTypes";


interface ShowMessageBoxAction{
    type : typeof SHOW_MESSAGE_BOX;
}

interface HideMessageBoxAction{
    type: typeof HIDE_MESSAGE_BOX;
}

export type ShowpopActionType = ShowMessageBoxAction | HideMessageBoxAction;

export const showMessageBox = ():ShowMessageBoxAction =>({
    type:SHOW_MESSAGE_BOX
});

export const hideMessageBox = ():HideMessageBoxAction => ({
    type:HIDE_MESSAGE_BOX
});