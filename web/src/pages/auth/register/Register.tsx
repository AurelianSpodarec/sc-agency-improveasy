import Title from 'lib/src/components/typography/Title';
import RegisterFormContainer from './RegisterFormContainer';

const Register: React.FC = (): JSX.Element => (
    <div id="register-page" className="page-padding">
        <Title>Register</Title>
        <RegisterFormContainer />
    </div>
);

export default Register;
