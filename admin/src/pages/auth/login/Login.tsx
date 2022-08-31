import LoginFormContainer from './LoginFormContainer';

const Login: React.FC = () => {
    return (
        <>
            <div className="login-form-wrapper">
                <div className="login-form">
                    <LoginFormContainer />
                </div>
            </div>
        </>
    );
};

export default Login;
