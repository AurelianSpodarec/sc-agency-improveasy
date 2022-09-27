import Property from './Property';
import useFetchPropertyDetails from './hooks/useFetchPropertyDetails';
import DataCheck from '@components/common/DataCheck';
import PropertyAccessDetails from './PropertyAccessDetails';
import PropertyEditAddressModal from './PropertyEditAddressModal';
import PropertyEditAccessDetailsModel from './PropertyEditAccessDetailsModel';
import PropertyRating from './PropertyRating';
import PropertyEditRatingModal from './PropertyEditRatingModal';
import PropertyRecommendations from './PropertyRecommendations';
import PropertyDeleteRecommendationModal from './PropertyDeleteRecommendationModal';

interface Props {
    showEditAddressModal?: boolean;
    showEditAccessDetailsModal?: boolean;
    showEditRatingModal?: boolean;
    showDeleteRecommendationModal?: boolean;
}

const PropertyContainer: React.FC<Props> = ({
    showEditAddressModal = false,
    showEditAccessDetailsModal = false,
    showEditRatingModal = false,
    showDeleteRecommendationModal = false,
}) => {
    const { property, user, isFetching, fetchError, propertyRating } = useFetchPropertyDetails();

    return (
        <>
            <DataCheck dataExists={!!(property && user)} isFetching={isFetching} error={fetchError}>
                <Property property={property} user={user} />
                <PropertyAccessDetails property={property} />
                <PropertyRating property={property} />
            </DataCheck>
            <PropertyRecommendations />
            {!!property && showEditAddressModal && <PropertyEditAddressModal property={property} />}
            {!!property && !!user && showEditAccessDetailsModal && (
                <PropertyEditAccessDetailsModel property={property} user={user} />
            )}
            {!!propertyRating && showEditRatingModal && (
                <PropertyEditRatingModal propertyRating={propertyRating} />
            )}
            {showDeleteRecommendationModal && <PropertyDeleteRecommendationModal />}
        </>
    );
};

export default PropertyContainer;
