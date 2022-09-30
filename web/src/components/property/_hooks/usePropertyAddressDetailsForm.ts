import useForm from 'lib/src/hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';

import { updatePropertyAddress } from '@actions/properties/updatePropertyAddress';
import { IProperty } from 'src/types/shared/Properties';
import {
    selectPropertiesError,
    selectPropertiesIsPosting,
    selectPropertiesPostSuccess,
} from '@selectors/properties';
import { useState, useEffect, useMemo } from 'react';
import { checkIfObjDiff } from '../../../utils/generic';

const usePropertyAddressDetailsForm = (property: IProperty) => {
    const dispatch = useDispatch();

    const initialForm: IUpdateAddressDetailsProps = useMemo(
        () => ({
            addressLine1: property.addressLine1,
            addressLine2: property.addressLine2,
            city: property.city,
            postcode: property.postcode,
        }),
        [property],
    );

    const [form, handleChange, resetData] = useForm(initialForm);

    const [hasFormChanged, setHasFormChanged] = useState(false);

    useEffect(() => {
        if (checkIfObjDiff(form, initialForm)) {
            setHasFormChanged(true);
        } else {
            setHasFormChanged(false);
        }
    }, [form, initialForm]);

    const isPosting = useSelector(selectPropertiesIsPosting);
    const error = useSelector(selectPropertiesError);
    const postSuccess = useSelector(selectPropertiesPostSuccess);

    const handleSubmit = () => {
        dispatch(updatePropertyAddress(property.id, form));
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
        postSuccess,
        hasFormChanged,
    };
};

interface IUpdateAddressDetailsProps {
    addressLine1: string;
    addressLine2: string;
    city: string;
    postcode: string;
}

export default usePropertyAddressDetailsForm;
