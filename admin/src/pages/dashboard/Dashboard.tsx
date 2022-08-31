import Title from 'lib/src/components/typography/Title';
import React, { useCallback, useState } from 'react';
import Form from 'lib/src/components/form/Form';
import FormRow from 'lib/src/components/form/FormRow';
import TextInput from 'lib/src/components/form/TextInput';
import TextArea from 'lib/src/components/form/TextArea';
import Select from 'lib/src/components/form/Select';
import MultiSelect from 'lib/src/components/form/MultiSelect';
import Radio from 'lib/src/components/form/Radio';
import Checkbox from 'lib/src/components/form/Checkbox';
import DatePicker from 'lib/src/components/form/DatePicker';
import useForm from 'lib/src/hooks/useForm';
import ActionButton from 'lib/src/components/button/ActionButton';

const options = [
    { label: 'option 1', value: 1 },
    { label: 'option 2', value: 2 },
    { label: 'option 3', value: 3 },
    { label: 'option 4', value: 4 },
    { label: 'option 5', value: 5 },
];
const Dashboard: React.FC = () => {
    const [testError, setTestError] = useState(false);

    const [{ text, textArea, select, multiSelect, radio, checkbox, date }, handleChange] = useForm({
        text: '',
        textArea: '',
        select: null,
        multiSelect: [],
        radio: null,
        checkbox: false,
        date: null,
    });

    const customvalidateText = useCallback(() => {
        if (!text) return 'Please fill in text.';
    }, [text]);

    if (testError) {
        throw new Error('Test error');
    }

    return (
        <>
            <Title>Welcome to Oak!</Title>
            <Form onSubmit={() => console.log('submit')} onCancel={() => console.log('cancel')}>
                <FormRow>
                    <TextInput
                        label="Text input"
                        name="text"
                        value={text}
                        onChange={handleChange}
                        required
                    />
                    <TextArea
                        label="Text area"
                        name="textArea"
                        value={textArea}
                        onChange={handleChange}
                        required
                        customValidate={customvalidateText}
                    />
                </FormRow>
                <FormRow>
                    <Select
                        label="Select"
                        name="select"
                        value={select}
                        options={options}
                        onChange={handleChange}
                        required
                    />
                    <MultiSelect
                        label="Multi Select"
                        name="multiSelect"
                        value={multiSelect}
                        options={options}
                        onChange={handleChange}
                        required
                    />
                </FormRow>
                <FormRow>
                    <DatePicker
                        label="Date picker"
                        name="date"
                        value={date}
                        onChange={handleChange}
                        required
                    />
                    <Checkbox
                        label="Checkbox"
                        name="checkbox"
                        placeholder="I agree"
                        value={checkbox}
                        onChange={handleChange}
                        required
                    />
                </FormRow>
                <FormRow>
                    <Radio
                        label="Radio"
                        name="radio"
                        value={radio}
                        options={options}
                        onChange={handleChange}
                        required
                        customValidate={customvalidateText}
                    />
                </FormRow>
                <ActionButton source="negative" onClick={() => setTestError(true)}>
                    Explode
                </ActionButton>
            </Form>
        </>
    );
};

export default Dashboard;
