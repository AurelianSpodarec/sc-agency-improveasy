import { Link } from 'react-router-dom';

const ResetPasswordSuccess: React.FC = () => {
    return (
        <>
            <p>Success!</p>
            <p>
                Your password has been reset.
                <Link to="/auth/login">Login</Link>
            </p>
        </>
    );
};

export default ResetPasswordSuccess;
