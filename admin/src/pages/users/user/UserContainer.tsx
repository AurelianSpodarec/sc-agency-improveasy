import { useParams } from 'react-router-dom';

import UpdateUserPasswordModal from './UpdateUserPasswordModal';
import DeleteUserModal from './DeleteUserModal';
import UpdateUserModal from './UpdateUserModal';

import User from './User';
import useFetchUser from './hooks/useFetchUser';

const UserContainer: React.FC = () => {
    const { action } = useParams<ParamTypes>();

    const { user } = useFetchUser();

    return (
        <>
            <User user={user} />
            {action === 'delete' && <DeleteUserModal user={user} />}
            {!!user && action === 'edit-password' && <UpdateUserPasswordModal user={user} />}
            {!!user && action === 'edit' && <UpdateUserModal user={user} />}
        </>
    );
};

interface ParamTypes {
    id: string;
    action: string;
}

export default UserContainer;
