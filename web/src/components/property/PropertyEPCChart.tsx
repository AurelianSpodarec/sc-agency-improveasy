import EPCRatingWrapper from '@components/epc/EPCRatingWrapper';
import Rating from '@components/epc/Rating';
import { RootState } from '@reducers/index';
import { selectPropertyEPCRating } from '@selectors/propertyInformation';
import { useSelector } from 'react-redux';

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

const PropertyEPCChart = ({ propertyID }: IProps) => {
    const propertyRatings = useSelector((state: RootState) =>
        selectPropertyEPCRating(state, propertyID),
    );

    if (!propertyRatings) return null;

    return (
        <div className="flex-5 epc-graph">
            <p className="font-semibold">
                An Energy Performance Certificate shows how energy efficient your property is. Your
                property will be given an energy efficiency rating between A and G with A being the
                most energy efficient with the lowest energy bills and G being the least energy
                efficient with the highest energy bills. The average EPC rating for a home in the UK
                is D.
            </p>
            <br />
            <div className="flex-row">
                <div className="flex-column flex-8">
                    <p className="font-semibold" style={{ marginBottom: 5 }}>
                        Very energy efficient - low running costs
                    </p>
                    <EPCRatingWrapper>
                        {ratings.map(({ text, rating }, i) => (
                            <Rating key={i} text={`(${text})`} rating={rating} />
                        ))}
                    </EPCRatingWrapper>
                    <p className="font-semibold" style={{ marginTop: 5 }}>
                        Not energy efficient - higher running costs
                    </p>
                </div>
                <div className="flex-3 flex-column rating-wrapper">
                    <div className="flex-row epc-table-head">
                        <div className="flex-6">
                            <p className="font-semibold">Current</p>
                        </div>
                        <div className="flex-6">
                            <p className="font-semibold">Potential</p>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between">
                        <div className="epc-table-column flex-column align-center flex-6">
                            <div
                                className={`epc-indicator ${propertyRatings.currentRating.toLowerCase()}`}
                            >
                                <div className="epc-arrow" />
                                <p className="box">{propertyRatings.currentEnergyEfficiency}</p>
                            </div>
                        </div>
                        <div className="epc-table-column flex-column align-center flex-6">
                            <div
                                className={`epc-indicator ${propertyRatings.potentialRating.toLowerCase()}`}
                            >
                                <div className="epc-arrow" />
                                <p className="box">{propertyRatings.potentialEnergyEfficiency}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

interface IProps {
    propertyID: number;
}
export default PropertyEPCChart;
