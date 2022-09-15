import useForm from 'lib/src/hooks/useForm';

import { useHistory } from 'react-router-dom';
import { useCallback } from 'react';

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

    const [formState, handleChange] = useForm<ICreatePropertyForm>(initialForm);

    const closeModal = useCallback(() => {
        history.push('/portal/properties');
    }, [history]);

    return { formState, handleChange, closeModal };
};

interface ICreatePropertyForm {
    addressLine1: string;
    addressLine2: string;
    city: string;
    postcode: string;
    bypassEPC: boolean;
    useAccountDetailsForAccess: boolean;
    accessDetails: {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
    };
}

export default useCreateProperty;
