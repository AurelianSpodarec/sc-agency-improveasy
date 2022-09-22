import Form from 'lib/src/components/form/Form';
import TextInput from 'lib/src/components/form/TextInput';
import Checkbox from 'lib/src/components/form/Checkbox';
import { useCallback, useState } from 'react';

import { ICreatePropertyForm } from 'src/types/shared/Properties';
import AddressLookup, { IAddress } from '@components/ui/AddressLookup';
import { PageHeading } from '@components/ui';

const CreatePropertyForm = ({
    formState: {
        addressLine1,
        addressLine2,
        city,
        postcode,
        bypassEPC,
        useAccountDetailsForAccess,
        accessDetails: { firstName, lastName, email, phone },
    },
    handleChange,
    handleSubmit,
    isPosting,
    error,
}: IProps) => {
    const [showAddressFields, setShowAddressFields] = useState(false);

    const handleAddressSelect = useCallback(
        (address: IAddress) => {
            handleChange('addressLine1', address.addressLine1 || '');
            handleChange('addressLine2', address.addressLine2 || '');
            handleChange('city', address.town || '');
            handleChange('postcode', address.postCode || '');
            setShowAddressFields(true);
        },
        [handleChange],
    );

    return (
        <Form
            onSubmit={handleSubmit}
            buttonAlignment="center"
            submitButtonClassName="winged"
            isPosting={isPosting}
            error={error}
        >
            <AddressLookup
                setShowAddressFields={setShowAddressFields}
                onSelect={handleAddressSelect}
            />
            {showAddressFields && (
                <>
                    <TextInput
                        name="addressLine1"
                        value={addressLine1}
                        onChange={handleChange}
                        placeholder="Address Line 1"
                        className="winged"
                        required
                    />
                    <TextInput
                        name="addressLine2"
                        value={addressLine2}
                        onChange={handleChange}
                        placeholder="Address Line 2"
                        className="winged"
                    />
                    <TextInput
                        name="city"
                        value={city}
                        onChange={handleChange}
                        placeholder="City"
                        className="winged"
                        required
                    />
                    <TextInput
                        name="postcode"
                        value={postcode}
                        onChange={handleChange}
                        placeholder="Postcode"
                        className="winged"
                        required
                    />
                </>
            )}
            <Checkbox
                name="bypassEPC"
                value={bypassEPC}
                onChange={handleChange}
                leftPlaceholder="Bypass EPC"
                className="justify-center"
            />
            <Checkbox
                name="useAccountDetailsForAccess"
                value={useAccountDetailsForAccess}
                onChange={handleChange}
                leftPlaceholder="Use Account Details for Access"
                className="justify-center"
            />
            {!useAccountDetailsForAccess && (
                <>
                    <div className="flex-row">
                        <PageHeading title="Access Details" size="lg" />
                    </div>
                    <TextInput
                        name="accessDetails.firstName"
                        value={firstName}
                        onChange={handleChange}
                        placeholder="First Name"
                        className="winged"
                        required
                    />
                    <TextInput
                        name="accessDetails.lastName"
                        value={lastName}
                        onChange={handleChange}
                        placeholder="Last Name"
                        className="winged"
                        required
                    />
                    <TextInput
                        name="accessDetails.email"
                        value={email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="winged"
                        required
                    />
                    <TextInput
                        name="accessDetails.phone"
                        value={phone}
                        onChange={handleChange}
                        placeholder="Phone"
                        className="winged"
                        required
                    />
                </>
            )}
        </Form>
    );
};

interface IProps {
    formState: ICreatePropertyForm;
    handleChange: (name: keyof ICreatePropertyForm, value: string | number | boolean) => void;
    handleSubmit: () => void;
    isPosting: boolean;
    error: string | null;
}

export default CreatePropertyForm;
