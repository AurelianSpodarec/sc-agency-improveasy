import useForm from 'lib/src/hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';

import { selectPropertiesIsPosting, selectPropertiesError } from '@selectors/properties';
import { IProperty, IUpdatePropertyAccessDetailsForm } from 'src/types/shared/Properties';
import { updatePropertyAccessDetails } from '@actions/properties/updatePropertyAccessDetails';

const usePropertyAccessDetailsForm = (property: IProperty) => {
    const dispatch = useDispatch();

    const initialForm: IUpdatePropertyAccessDetailsForm = {
        firstName: property.accessDetails.firstName,
        lastName: property.accessDetails.lastName,
        email: property.accessDetails.email,
        phone: property.accessDetails.phone,
        useAccountDetailsForAccess: property.useAccountDetailsForAccess,
    };

    const [form, handleChange, resetData] = useForm(initialForm);

    const isPosting = useSelector(selectPropertiesIsPosting);
    const error = useSelector(selectPropertiesError);

    const handleSubmit = () => {
        dispatch(updatePropertyAccessDetails(property.id, form));
    };

    const revertChanges = () => {
        resetData(initialForm);
    };

    return { form, handleChange, handleSubmit, isPosting, error, revertChanges };
};

export default usePropertyAccessDetailsForm;
