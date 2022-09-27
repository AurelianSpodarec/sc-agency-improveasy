import Property from './Property';
import useFetchPropertyDetails from './hooks/useFetchPropertyDetails';
import DataCheck from '@components/common/DataCheck';
import PropertyAccessDetails from './PropertyAccessDetails';
import PropertyEditAddressModal from './PropertyEditAddressModal';
import PropertyEditAccessDetailsModel from './PropertyEditAccessDetailsModel';
import PropertyRating from './PropertyRating';

interface Props {
    showEditAddressModel?: boolean;
    showEditAccessDetailsModel?: boolean;
}

const PropertyContainer: React.FC<Props> = ({
    showEditAddressModel = false,
    showEditAccessDetailsModel = false,
}) => {
    const { property, user, isFetching, fetchError } = useFetchPropertyDetails();

    return (
        <>
            <DataCheck dataExists={!!(property && user)} isFetching={isFetching} error={fetchError}>
                <Property property={property} user={user} />
                <PropertyAccessDetails property={property} />
                <PropertyRating property={property} />
            </DataCheck>

            {!!property && showEditAddressModel && <PropertyEditAddressModal property={property} />}
            {!!property && !!user && showEditAccessDetailsModel && (
                <PropertyEditAccessDetailsModel property={property} user={user} />
            )}
        </>
    );
};

export default PropertyContainer;
