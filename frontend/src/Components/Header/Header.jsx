 import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import loginService from "../../services/login.service";
import { useAuth } from "../../Context/AuthContext";

function Header() {
  const { isLogged, setIsLogged, employee } = useAuth();

  // Logout handler
  const logOut = () => {
    loginService.logOut();
    setIsLogged(false);
  };

  return (
    <div>
      {/* Main Header */}
      <header className="main-header header-style-one">
        {/* Header Top */}
        <div className="header-top">
          <div className="auto-container">
            <div className="inner-container">
              <div className="left-column">
                <div className="text">Enjoy the Beso while we fix your car</div>
                <div className="office-hour">
                  Monday - Saturday 7:00AM - 6:00PM
                </div>
              </div>

              <div className="right-column">
                {isLogged ? (
                  <div className="phone-number">
                    <strong>Welcome {employee?.employee_first_name}</strong>
                  </div>
                ) : (
                  <div className="phone-number">
                    Schedule Appointment: <strong>09 0022113</strong>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Header Upper */}
        <div className="header-upper">
          <div className="auto-container">
            <div className="inner-container">
              {/* Logo */}
              <div className="logo-box">
                <div className="logo">
                  <Link to="/">
                    <img src={logo} alt="Company Logo" />
                  </Link>
                </div>
              </div>

              {/* Navigation */}
              <div className="right-column">
                <div className="nav-outer">
                  <div className="mobile-nav-toggler">
                    <img
                      src="assets/images/icons/icon-bar.png"
                      alt="menu toggle"
                    />
                  </div>

                  <nav className="main-menu navbar-expand-md navbar-light">
                    <div
                      className="collapse navbar-collapse show clearfix"
                      id="navbarSupportedContent"
                    >
                      <ul className="navigation">
                        <li>
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                          <Link to="/about">About Us</Link>
                        </li>
                        <li>
                          <Link to="/services">Services</Link>
                        </li>
                        <li>
                          <Link to="/contact">Contact Us</Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>

                {/* Login / Logout button */}
                {isLogged ? (
                  <div className="link-btn">
                    <Link
                      to="/"
                      onClick={logOut}
                      className="theme-btn btn-style-one"
                    >
                      Logout
                    </Link>
                  </div>
                ) : (
                  <div className="link-btn">
                    <Link to="/login" className="theme-btn btn-style-one">
                      Login
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Sticky Header */}
        <div className="sticky-header">
          <div className="header-upper">
            <div className="auto-container">
              <div className="inner-container">
                <div className="logo-box">
                  <div className="logo">
                    <Link to="/">
                      <img src={logo} alt="Sticky Logo" />
                    </Link>
                  </div>
                </div>

                <div className="right-column">
                  {isLogged ? (
                    <div className="link-btn">
                      <Link
                        to="/"
                        onClick={logOut}
                        className="theme-btn btn-style-one"
                      >
                        Logout
                      </Link>
                    </div>
                  ) : (
                    <div className="link-btn">
                      <Link to="/login" className="theme-btn btn-style-one">
                        Login
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="mobile-menu">
          <div className="menu-backdrop"></div>
          <div className="close-btn">
            <span className="icon flaticon-remove"></span>
          </div>

          <nav className="menu-box">
            <div className="nav-logo">
              <Link to="/">
                <img src={logo} alt="Mobile Logo" />
              </Link>
            </div>

            <div className="menu-outer">
              <ul className="navigation">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        {/* Nav Overlay */}
        <div className="nav-overlay">
          <div className="cursor"></div>
          <div className="cursor-follower"></div>
        </div>
      </header>
    </div>
  );
}

export default Header;
