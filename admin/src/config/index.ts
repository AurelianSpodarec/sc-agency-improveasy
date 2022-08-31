import dev from './dev.config';
import staging from './staging.config';
import production from './production.config';

const env: Environment = (process.env.REACT_APP_ENVIRONMENT as Environment) || 'dev';

const configs = {
    dev,
    staging,
    production,
};

export default configs[env];

export interface Config {
    API_URL: string;
}

type Environment = 'dev' | 'staging' | 'production';
