import React from 'react';
import useAttachPropertyRecommendation from './hooks/useAttachPropertyRecommendation';
import Modal from 'lib/src/components/modal/Modal';
import Form from 'lib/src/components/form/Form';
import { PropertyRating } from 'src/types/shared/PropertyRating';
import Select from 'lib/src/components/form/Select';
import TextInput from 'lib/src/components/form/TextInput';
import ActionButton from 'lib/src/components/button/ActionButton';

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
        isSubmitDisabled,
        showFreeInput,
        setShowFreeInput,
    } = useAttachPropertyRecommendation(rating);

    return (
        <Modal title="Attach Recommendation" size="small" showOverflow>
            <Form
                isPosting={isPosting}
                onSubmit={handleSubmit}
                onCancel={closeModal}
                error={error}
                submitDisabled={isSubmitDisabled}
            >
                <ActionButton onClick={() => setShowFreeInput(!showFreeInput)}>
                    {showFreeInput
                        ? 'Show existing improvement types'
                        : 'Create new improvement type'}
                </ActionButton>
                <br />
                <br />
                {!showFreeInput ? (
                    <Select
                        label="Improvement type"
                        name="improvementTypeID"
                        options={improvementTypeOptions}
                        onChange={handleChange}
                        value={formState.improvementTypeID}
                    />
                ) : (
                    <TextInput
                        label="Create new improvement type"
                        name="improvementType"
                        onChange={handleChange}
                        value={formState.improvementType}
                    />
                )}
            </Form>
        </Modal>
    );
};

export default PropertyAttachRecommendationModal;
