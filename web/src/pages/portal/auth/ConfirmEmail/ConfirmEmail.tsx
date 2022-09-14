import Form from 'lib/src/components/form/Form';

import useConfirmEmail from './hooks/useConfirmEmail';

import AuthCard from '../_components/authCard';
import AuthHeader from '../_components/authHeader';

const ConfirmEmail: React.FC = () => {
    const { isPosting, error } = useConfirmEmail();

    return (
        <AuthCard>
            <AuthHeader title="Confirm Email" />
            <Form onSubmit={() => {}} isPosting={isPosting} error={error} omitButtons>
                {isPosting && <i className="fal fa-spinner fa-spin"></i>}
            </Form>
        </AuthCard>
    );
};

export default ConfirmEmail;
