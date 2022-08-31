import Title from 'lib/src/components/typography/Title';
import LoginFormContainer from './LoginFormContainer';

const Login: React.FC = () => (
    <div id="login-page" className="page-padding">
        <Title>Login</Title>
        <LoginFormContainer />
    </div>
);

export default Login;
