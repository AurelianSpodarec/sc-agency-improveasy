import useCreateProperty from '@pages/portal/properties/hooks/useCreateProperty';

import Modal from 'lib/src/components/modal/Modal';
import ModalHeader from '@pages/portal/modals/ModalHeader';

import CreatePropertyForm from './CreatePropertyForm';
import ButtonRow from 'lib/src/components/button/ButtonRow';
import ActionButton from 'lib/src/components/button/ActionButton';

const CreatePropertyModal = () => {
    const {
        formState,
        handleChange,
        closeModal,
        handleSubmit,
        isPosting,
        error,
        modalContent,
        setModalContent,
        handleContinueAnyway,
    } = useCreateProperty();

    return (
        <Modal size="small-medium">
            <ModalHeader text="Create Property" closeModal={closeModal} />
            {modalContent === 1 ? (
                <CreatePropertyForm
                    formState={formState}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    isPosting={isPosting}
                    error={error}
                />
            ) : (
                <section className="flex-column align-center horizontal-padding">
                    <h2 className="heading">
                        Unable to locate EPC for{' '}
                        {`${formState.addressLine1} ${formState.addressLine2}`}
                    </h2>

                    <p className="flex-column align-center text-center semi-bold-content">
                        <br />
                        Unfortunately, we were unable to locate your property’s EPC rating.
                        <br />
                        <br />
                        This may be due to:
                        <p className="list-wrapper">
                            <ol>
                                <li> Incorrect address information</li>
                                <li> An EPC has been done in the last 3 months</li>
                                <li> The property does not have an EPC</li>
                            </ol>
                        </p>
                    </p>

                    <ButtonRow>
                        <ActionButton className="winged" onClick={() => setModalContent(1)}>
                            Edit Address
                        </ActionButton>
                        <ActionButton
                            className="winged"
                            source="secondary"
                            onClick={() => closeModal()}
                        >
                            Cancel
                        </ActionButton>
                        <ActionButton
                            className="winged"
                            source="positive"
                            onClick={handleContinueAnyway}
                        >
                            Continue Anyway
                        </ActionButton>
                    </ButtonRow>
                </section>
            )}
        </Modal>
    );
};

export default CreatePropertyModal;
