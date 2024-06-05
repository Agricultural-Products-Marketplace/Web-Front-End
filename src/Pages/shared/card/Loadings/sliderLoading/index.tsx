import LoadingCard from '../loadingCard';
import './index.css';

function SliderLoading() {
    return(
        <div className="slider-loading">
        <LoadingCard width={'10vw'} height={'1.5vw'} borderRadius='0px'/>
        <LoadingCard width={'15vw'} height={'1.5vw'} borderRadius='0px'/>
        <div className="slider-loading-items">
            <LoadingCard width={'12vw'} height={'13vw'} borderRadius='5px'/>
            <LoadingCard width={'12vw'} height={'13vw'} borderRadius='5px'/>
            <LoadingCard width={'12vw'} height={'13vw'} borderRadius='5px'/>
            <LoadingCard width={'12vw'} height={'13vw'} borderRadius='5px'/>
            <LoadingCard width={'12vw'} height={'13vw'} borderRadius='5px'/>
            <LoadingCard width={'12vw'} height={'13vw'} borderRadius='5px'/>
            <LoadingCard width={'12vw'} height={'13vw'} borderRadius='5px'/>
        </div>
        <div className="slider-loading-button">
            <LoadingCard width={'30vw'} height={'3vw'} borderRadius='5px' />
        </div>

    </div>
    );
}

export default SliderLoading;