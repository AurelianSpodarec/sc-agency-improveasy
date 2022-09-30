import { EPCRatings } from 'src/types/shared/Properties';

const Rating = ({ text, rating, className = '' }: IProps) => {
    return (
        <div className={`line ${rating?.toLowerCase()} ${className}`}>
            <div className={`flex-row align-center ${text ? 'justify-between' : ''}`}>
                {text && <p>{text}</p>}
                <p className="text">{rating}</p>
            </div>
        </div>
    );
};

interface IProps {
    rating: EPCRatings;
    text?: string;
    className?: string;
}
export default Rating;
