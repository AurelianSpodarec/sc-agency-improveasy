import useForm from 'lib/src/hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';

import { selectPropertiesIsPosting, selectPropertiesError } from '@selectors/properties';
import { IProperty, IUpdatePropertyAccessDetailsForm } from 'src/types/shared/Properties';
import { updatePropertyAccessDetails } from '@actions/properties/updatePropertyAccessDetails';
import { selectAccountDetails } from '@selectors/account';

const usePropertyAccessDetailsForm = (property: IProperty) => {
    const dispatch = useDispatch();
    const accountDetails = useSelector(selectAccountDetails);

    const initialForm: IUpdatePropertyAccessDetailsForm = {
        firstName: property.accessDetails.firstName,
        lastName: property.accessDetails.lastName,
        email: property.accessDetails.email,
        phone: property.accessDetails.phone,
        useAccountDetailsForAccess: property.useAccountDetailsForAccess,
    };

    const [form, _handleChange, resetData] = useForm(initialForm);

    const isPosting = useSelector(selectPropertiesIsPosting);
    const error = useSelector(selectPropertiesError);

    const handleSelectAccountDetails = () => {
        if (form.useAccountDetailsForAccess) {
            resetData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                useAccountDetailsForAccess: false,
            });
        } else {
            resetData({
                firstName: accountDetails?.firstName || '',
                lastName: accountDetails?.lastName || '',
                email: accountDetails?.email || '',
                phone: accountDetails?.phone || '',
                useAccountDetailsForAccess: true,
            });
        }
    };

    const handleChange = (
        name: keyof IUpdatePropertyAccessDetailsForm,
        value: string | number | boolean,
    ) => {
        _handleChange('useAccountDetailsForAccess', false);
        _handleChange(name, value);
    };

    const handleSubmit = () => {
        dispatch(updatePropertyAccessDetails(property.id, form));
    };

    const revertChanges = () => {
        resetData(initialForm);
    };

    return {
        form,
        handleChange,
        handleSubmit,
        isPosting,
        error,
        revertChanges,
        handleSelectAccountDetails,
    };
};

export default usePropertyAccessDetailsForm;
