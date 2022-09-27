import ActionButton from '../button/ActionButton';
import ButtonRow from '../button/ButtonRow';
import Description from '../typography/Description';
import Modal from './Modal';

const SuccessModal: React.FC<SuccessModalProps> = ({
    closeModal,
    title = 'Success',
    description = 'Your request was successful',
    buttonClassName,
}) => {
    return (
        <Modal title={title} size="small">
            <Description>{description}</Description>

            <ButtonRow>
                <ActionButton onClick={closeModal} className={buttonClassName}>
                    Close Modal
                </ActionButton>
            </ButtonRow>
        </Modal>
    );
};
interface SuccessModalProps {
    closeModal: () => void;
    title?: string;
    description?: string;
    buttonClassName?: string;
}

export default SuccessModal;
