import Property from './Property';
import useFetchPropertyDetails from './hooks/useFetchPropertyDetails';
import DataCheck from '@components/common/DataCheck';
import PropertyAccessDetails from './PropertyAccessDetails';

interface Props {
    showDeleteModal?: boolean;
    showEditAddressModel?: boolean;
}

const PropertyContainer: React.FC<Props> = ({
    showDeleteModal = false,
    showEditAddressModel = false,
}) => {
    const { property, user, isFetching, fetchError } = useFetchPropertyDetails();

    return (
        <>
            <DataCheck dataExists={!!(property && user)} isFetching={isFetching} error={fetchError}>
                <Property property={property} user={user} />
                <PropertyAccessDetails property={property} user={user} />
            </DataCheck>
        </>
    );
};

export default PropertyContainer;
