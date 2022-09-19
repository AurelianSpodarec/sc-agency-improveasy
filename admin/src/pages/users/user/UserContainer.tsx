import UpdateUserPasswordModal from './UpdateUserPasswordModal';
import DeleteUserModal from './DeleteUserModal';
import UpdateUserModal from './UpdateUserModal';

import User from './User';
import useFetchUser from './hooks/useFetchUser';
import DataCheck from '@components/common/DataCheck';
import UserProperties from './UserProperties';

interface Props {
    showDeleteModal?: boolean;
    showEditModel?: boolean;
    showEditPasswordModal?: boolean;
}

const UserContainer: React.FC<Props> = ({
    showDeleteModal = false,
    showEditModel = false,
    showEditPasswordModal = false,
}) => {
    const { user, isFetching, fetchError } = useFetchUser();

    return (
        <>
            <DataCheck dataExists={!!user} isFetching={isFetching} error={fetchError}>
                <User user={user} />
            </DataCheck>
            <UserProperties />
            {!!user && showDeleteModal && <DeleteUserModal user={user} />}
            {!!user && showEditPasswordModal && <UpdateUserPasswordModal user={user} />}
            {!!user && showEditModel && <UpdateUserModal user={user} />}
        </>
    );
};

export default UserContainer;
