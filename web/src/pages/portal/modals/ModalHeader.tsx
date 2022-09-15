const ModalHeader = ({ closeModal, text }: IProps) => {
    return (
        <header className="modal-header flex-row justify-between">
            <h3>{text}</h3>

            <button className="header-button" onClick={closeModal}>
                <i className="fa fa-times" />
            </button>
        </header>
    );
};

interface IProps {
    text: string;
    closeModal: () => void;
}

export default ModalHeader;
