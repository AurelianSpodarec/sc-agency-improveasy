import React from 'react';
import pckg from '../../../package.json';
import { api, ErrorLogRequest } from '../../utils/api';
import ErrorPage from './ErrorPage';

class ErrorBoundary extends React.Component<any, any> {
    state = {
        hasErrored: false,
        error: null,
        info: null,
    };

    static getDerivedStateFromError(error: Error) {
        return { error: error, hasErrored: true };
    }

    componentDidCatch = async (error: Error, errorInfo: React.ErrorInfo) => {
        this.setState({ info: errorInfo, error, hasErrored: true });
        console.log('error message');
        console.log(error.message);
        console.log('error info');
        console.log(errorInfo.componentStack);
        try {
            const errorLog: ErrorLogRequest = {
                message: error.message,
                stackTrace: error.stack,
                appVersion: pckg.version,
                device: '',
                deviceOS: '',
                deviceRAM: null,

            };
            await api.logError(errorLog);
        } catch (e) {
            console.log('Error logging error');
            console.log(JSON.stringify(e));
        }
    };

    render = () => {
        if (this.state.error) {
            return <ErrorPage error={this.state.error} />;
        } else return this.props.children;
    };
}

export default ErrorBoundary;
