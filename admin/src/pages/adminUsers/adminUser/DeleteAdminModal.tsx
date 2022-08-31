import ConfirmModal from 'lib/src/components/modal/ConfirmModal';
import { useHistory } from 'react-router-dom';
import { AdminUser } from 'src/types/shared/AdminUser';
import useDeleteAdmin from './hooks/useDeleteAdmin';

const DeleteAdminModal: React.FC<DeleteAdminProps> = ({ user }) => {
    const history = useHistory();
    const { deleteUser, isPosting, error } = useDeleteAdmin(user.id);

    return (
        <ConfirmModal
            title="Delete admin"
            description={`Are you sure you want to delete '${user.firstName} ${user.lastName}'?`}
            closeModal={() => history.replace(`/admin-users/${user.id}`)}
            handleSubmit={deleteUser}
            isPosting={isPosting}
            error={error}
        />
    );
};

interface DeleteAdminProps {
    user: AdminUser;
}

export default DeleteAdminModal;
