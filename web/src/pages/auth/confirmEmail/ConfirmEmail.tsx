import Title from 'lib/src/components/typography/Title';
import ActionButton from 'lib/src/components/button/ActionButton';
import ButtonRow from 'lib/src/components/button/ButtonRow';
import Form from 'lib/src/components/form/Form';
import FormRow from 'lib/src/components/form/FormRow';
import TextInput from 'lib/src/components/form/TextInput';
import useConfirmEmaiml from './hooks/useConfirmEmail';

const ConfirmEmail: React.FC = () => {
    const { isPosting, handleSubmit, formData, handleChange } = useConfirmEmaiml();

    return (
        <>
            <Title>Confirm Email</Title>

            <Form onSubmit={handleSubmit} isPosting={isPosting} omitButtons>
                <FormRow>
                    <TextInput
                        name="code"
                        type="code"
                        value={formData.code}
                        label="Verification code"
                        onChange={handleChange}
                        required
                    />
                </FormRow>

                <ButtonRow alignment="right">
                    <ActionButton icon="sign-in" isPosting={isPosting}>
                        Submit
                    </ActionButton>
                </ButtonRow>
            </Form>
        </>
    );
};

export default ConfirmEmail;
