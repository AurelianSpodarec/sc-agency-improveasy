import Form from 'lib/src/components/form/Form';

import useConfirmEmail from './hooks/useConfirmEmail';

import { AuthCard, AuthHeader, AuthSection } from '../_components';
import ActionButton from 'lib/src/components/button/ActionButton';
import LinkButton from 'lib/src/components/button/LinkButton';

const ConfirmEmail: React.FC = () => {
    const { isPosting, error } = useConfirmEmail();

    return (
        <AuthCard>
            <AuthHeader title="Confirm Email" />
            Welcome to Improveasy!
            <AuthSection>
                <div style={{ marginBottom: '20px' }}>
                    <Form onSubmit={() => {}} isPosting={isPosting} error={error} omitButtons>
                        {isPosting && <i className="fal fa-spinner fa-spin"></i>}
                    </Form>
                    <div>
                        We created an account for you. Please confirm your e-mail addrss and use our
                        service to the maximum
                    </div>
                </div>
                <div className="d-flex justify-between">
                    <div></div>
                    <LinkButton href="/auth/login" className="winged">
                        Login
                    </LinkButton>
                </div>
            </AuthSection>
        </AuthCard>
    );
};

export default ConfirmEmail;
