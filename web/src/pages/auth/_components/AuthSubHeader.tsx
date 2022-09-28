import { Link } from 'react-router-dom';

function AuthSubHeader({ subtitle, to, cta }: AuthSubHeaderProps) {
    return (
        <div className="space-x-2">
            <span>{subtitle}</span>
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
