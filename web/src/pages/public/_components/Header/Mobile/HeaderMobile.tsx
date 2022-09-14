import { Link } from 'react-router-dom';

function HeaderMobile() {
    return (
        <div className="menuMobile">
            <nav className="menuMobile__nav">
                <li className="menuMobile__li">
                    <Link className="menuMobile__a" to="/why-use">
                        Why Use
                    </Link>
                </li>
            </nav>
        </div>
    );
}

export default HeaderMobile;
