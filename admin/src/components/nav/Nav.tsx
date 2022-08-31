import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { logout } from '@actions/auth';

import NavGroup from './NavGroup';
import NavItem from './NavItem';
import { clearJwtAndRefreshToken } from 'lib/src/utils/jwt';

const Nav: React.FC = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const path = location.pathname.toLowerCase();
    if (path.startsWith('/auth')) return null;

    return (
        <nav className="navigation custom-scroll">
            <ul className="nav-list">
                <NavItem to="/" text="Dashboard" icon="home" />

                <NavGroup text="User management">
                    <NavItem to="/admin-users" text="Admins" icon="users-cog" />
                    <NavItem to="/users" text="Users" icon="users" />
                </NavGroup>

                <NavGroup text="Settings">
                    <NavItem
                        to="/auth/login"
                        text="Logout"
                        icon="sign-out"
                        onClick={() => {
                            clearJwtAndRefreshToken();
                            dispatch(logout());
                        }}
                    />
                </NavGroup>
            </ul>
        </nav>
    );
};

export default Nav;
