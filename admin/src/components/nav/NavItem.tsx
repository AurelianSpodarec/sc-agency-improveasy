import { Link, useLocation } from 'react-router-dom';

const NavItem: React.FC<NavItemProps> = ({ to, text = '', icon, onClick = () => {} }) => {
    const { pathname } = useLocation();
    return (
        <li className="nav-item">
            <Link to={to} onClick={onClick} className={checkIsActive(to, pathname) ? 'active' : ''}>
                {icon && <i className={`icon fal fa-fw fa-${icon}`}></i>} <p>{text}</p>
            </Link>
        </li>
    );
};

function checkIsActive(to: string, path: string) {
    if (to === '/') return to === path;
    return path.toLowerCase().startsWith(to.toLowerCase());
}

interface NavItemProps {
    to: string;
    text: string;
    icon: string | undefined;
    onClick?: (event: React.MouseEvent) => void;
}

export default NavItem;
