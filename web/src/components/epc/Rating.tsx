import { EPCRatings } from 'src/types/shared/Properties';

const Rating = ({ text, rating }: IProps) => {
    return (
        <div className={`line ${rating?.toLowerCase()}`}>
            <div className={`flex-row align-center ${text ? 'justify-between' : ''}`}>
                {text && <p>{text}</p>}
                <p className="text">{rating}</p>
            </div>
        </div>
    );
};

interface IProps {
    rating: EPCRatings;
    text: 'Potential' | 'Current';
}
export default Rating;
