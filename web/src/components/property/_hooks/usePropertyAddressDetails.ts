import useForm from 'lib/src/hooks/useForm';

const initialForm: IUpdateAddressDetailsProps = {
    addressLine1: '',
    addressLine2: '',
    city: '',
    postcode: '',
};

const usePropertyAddressDetails = () => {
    const [form, handleChange] = useForm(initialForm);

    return { form, handleChange };
};

interface IUpdateAddressDetailsProps {
    addressLine1: string;
    addressLine2: string;
    city: string;
    postcode: string;
}

export default usePropertyAddressDetails;
