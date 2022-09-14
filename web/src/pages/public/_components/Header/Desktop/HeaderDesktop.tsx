import { NavLink } from 'react-router-dom';

function HeaderDesktop() {
    return (
        <nav className="hidden lg:block header-public__menu">
            <ul className="d-flex space-x-8">
                <li className="header-public__menu-li">
                    <NavLink className="header-public__menu-a" to="/why-use">
                        Why Use
                    </NavLink>
                </li>
                <li className="header-public__menu-li">
                    <NavLink className="header-public__menu-a" to="/mees">
                        MEES
                    </NavLink>
                </li>
                <li className="header-public__menu-li">
                    <NavLink className="header-public__menu-a" to="/process">
                        Process
                    </NavLink>
                </li>
                <li className="header-public__menu-li">
                    <NavLink className="header-public__menu-a" to="/faq">
                        FAQ
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default HeaderDesktop;
