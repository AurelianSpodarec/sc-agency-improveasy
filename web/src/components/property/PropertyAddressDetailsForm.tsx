import { useCallback, useState } from 'react';
import usePropertyAddressDetails from './_hooks/usePropertyAddressDetails';

import Form from 'lib/src/components/form/Form';
import TextInput from 'lib/src/components/form/TextInput';

import { PageHeading } from '@components/ui';
import AddressLookup, { IAddress } from '@components/ui/AddressLookup';
import ButtonRow from 'lib/src/components/button/ButtonRow';
import ActionButton from 'lib/src/components/button/ActionButton';

const PropertyAddressDetailsForm = () => {
    const {
        form: { addressLine1, addressLine2, city, postcode },
        handleChange,
    } = usePropertyAddressDetails();

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
        <div className="inset-box-shadow flex-6" style={{ marginRight: 25 }}>
            <div className="flex-row justify-center">
                <PageHeading title="Address Details" size="lg" />
            </div>
            <Form
                onSubmit={function (): void {
                    throw new Error('Function not implemented.');
                }}
                omitButtons
            >
                <AddressLookup
                    setShowAddressFields={setShowAddressFields}
                    onSelect={handleAddressSelect}
                    className="font-sm"
                />
                {showAddressFields && (
                    <>
                        <TextInput
                            name="addressLine1"
                            value={addressLine1}
                            onChange={handleChange}
                            placeholder="Address Line 1"
                            className="winged font-sm"
                            required
                        />
                        <TextInput
                            name="addressLine2"
                            value={addressLine2}
                            onChange={handleChange}
                            placeholder="Address Line 2"
                            className="winged font-sm"
                        />
                        <TextInput
                            name="city"
                            value={city}
                            onChange={handleChange}
                            placeholder="City"
                            className="winged font-sm"
                            required
                        />
                        <TextInput
                            name="postcode"
                            value={postcode}
                            onChange={handleChange}
                            placeholder="Postcode"
                            className="winged font-sm"
                            required
                        />
                    </>
                )}

                <ButtonRow>
                    <ActionButton className="winged" source="positive">
                        Revert
                    </ActionButton>
                    <ActionButton className="winged dark-green" type="submit">
                        Save Changes
                    </ActionButton>
                </ButtonRow>
            </Form>
        </div>
    );
};

export default PropertyAddressDetailsForm;
