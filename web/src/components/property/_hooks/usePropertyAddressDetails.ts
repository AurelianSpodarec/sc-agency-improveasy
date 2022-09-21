import useForm from 'lib/src/hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';

import { updatePropertyAddress } from '@actions/properties/updatePropertyAddress';
import { IProperty } from 'src/types/shared/Properties';
import { selectPropertiesError, selectPropertiesIsPosting } from '@selectors/properties';

const usePropertyAddressDetails = (property: IProperty) => {
    const dispatch = useDispatch();

    const initialForm: IUpdateAddressDetailsProps = {
        addressLine1: property.addressLine1,
        addressLine2: property.addressLine2,
        city: property.city,
        postcode: property.postcode,
    };

    const [form, handleChange] = useForm(initialForm);

    const isPosting = useSelector(selectPropertiesIsPosting);
    const error = useSelector(selectPropertiesError);

    const handleSubmit = () => {
        dispatch(updatePropertyAddress(property.id, form));
    };

    return { form, handleChange, handleSubmit, isPosting, error };
};

interface IUpdateAddressDetailsProps {
    addressLine1: string;
    addressLine2: string;
    city: string;
    postcode: string;
}

export default usePropertyAddressDetails;
