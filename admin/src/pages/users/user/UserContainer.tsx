import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchSingleUser } from '@actions/users/fetchSingleUser';
import { getUser } from '@selectors/users';

import UpdateUserPasswordModal from './UpdateUserPasswordModal';
import DeleteUserModal from './DeleteUserModal';
import UpdateUserModal from './UpdateUserModal';

import { RootState } from '@reducers/index';
import User from './User';

const UserContainer: React.FC = () => {
    const { id, action } = useParams<ParamTypes>();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSingleUser(+id));
    }, [id, dispatch]);

    // const error = useSelector(getUsersError);
    const user = useSelector((state: RootState) => getUser(state, +id));

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
