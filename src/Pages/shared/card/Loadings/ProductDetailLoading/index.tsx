import LoadingCard from '../loadingCard';
import './index.css';

function ProductDetailLoading() {
    return(
        <div className="detail-loading">
            <LoadingCard width={'50vw'} height={'2vw'} borderRadius='5px'/>
            <div className="detail-loading-main">
                <div className="detail-loading-main-left">
                    <LoadingCard width={'10vw'} height={'10vw'} borderRadius='5px'/>
                    <LoadingCard width={'10vw'} height={'10vw'} borderRadius='5px'/>
                    <LoadingCard width={'10vw'} height={'10vw'} borderRadius='5px'/>
                </div>
                <LoadingCard width={'45vw'} height={'35vw'} borderRadius='10px'/>
                <div className="detail-loading-main-right">
                    <LoadingCard height={'2vw'} width={'20vw'} borderRadius='5px'/>
                    <LoadingCard width={'25vw'} height={'0.2vw'} borderRadius='0px'/>
                    <div className="detail-loading-main-right-icons">
                    <LoadingCard height={'30px'} width={'30px'} borderRadius='100px'/>
                    <LoadingCard height={'30px'} width={'30px'} borderRadius='100px'/>
                    <LoadingCard height={'30px'} width={'30px'} borderRadius='100px'/>
                    </div>
                    <LoadingCard height={'15vw'} width={'25vw'} borderRadius='5px'/>
                    <div className="detail-loading-main-right-icons">
                    <LoadingCard height={'40px'} width={'85px'} borderRadius='5px'/>
                    <LoadingCard height={'40px'} width={'200px'} borderRadius='5px'/>
                    <LoadingCard height={'40px'} width={'85px'} borderRadius='5px'/>
                    </div>
                    <LoadingCard width={'25vw'} height={'0.2vw'} borderRadius='0px'/>
                    <div className="detail-loading-main-right-icons">
                    <LoadingCard height={'60px'} width={'80px'} borderRadius='5px'/>
                    <LoadingCard height={'60px'} width={'300px'} borderRadius='5px'/>
                    </div>
                    <div className="detail-loading-main-right-icons">
                    <LoadingCard height={'60px'} width={'80px'} borderRadius='5px'/>
                    <LoadingCard height={'60px'} width={'300px'} borderRadius='5px'/>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default ProductDetailLoading;