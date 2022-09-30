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
import { useEffect, useMemo, useState } from 'react';
import { checkIfObjDiff } from '../../../utils/generic';

const usePropertyAccessDetailsForm = (property: IProperty) => {
    const dispatch = useDispatch();
    const accountDetails = useSelector(selectAccountDetails);

    const initialForm: IUpdatePropertyAccessDetailsForm = useMemo(
        () => ({
            firstName: property.accessDetails.firstName,
            lastName: property.accessDetails.lastName,
            email: property.accessDetails.email,
            phone: property.accessDetails.phone,
            useAccountDetailsForAccess: false,
            preferredContactTime: property.accessDetails.preferredContactTime,
        }),
        [property],
    );

    const [form, _handleChange, resetData] = useForm(initialForm);

    const [hasFormChanged, setHasFormChanged] = useState(false);

    useEffect(() => {
        if (checkIfObjDiff(form, initialForm)) {
            setHasFormChanged(true);
        } else {
            setHasFormChanged(false);
        }
    }, [form, initialForm]);

    const isPosting = useSelector(selectPropertiesIsPostingAccessDetails);
    const postSuccess = useSelector(selectPropertyAccessDetailsPostSuccess);
    const error = useSelector(selectPropertiesError);

    const handleSelectAccountDetails = () => {
        if (form.useAccountDetailsForAccess) {
            resetData({
                firstName: null,
                lastName: null,
                email: null,
                phone: null,
                preferredContactTime: null,
                useAccountDetailsForAccess: false,
            });
        } else {
            resetData({
                firstName: accountDetails?.firstName || null,
                lastName: accountDetails?.lastName || null,
                email: accountDetails?.email || null,
                phone: accountDetails?.phone || null,
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
        hasFormChanged,
    };
};

export default usePropertyAccessDetailsForm;
