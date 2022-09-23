import Property from './Property';
import useFetchPropertyDetails from './hooks/useFetchPropertyDetails';
import DataCheck from '@components/common/DataCheck';

interface Props {
    showDeleteModal?: boolean;
    showEditModel?: boolean;
    showEditPasswordModal?: boolean;
}

const PropertyContainer: React.FC<Props> = ({
    showDeleteModal = false,
    showEditModel = false,
    showEditPasswordModal = false,
}) => {
    const { property, user, isFetching, fetchError } = useFetchPropertyDetails();

    return (
        <>
            <DataCheck dataExists={!!(property && user)} isFetching={isFetching} error={fetchError}>
                <Property property={property} user={user} />
            </DataCheck>
        </>
    );
};

export default PropertyContainer;
