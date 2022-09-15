import { Link } from 'react-router-dom';

function AuthSubHeader({ subtitle, to, cta }: AuthSubHeaderProps) {
    return (
        <div>
            {subtitle}
            <Link style={{ color: 'green' }} to={to}>
                {cta}
            </Link>
        </div>
    );
}

export default AuthSubHeader;

interface AuthSubHeaderProps {
    subtitle: string;
    to: string;
    cta: string;
}
