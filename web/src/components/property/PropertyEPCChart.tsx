import EPCRatingWrapper from '@components/epc/EPCRatingWrapper';
import Rating from '@components/epc/Rating';

import { EPCRatings } from 'src/types/shared/Properties';

interface IRatings {
    rating: EPCRatings;
    text?: string;
}

const ratings: IRatings[] = [
    { rating: 'A', text: '92 Plus' },
    { rating: 'B', text: '81-91' },
    { rating: 'C', text: '69-80' },
    { rating: 'D', text: '55-68' },
    { rating: 'E', text: '39-54' },
    { rating: 'F', text: '21-38' },
    { rating: 'G', text: '1-20' },
];

const PropertyEPCChart = () => {
    return (
        <>
            <div className="flex-6 epc-graph">
                <p>Very energy efficient - low running costs</p>
                <EPCRatingWrapper>
                    {ratings.map(({ text, rating }) => (
                        <Rating text={`(${text})`} rating={rating} />
                    ))}
                </EPCRatingWrapper>
                <p>Not energy efficient - higher running costs</p>
            </div>
        </>
    );
};

export default PropertyEPCChart;
