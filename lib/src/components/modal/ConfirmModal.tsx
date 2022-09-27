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
    submitButtonClassName = '',
}) => {
    return (
        <Modal title={title} size="small">
            <Description>{description}</Description>
            <Form
                onSubmit={handleSubmit}
                onCancel={closeModal}
                isPosting={isPosting}
                buttonClassName={submitButtonClassName}
            />
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
    submitButtonClassName?: string;
}

export default ConfirmModal;
