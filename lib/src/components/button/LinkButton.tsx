import { Link } from 'react-router-dom';

const LinkButton: React.FC<LinkButtonProps> = ({ source = 'primary', href = '', icon, children }) => (
    <Link to={href} className={`button ${source}`}>
        {icon && <i className={`icon far fa-fw fa-${icon}`}></i>}
        <span className="text">{children}</span>
    </Link>
);

interface LinkButtonProps {
    children: React.ReactNode;
    source?: 'primary' | 'secondary' | 'positive' | 'negative';
    href?: string;
    icon?: string;
}

export default LinkButton;
