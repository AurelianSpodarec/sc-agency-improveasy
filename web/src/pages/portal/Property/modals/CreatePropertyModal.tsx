import useCreateProperty from '@pages/portal/Property/hooks/useCreateProperty';

import Modal from 'lib/src/components/modal/Modal';
import Form from 'lib/src/components/form/Form';

const CreatePropertyModal = () => {
    const { formState, handleChange, closeModal } = useCreateProperty();

    return (
        <Modal title="Create Property">
            <Form onSubmit={() => console.log('submit')} onCancel={closeModal}></Form>
        </Modal>
    );
};

export default CreatePropertyModal;
