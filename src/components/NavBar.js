import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function Navbar() {
  // Check if scrolling up or down
  const [y, setY] = useState(document.scrollingElement.scrollHeight);
  const [scrollDirection, setScrollDirection] = useState("ScrollingUp");
  const handleNavigation = useCallback(
    (e) => {
      if (y > window.scrollY) {
        setScrollDirection("ScrollingUp");
      } else if (y < window.scrollY) {
        setScrollDirection("ScrollingDown");
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleNavigation);
    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  // Button for mobile navbar menu
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // When mobile navbar menu is clicked scroll dissapears
  click
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  return (
    <>
      <nav className={scrollDirection}>
        <div className="navbar-container">
          <Link
            to="/website-project/"
            className="navbar-logo"
            onClick={closeMobileMenu}
          >
            Gorgo School
            <img
              className="social_information_icon_2"
              src="/website-project/icons/book.svg"
              alt="book"
            />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <img
              className="social_information_icon_2"
              src={
                click
                  ? "/website-project/icons/close.svg"
                  : "/website-project/icons/menu.svg"
              }
              alt="menu"
            />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/website-project/"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/website-project/cennik"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/website-project/sign-up"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
