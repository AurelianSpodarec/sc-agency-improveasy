import { useState } from 'react';

export default function useForm<TForm>(initialData: TForm): UseForm<TForm> {
    const [formData, setFormData] = useState<TForm>(initialData);

    function handleChange<T>(name: keyof TForm, value: T) {
        setFormData((prev: TForm) => ({ ...prev, [name]: value }));
    }

    function resetData(data: TForm) {
        setFormData(data);
    }

    return [formData, handleChange, resetData];
}

type UseForm<TForm> = [
    formData: TForm,
    handleChange: <T>(name: keyof TForm, value: T) => void,
    resetData: (data: TForm) => void,
];
