import useForm from 'lib/src/hooks/useForm';

import { useHistory } from 'react-router-dom';
import { useCallback } from 'react';
import { IAccessDetails } from '../../../../types/shared/Properties';

const initialForm: ICreatePropertyForm = {
    addressLine1: '',
    addressLine2: '',
    city: '',
    postcode: '',
    bypassEPC: false,
    useAccountDetailsForAccess: false,
    accessDetails: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
    },
};

const useCreateProperty = () => {
    const history = useHistory();

    const [formState, _handleChange] = useForm<ICreatePropertyForm>(initialForm);

    const closeModal = useCallback(() => {
        history.push('/portal/properties');
    }, [history]);

    const handleChange = (name: keyof ICreatePropertyForm, value: string | number | boolean) => {
        if (name.includes('accessDetails')) {
            const accessDetailsName = name.split('.')[1];

            _handleChange('accessDetails', {
                ...formState.accessDetails,
                [accessDetailsName]: value,
            });
        } else {
            _handleChange(name, value);
        }
    };

    console.log(formState);

    return { formState, handleChange, closeModal };
};

interface ICreatePropertyForm {
    addressLine1: string;
    addressLine2: string;
    city: string;
    postcode: string;
    bypassEPC: boolean;
    useAccountDetailsForAccess: boolean;
    accessDetails: IAccessDetails;
}

export default useCreateProperty;
