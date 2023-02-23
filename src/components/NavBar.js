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
                <Link to="/website-project/" className="navbar-logo" onClick={closeMobileMenu}>
                    Gorgo School 
                    <img className="social_information_icon_2" src="/website-project/icons/book.svg" alt="book"/>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <img className="social_information_icon_2" src={click ? "/website-project/icons/close.svg" : "/website-project/icons/menu.svg"} alt="menu"/>
                    {/* <i className={click ? 'fas fa-times' : 'fas fa-bars'}/> */}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>  
                        <Link to='/website-project/' className='nav-links' onClick={() => {
                            closeMobileMenu();
                            /*executeScroll();
                            scroll();*/
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
                {/* {button && <Button buttonStyle='btn--outline'>Kontakt</Button>} */}
            </div>
        </nav>
    </>
    )
}

export default Navbar;