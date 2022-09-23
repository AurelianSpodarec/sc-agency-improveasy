import Property from './Property';
import useFetchProperty from './hooks/useFetchProperty';
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
    const { property, isFetching, fetchError } = useFetchProperty();

    return (
        <>
            <DataCheck dataExists={!!property} isFetching={isFetching} error={fetchError}>
                <Property property={property} />
            </DataCheck>
        </>
    );
};

export default PropertyContainer;
