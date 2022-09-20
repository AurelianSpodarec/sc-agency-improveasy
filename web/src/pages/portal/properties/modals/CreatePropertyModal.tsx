import useCreateProperty from '@pages/portal/properties/hooks/useCreateProperty';

import Modal from 'lib/src/components/modal/Modal';
import ModalHeader from '@pages/portal/modals/ModalHeader';

import CreatePropertyForm from './CreatePropertyForm';
import { ModalContent } from '../../../../types/shared/Properties';
import CreatePropertyEPCNotFound from './CreatePropertyEPCNotFound';
import CreatePropertyEPCSuccess from './CreatePropertyEPCSuccess';

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
        lastCreatedProperty,
    } = useCreateProperty();

    return (
        <Modal size="small-medium">
            <ModalHeader text="Create Property" closeModal={closeModal} />
            {modalContent === ModalContent.Form ? (
                <CreatePropertyForm
                    formState={formState}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    isPosting={isPosting}
                    error={error}
                />
            ) : modalContent === ModalContent.EPCFailure ? (
                <CreatePropertyEPCNotFound
                    addressString={`${formState.addressLine1}${
                        !!formState.addressLine2 ? ' ' + formState.addressLine2 : ''
                    }`}
                    setModalContent={setModalContent}
                    closeModal={closeModal}
                    handleContinueAnyway={() => handleSubmit(true)}
                />
            ) : (
                <CreatePropertyEPCSuccess
                    potentialEPC={lastCreatedProperty.potentialEPCRating}
                    currentEPC={lastCreatedProperty.currentEPCRating}
                    closeModal={closeModal}
                />
            )}
        </Modal>
    );
};

export default CreatePropertyModal;
