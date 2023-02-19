import React, { useState, /*useRef,*/ useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import './NavBar.css';

/*import Cards from "./Cards";*/


function Navbar(){
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)

    
    /*const myRef = <Cards/>;
    const executeScroll = () => myRef.current.scrollIntoView();
    const scroll = () => window.scrollTo(0, 900);*/
    

    const showButton = () => {
        if(window.innerWidth <= 1024) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);


    return(
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    Gorgo School <i class="fas fa-book-open"></i>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>  
                        <Link to='/' className='nav-links' onClick={() => {
                            closeMobileMenu();
                            /*executeScroll();
                            scroll();*/
                            }}>                          
                            O nas
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/cennik' className='nav-links' onClick={closeMobileMenu}>
                            Ucz się ze mną
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Kontakt
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>Kontakt</Button>}
            </div>
        </nav>
    </>
    )
}

export default Navbar;