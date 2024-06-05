import './index.css';

interface LoadingCardProps{
    width: string | number;
    height: string | number;
    borderRadius: string;
}

const LoadingCard:React.FC<LoadingCardProps> = ({width,height,borderRadius}) => {
    return(
        <div style={{width:width,height:height,borderRadius:borderRadius}} className="loading-card">

    </div>
    );
}

export default LoadingCard;