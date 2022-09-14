import { Link } from 'react-router-dom';
import { useState } from 'react';

function HeaderMobile() {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    function toggleMenuState() {
        setMenuIsOpen(!menuIsOpen);
    }

    function closeMenu() {
        console.log(menuIsOpen);
        setMenuIsOpen(false);
    }

    return (
        <div>
            <div className={`menuMobile ${menuIsOpen ? 'is-open' : ''}`}>
                <div className="d-flex justify-between">
                    <div></div>
                    <button onClick={() => closeMenu()}>Close</button>
                </div>

                <div>
                    <button type="button">
                        <Link to="dashboard/auth/login">Client Portal</Link>
                    </button>
                    <nav className="menuMobile__nav">
                        <li className="menuMobile__li">
                            <Link className="menuMobile__link" to="/why-use">
                                Why Use
                            </Link>
                        </li>
                        <li className="menuMobile__li">
                            <Link className="menuMobile__link" to="/mees">
                                MEES
                            </Link>
                        </li>
                        <li className="menuMobile__li">
                            <Link className="menuMobile__link" to="/process">
                                Process
                            </Link>
                        </li>
                        <li className="menuMobile__li">
                            <Link className="menuMobile__link" to="/faq">
                                FAQ
                            </Link>
                        </li>
                    </nav>
                    <footer>
                        <a href="mailto:info@improveasy.com">info@improveasy.com</a>
                        <a href="tel:0800 024 8505">0800 024 8505</a>
                        <span>&copy; Improveasy</span>
                    </footer>
                </div>
            </div>
            <button className="lg:hidden" onClick={() => toggleMenuState()} type="button">
                Open Menu
            </button>
        </div>
    );
}

export default HeaderMobile;
