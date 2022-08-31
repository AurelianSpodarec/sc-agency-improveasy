import useAdminUsersFetch from './hooks/useAdminUsersFetch';
import { useSelector } from 'react-redux';

import AdminUsersTable from './AdminUsersTable';
import CreateAdminUserModal from './CreateAdminUserModal';
import Title from 'lib/src/components/typography/Title';
import CreateHeader from '@components/layout/createHeader/CreateHeader';
import LinkButton from 'lib/src/components/button/LinkButton';
import {
    getAdminUsers,
    //  getAdminUsersError,
    getAdminUsersIsFetching,
} from '@selectors/adminUsers';

const AdminUsers: React.FC<AdminUsersProps> = ({ showCreateModal = false }) => {
    useAdminUsersFetch();
    const adminUsers = useSelector(getAdminUsers);
    const isFetching = useSelector(getAdminUsersIsFetching);
    // const error = useSelector(getAdminUsersError);

    return (
        <>
            <CreateHeader>
                <Title>Admins</Title>
                <LinkButton source="positive" icon="plus" href="/admin-users/create">
                    Create
                </LinkButton>
            </CreateHeader>

            <AdminUsersTable adminUsers={adminUsers} isFetching={isFetching} />
            {showCreateModal && <CreateAdminUserModal />}
        </>
    );
};

interface AdminUsersProps {
    showCreateModal?: boolean;
}

export default AdminUsers;
