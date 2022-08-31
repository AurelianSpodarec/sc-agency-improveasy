import Form from '../form/Form';
import Description from '../typography/Description';
import Modal from './Modal';

const ConfirmModal: React.FC<ConfirmModalProps> = ({
    closeModal,
    handleSubmit,
    error,
    isPosting,
    title = 'Confirm',
    description = 'Are you sure?',
}) => {
    return (
        <Modal title={title} size="small">
            <Description>{description}</Description>
            <Form onSubmit={handleSubmit} onCancel={closeModal} isPosting={isPosting} />
        </Modal>
    );
};
interface ConfirmModalProps {
    closeModal: () => void;
    handleSubmit: () => void;
    error?: string | null;
    isPosting?: boolean;
    title?: string;
    description?: string;
}

export default ConfirmModal;
