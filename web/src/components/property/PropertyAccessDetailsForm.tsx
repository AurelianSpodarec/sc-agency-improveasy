import usePropertyAccessDetailsForm from './_hooks/usePropertyAccessDetailsForm';

import { PageHeading } from '@components/ui';
import ActionButton from 'lib/src/components/button/ActionButton';
import ButtonRow from 'lib/src/components/button/ButtonRow';
import Form from 'lib/src/components/form/Form';
import TextInput from 'lib/src/components/form/TextInput';

import { IProperty } from 'src/types/shared/Properties';
import Checkbox from 'lib/src/components/form/Checkbox';

const PropertyAccessDetailsForm = ({ property }: IPropertyAccessDetailsProps) => {
    const {
        form: {
            firstName,
            lastName,
            email,
            phone,
            useAccountDetailsForAccess,
            preferredContactTime,
        },
        handleChange,
        handleSubmit,
        isPosting,
        error,
        revertChanges,
        handleSelectAccountDetails,
        postSuccess,
        hasFormChanged,
    } = usePropertyAccessDetailsForm(property);

    return (
        <div className="inset-box-shadow flex-5">
            <div className="flex-row justify-center">
                <PageHeading title="Access Details" size="lg" />
            </div>

            <Form onSubmit={handleSubmit} omitButtons isPosting={isPosting} error={error}>
                <TextInput
                    name="firstName"
                    value={firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="winged font-sm"
                />
                <TextInput
                    name="lastName"
                    value={lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="winged font-sm"
                />
                <TextInput
                    name="email"
                    value={email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="winged font-sm"
                />
                <TextInput
                    name="phone"
                    value={phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    className="winged font-sm"
                />
                <TextInput
                    name="preferredContactTime"
                    value={preferredContactTime || ''}
                    onChange={handleChange}
                    placeholder="Preferred Contact Time"
                    className="winged"
                />
                <Checkbox
                    name="useAccountDetailsForAccess"
                    value={useAccountDetailsForAccess}
                    onChange={handleSelectAccountDetails}
                    leftPlaceholder="Use Account Details for Access"
                    className="justify-center"
                />
                <ButtonRow>
                    <ActionButton
                        className="winged font-sm"
                        source="positive"
                        disabled={isPosting || !hasFormChanged}
                        onClick={revertChanges}
                    >
                        Cancel
                    </ActionButton>
                    <ActionButton
                        className="winged dark-green"
                        type="submit"
                        isPosting={isPosting}
                        success={!hasFormChanged && postSuccess}
                        disabled={!hasFormChanged}
                    >
                        Save Changes
                    </ActionButton>
                </ButtonRow>
            </Form>
        </div>
    );
};

interface IPropertyAccessDetailsProps {
    property: IProperty;
}

export default PropertyAccessDetailsForm;
