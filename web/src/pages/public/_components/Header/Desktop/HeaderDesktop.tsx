import { Link } from 'react-router-dom';

function HeaderDesktop() {
    return (
        <nav className="header-public__menu">
            <ul className="d-flex space-x-8">
                <li className="header-public__menu-li">
                    <Link className="header-public__menu-a" to="/why-use">
                        Why Use
                    </Link>
                </li>
                <li className="header-public__menu-li">
                    <Link className="header-public__menu-a" to="/mees">
                        MEES
                    </Link>
                </li>
                <li className="header-public__menu-li">
                    <Link className="header-public__menu-a" to="/process">
                        Process
                    </Link>
                </li>
                <li className="header-public__menu-li">
                    <Link className="header-public__menu-a" to="/faq">
                        FAQ
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default HeaderDesktop;
