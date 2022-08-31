import { useState } from 'react';
import { useSelector } from 'react-redux';

import useUsersFetch from './hooks/useUsersFetch';
import { getUsers, getUsersIsFetching } from '@selectors/users';
import UsersTable from './UsersTable';
import ActionButton from 'lib/src/components/button/ActionButton';
import CreateUserModal from './CreateUserModal';
import CreateHeader from '@components/layout/createHeader/CreateHeader';
import Title from 'lib/src/components/typography/Title';

const Users: React.FC = () => {
    useUsersFetch();
    const users = useSelector(getUsers);
    const isFetching = useSelector(getUsersIsFetching);

    const [showCreateModal, setShowCreateModal] = useState(false);

    return (
        <>
            <CreateHeader>
                <Title>Users</Title>
                <ActionButton
                    source="positive"
                    icon="plus"
                    onClick={() => setShowCreateModal(true)}
                >
                    Create
                </ActionButton>
            </CreateHeader>

            <UsersTable users={users} isFetching={isFetching} />
            {showCreateModal && <CreateUserModal closeModal={() => setShowCreateModal(false)} />}
        </>
    );
};

export default Users;
