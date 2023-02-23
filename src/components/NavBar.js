import React, { useState, /*useRef,*/ useEffect } from "react";
import { Link } from "react-router-dom";
import './NavBar.css';


function Navbar(){
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click) ;
    const closeMobileMenu = () => setClick(false);

    return(
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/website-project/" className="navbar-logo" onClick={closeMobileMenu}>
                    Gorgo School 
                    <img className="social_information_icon_2" src="/website-project/icons/book.svg" alt="book"/>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <img className="social_information_icon_2" src={click ? "/website-project/icons/close.svg" : "/website-project/icons/menu.svg"} alt="menu"/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>  
                        <Link to='/website-project/' className='nav-links' onClick={() => {
                            closeMobileMenu();
                            }}>                          
                            O nas
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/website-project/cennik' className='nav-links' onClick={closeMobileMenu}>
                            Ucz się ze mną
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/website-project/sign-up' className='nav-links' onClick={closeMobileMenu}>
                            Kontakt
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </>
    )
}

export default Navbar;