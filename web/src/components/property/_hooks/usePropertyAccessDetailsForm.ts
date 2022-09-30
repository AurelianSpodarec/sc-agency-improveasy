import useForm from 'lib/src/hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';

import {
    selectPropertiesError,
    selectPropertiesIsPostingAccessDetails,
    selectPropertyAccessDetailsPostSuccess,
} from '@selectors/properties';
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
        useAccountDetailsForAccess: false,
        preferredContactTime: property.accessDetails.preferredContactTime,
    };

    const [form, _handleChange, resetData] = useForm(initialForm);

    const isPosting = useSelector(selectPropertiesIsPostingAccessDetails);
    const postSuccess = useSelector(selectPropertyAccessDetailsPostSuccess);
    const error = useSelector(selectPropertiesError);

    const handleSelectAccountDetails = () => {
        if (form.useAccountDetailsForAccess) {
            resetData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                preferredContactTime: null,
                useAccountDetailsForAccess: false,
            });
        } else {
            resetData({
                firstName: accountDetails?.firstName || '',
                lastName: accountDetails?.lastName || '',
                email: accountDetails?.email || '',
                phone: accountDetails?.phone || '',
                preferredContactTime: null,
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
        const { useAccountDetailsForAccess, ...rest } = form;
        dispatch(updatePropertyAccessDetails(property.id, rest));
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
        postSuccess,
    };
};

export default usePropertyAccessDetailsForm;
