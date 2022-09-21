import useForm from 'lib/src/hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';

import { selectPropertiesIsPosting, selectPropertiesError } from '@selectors/properties';
import { IAccessDetails } from 'src/types/shared/Properties';
import { updatePropertyAccessDetails } from '@actions/properties/updatePropertyAccessDetails';

const usePropertyAccessDetailsForm = (id: number, accessDetails: IAccessDetails) => {
    const dispatch = useDispatch();

    const initialForm: IAccessDetails = {
        firstName: accessDetails.firstName,
        lastName: accessDetails.lastName,
        email: accessDetails.email,
        phone: accessDetails.phone,
    };

    const [form, handleChange, resetData] = useForm(initialForm);

    const isPosting = useSelector(selectPropertiesIsPosting);
    const error = useSelector(selectPropertiesError);

    const handleSubmit = () => {
        dispatch(updatePropertyAccessDetails(id, form));
    };

    const revertChanges = () => {
        resetData(initialForm);
    };

    return { form, handleChange, handleSubmit, isPosting, error, revertChanges };
};

export default usePropertyAccessDetailsForm;
