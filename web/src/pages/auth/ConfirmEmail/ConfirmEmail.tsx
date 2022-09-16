import Form from 'lib/src/components/form/Form';

import useConfirmEmail from './hooks/useConfirmEmail';

import { AuthCard, AuthHeader, AuthSection } from '../_components';

const ConfirmEmail: React.FC = () => {
    const { isPosting, error } = useConfirmEmail();

    return (
        <AuthCard>
            <AuthHeader title="Confirm Email" />
            Welcome to Improveasy!
            <AuthSection>
                <Form onSubmit={() => {}} isPosting={isPosting} error={error} omitButtons>
                    {isPosting && <i className="fal fa-spinner fa-spin"></i>}
                </Form>
                <div>
                    We created an account for you. Please confirm your e-mail addrss and use our
                    service to the maximum
                </div>
            </AuthSection>
        </AuthCard>
    );
};

export default ConfirmEmail;
