import React from 'react';
import useAttachPropertyRecommendation from './hooks/useAttachPropertyRecommendation';
import Modal from 'lib/src/components/modal/Modal';
import Form from 'lib/src/components/form/Form';
import { PropertyRating } from 'src/types/shared/PropertyRating';
import Select from 'lib/src/components/form/Select';

interface Props {
    rating: PropertyRating;
}

const PropertyAttachRecommendationModal: React.FC<Props> = ({ rating }) => {
    const {
        handleSubmit,
        closeModal,
        isPosting,
        error,
        improvementTypeOptions,
        formState,
        handleChange,
    } = useAttachPropertyRecommendation(rating);

    return (
        <Modal title="Attach Recommendation" size="small">
            <Form isPosting={isPosting} onSubmit={handleSubmit} onCancel={closeModal} error={error}>
                <Select
                    label="Improvement type"
                    required
                    name="improvementTypeID"
                    options={improvementTypeOptions}
                    onChange={handleChange}
                    value={formState.improvementTypeID}
                />
            </Form>
        </Modal>
    );
};

export default PropertyAttachRecommendationModal;
