import { Link } from 'react-router-dom';
import { useState } from 'react';

function HeaderMobile() {
    const [menuIsOpen, setMenuIsOpen] = useState(true);

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
                <button onClick={() => closeMenu()}>Close</button>
                <nav className="menuMobile__nav">
                    <li className="menuMobile__li">
                        <Link className="menuMobile__a" to="/why-use">
                            Why Use
                        </Link>
                    </li>
                </nav>
            </div>
            <button onClick={() => toggleMenuState()} type="button">
                Open Menu
            </button>
        </div>
    );
}

export default HeaderMobile;
