import { connect, ConnectedProps, ConnectProps } from "react-redux";
import { hideMessageBox, showMessageBox } from "../../../../redux/actions/showpopAction";
import { RootState } from "../../../../redux/reducers/rootReducer";

const mapStateToProps = (state:RootState) =>({
    show:state.showpopup
});

const mapDispatchToProps= {
    showMessageBox,
    hideMessageBox,
};

const connector = connect(mapStateToProps,mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function AgriPopUp({show,showMessageBox,hideMessageBox}:PropsFromRedux){
    return(
        <div>
            {show && (
                <div>this is the message
                     <button onClick={hideMessageBox}>close</button>
                </div>
               
            )}
        </div>
    )
}

export default connector(AgriPopUp);