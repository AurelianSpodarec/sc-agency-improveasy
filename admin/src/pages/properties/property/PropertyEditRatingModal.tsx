import Form from 'lib/src/components/form/Form';
import FormRow from 'lib/src/components/form/FormRow';
import TextInput from 'lib/src/components/form/TextInput';
import NumberInput from 'lib/src/components/form/NumberInput';
import DatePicker from 'lib/src/components/form/DatePicker';
import Modal from 'lib/src/components/modal/Modal';
import React from 'react';
import { PropertyRating } from 'src/types/shared/PropertyRating';
import useEditPropertyRating from './hooks/useEditPropertyRating';

interface Props {
    propertyRating?: PropertyRating;
}

const PropertyEditRatingModal: React.FC<Props> = ({ propertyRating }) => {
    const { closeModal, handleSubmit, isPosting, error, formState, handleChange } =
        useEditPropertyRating(propertyRating);

    return (
        <Modal title="Update Rating" size="small">
            <Form onCancel={closeModal} onSubmit={handleSubmit} isPosting={isPosting} error={error}>
                <FormRow>
                    <DatePicker
                        required
                        label="Date Of Inspection"
                        name="dateOfInspection"
                        value={formState.dateOfInspection}
                        onChange={handleChange}
                    />
                </FormRow>
                <FormRow>
                    <DatePicker
                        required
                        label="Valid Until"
                        name="validUntil"
                        value={formState.validUntil}
                        onChange={handleChange}
                    />
                </FormRow>
                <FormRow>
                    <TextInput
                        label="LMK key"
                        name="lmkKey"
                        value={formState.lmkKey}
                        onChange={handleChange}
                    />
                </FormRow>
                <FormRow>
                    <NumberInput
                        required
                        label="Current Energy Efficiency"
                        name="currentEnergyEfficiency"
                        value={formState.currentEnergyEfficiency}
                        onChange={handleChange}
                    />
                </FormRow>
                <FormRow>
                    <NumberInput
                        required
                        label="Potential Energy Efficiency"
                        name="potentialEnergyEfficiency"
                        value={formState.potentialEnergyEfficiency}
                        onChange={handleChange}
                    />
                </FormRow>
                <FormRow>
                    <TextInput
                        required
                        label="Built Form"
                        name="builtForm"
                        value={formState.builtForm}
                        onChange={handleChange}
                    />
                </FormRow>
                <FormRow>
                    <TextInput
                        required
                        label="Construction Age Band"
                        name="constructionAgeBand"
                        value={formState.constructionAgeBand}
                        onChange={handleChange}
                    />
                </FormRow>

                <FormRow>
                    <TextInput
                        required
                        label="Wall Description"
                        name="wallDescription"
                        value={formState.wallDescription}
                        onChange={handleChange}
                    />
                </FormRow>
                <FormRow>
                    <TextInput
                        required
                        label="Floor Description"
                        name="floorDescription"
                        value={formState.floorDescription}
                        onChange={handleChange}
                    />
                </FormRow>
                <FormRow>
                    <TextInput
                        required
                        label="Property Type"
                        name="propertyType"
                        value={formState.propertyType}
                        onChange={handleChange}
                    />
                </FormRow>
            </Form>
        </Modal>
    );
};

export default PropertyEditRatingModal;
