import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Navbar } from "react-bootstrap";
import { faCartShopping, faEnvelope, faHeart, faLocationDot, faPhoneVolume, faUser, } from "@fortawesome/free-solid-svg-icons";
import Nav from "react-bootstrap/Nav";


function Header() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("home");
  useEffect(() => {
    const path = location.pathname.substring(1);
    setActiveLink(path || "home");
  }, [location.pathname]);

  const handleNavItemClick = (selectedLink) => {
    setActiveLink(selectedLink);
    const navbarToggle = document.querySelector(".navbar-toggler");
    if (navbarToggle && window.innerWidth <= 992) {
      navbarToggle.click();
    }
  };

  return (
    <>
      <section className="main-header">
        <Container>
          <Navbar collapseOnSelect expand="lg">
            <Link to={"/"}>
              <Navbar.Brand>
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/images/logo/snap_logo.webp"
                  }
                  className="logo-img"
                  alt="..."
                  onClick={() => handleNavItemClick("/")}
                />
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
              <div>
                <FontAwesomeIcon icon={faHeart} className="social-header-icon" />
                <FontAwesomeIcon icon={faUser}  className="social-header-icon"/>
                <FontAwesomeIcon icon={faCartShopping} className="social-header-icon" />
              </div>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </section>
    </>
  );
}

export default Header;
