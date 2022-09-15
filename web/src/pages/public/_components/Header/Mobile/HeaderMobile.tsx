import { Link, NavLink } from 'react-router-dom';
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
                    <button className="menuMobile__button-close" onClick={() => closeMenu()}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="menuMobile__button-close-svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                <div>
                    {/* <button type="button">
                        <NavLink to="dashboard/auth/login">Client Portal</Link>
                    </button> */}
                    <div>{/* TOOD: User avatar */}</div>
                    <nav className="menuMobile__nav">
                        <li className="menuMobile__li">
                            <NavLink className="menuMobile__link" to="/why-use">
                                Why Use
                            </NavLink>
                        </li>
                        <li className="menuMobile__li">
                            <NavLink className="menuMobile__link is-active" to="/mees">
                                MEES
                            </NavLink>
                        </li>
                        <li className="menuMobile__li">
                            <NavLink className="menuMobile__link" to="/process">
                                Process
                            </NavLink>
                        </li>
                        <li className="menuMobile__li">
                            <NavLink className="menuMobile__link" to="/faq">
                                FAQ
                            </NavLink>
                        </li>
                    </nav>
                    {/* <footer>
                        <a href="mailto:info@improveasy.com">info@improveasy.com</a>
                        <a href="tel:0800 024 8505">0800 024 8505</a>
                        <span>&copy; Improveasy</span>
                    </footer> */}
                </div>
            </div>
            <button
                className="menuMobile__button-open lg:hidden"
                onClick={() => toggleMenuState()}
                type="button"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                </svg>
            </button>
        </div>
    );
}

export default HeaderMobile;
