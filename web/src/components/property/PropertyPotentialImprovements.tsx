import { RootState } from '@reducers/index';
import { selectPropertyRatingRecommendations } from '@selectors/propertyInformation';
import { useSelector } from 'react-redux';

const PropertyPotentialImprovements = ({ propertyID }: IProps) => {
    const potentialImprovements = useSelector((state: RootState) =>
        selectPropertyRatingRecommendations(state, propertyID),
    );

    if (!potentialImprovements) {
        return (
            <div>
                <p className="font-semibold">Rating improvements unavailable</p>
            </div>
        );
    }
    return <div>PropertyPotentialImprovements</div>;
};

interface IProps {
    propertyID: number;
}

export default PropertyPotentialImprovements;
