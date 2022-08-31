import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { useAppSelector } from '../../../redux/store';

import { fetchSingleAdminUser } from '@actions/adminUsers/fetchSingleAdminUser';
import {
    getAdminUser,
    // getAdminUsersError
} from '@selectors/adminUsers';

import AdminUser from './AdminUser';

import UpdateAdminPasswordModal from './UpdateAdminPasswordModal';
import DeleteAdminModal from './DeleteAdminModal';
import UpdateAdminModal from './UpdateAdminModal';

const AdminUserContainer: React.FC = () => {
    const dispatch = useDispatch();
    const { id, action } = useParams<{ id: string; action?: string }>();

    useEffect(() => {
        dispatch(fetchSingleAdminUser(+id));
    }, [id, dispatch]);

    // const error = useSelector(getAdminUsersError);
    const user = useAppSelector(state => getAdminUser(state, parseInt(id)));

    return (
        <>
            <AdminUser user={user} />
            {action === 'delete' && <DeleteAdminModal user={user} />}
            {!!user && action === 'edit-password' && <UpdateAdminPasswordModal user={user} />}
            {!!user && action === 'edit' && <UpdateAdminModal user={user} />}
        </>
    );
};

export default AdminUserContainer;
