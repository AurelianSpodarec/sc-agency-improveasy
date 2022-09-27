import ActionButton from '../button/ActionButton';
import ButtonRow from '../button/ButtonRow';
import Description from '../typography/Description';
import Modal from './Modal';

const ErrorModal: React.FC<ErrorModalProps> = ({
    closeModal,
    title = 'Error',
    description = 'There was an error processing your request',
    buttonText = 'Close',
    buttonClassName,
}) => {
    return (
        <Modal title={title} size="small">
            <Description>{description}</Description>

            <ButtonRow>
                <ActionButton onClick={closeModal} className={buttonClassName}>
                    {buttonText}
                </ActionButton>
            </ButtonRow>
        </Modal>
    );
};
interface ErrorModalProps {
    closeModal: () => void;
    title?: string;
    description?: string;
    buttonClassName?: string;
    buttonText?: string;
}

export default ErrorModal;
