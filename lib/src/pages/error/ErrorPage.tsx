import ActionButton from '../../components/button/ActionButton';

const ErrorPage: React.FC<ErrorPageProps> = ({ error }) => {
   const isDark = localStorage.getItem('darkMode') === 'true';

    return (
        <div className='error-boundary' data-theme={isDark ? 'dark' : 'light'}>
            <div className='error-box'>
                <h1>Something went wrong.</h1>

                <p>{error.message}</p>
                <ActionButton onClick={() => window.location.reload()}>Reload</ActionButton>
            </div>
        </div>
    );
};

interface ErrorPageProps {
    error: Error;
}

export default ErrorPage;
