import Form from 'lib/src/components/form/Form';

import useConfirmEmail from './hooks/useConfirmEmail';

import { AuthCard, AuthHeader, AuthSection } from '../_components';
import { Text } from '@components/ui';

const ConfirmEmail: React.FC = () => {
    const { isPosting, error } = useConfirmEmail();

    return (
        <AuthCard>
            <AuthHeader title="Confirm Email" />
            <AuthSection>
                <div style={{ marginBottom: '20px' }}>
                    <Form onSubmit={() => {}} isPosting={isPosting} error={error} omitButtons>
                        {isPosting && <i className="fal fa-spinner fa-spin"></i>}
                    </Form>

                    {!error && (
                        <div>
                            <Text>Your email address has been confirmed.</Text>
                            <Text>Please wait while we log you in...</Text>
                        </div>
                    )}
                </div>
            </AuthSection>
        </AuthCard>
    );
};

export default ConfirmEmail;
