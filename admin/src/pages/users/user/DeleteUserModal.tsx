import ConfirmModal from 'lib/src/components/modal/ConfirmModal';
import { useHistory } from 'react-router-dom';
import { User } from 'src/types/shared/User';
import useDeleteUser from './hooks/useDeleteUser';

const DeleteUserModal: React.FC<DeleteUserProps> = ({ user }) => {
    const history = useHistory();
    const { handleSubmit, isPosting, error } = useDeleteUser(user.id);

    return (
        <ConfirmModal
            title="Delete admin"
            description={`Are you sure you want to delete '${user.firstName} ${user.lastName}'?`}
            closeModal={() => history.replace(`/users/${user.id}`)}
            handleSubmit={handleSubmit}
            isPosting={isPosting}
            error={error}
        />
    );
};

interface DeleteUserProps {
    user: User;
}
export default DeleteUserModal;
