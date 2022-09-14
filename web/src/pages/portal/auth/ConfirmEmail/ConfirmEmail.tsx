import Form from 'lib/src/components/form/Form';

import useConfirmEmail from './hooks/useConfirmEmail';

import { AuthCard, AuthHeader, AuthSection } from '../_components';

const ConfirmEmail: React.FC = () => {
    const { isPosting, error } = useConfirmEmail();

    return (
        <AuthCard>
            <AuthHeader title="Confirm Email" />
            <AuthSection>
                <Form onSubmit={() => {}} isPosting={isPosting} error={error} omitButtons>
                    {isPosting && <i className="fal fa-spinner fa-spin"></i>}
                </Form>
            </AuthSection>
        </AuthCard>
    );
};

export default ConfirmEmail;
