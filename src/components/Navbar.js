import { useState } from "react";
import Air from "./img/Air.svg";
import Fire from "./img/Fire.svg";
import Earth from "./img/earth.svg";
import Water from "./img/water.svg";
import Ether from "./img/Ether.svg";
import insta from "./img/insta.png";

import SageEuphoriaLogo from "./img/logoSAGE.png";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [sideNav, setsideNav] = useState(false);

  const handleNav = () => {
    setsideNav(!sideNav);
  };
  const scrollToBottom = () => {
    window.scrollTo(0, document.body.scrollHeight);
  }
  // const scrollToTeam = () => {
  //   window.scrollTo(0, 425 * 6);
  // }
  const scrollToSponsors = () => {
    window.scrollTo(0, 3200);
  }
  return (
    <>
      <nav className="sageNavbar relative sageNavbarMobile z-20">
        <Link to="/" className="sageNavLogo">
          <img className="SageEuphoriaLogo" src={SageEuphoriaLogo} alt="" />
        </Link>
        <ul className="sagePanchCnt">
          <li>
            <img className="sagePanchSvg" src={Air} alt="" />
          </li>
          <li>
            <img className="sagePanchSvg" src={Fire} alt="" />
          </li>
          <li>
            <img className="sagePanchSvg" src={Earth} alt="" />
          </li>
          <li>
            <img className="sagePanchSvg" src={Water} alt="" />
          </li>
          <li>
            <img className="sagePanchSvg" src={Ether} alt="" />
          </li>
        </ul>
        <div className="sageNavMenu">
          <span>MENU</span>
          <label className="hamburger">
            <input
              type="checkbox"
              onClick={handleNav}
              onChange={() => { }}
              checked={sideNav}
            />
            <svg viewBox="0 0 32 32">
              <path
                className="line line-top-bottom"
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
              ></path>
              <path className="line" d="M7 16 27 16"></path>
            </svg>
            <ul className="sageSideNav ">
              <li>
                <Link onClick={handleNav} to="/">
                  HOME
                </Link>
              </li>
              <li>
                <Link onClick={handleNav} to="/Events">
                  EVENTS
                </Link>
              </li>
              <li >
                <Link onClick={handleNav} to="/Gallery">
                  GALLERY
                </Link>
              </li>
              <li onClick={scrollToBottom}>
                <Link onClick={handleNav} to="">
                  CONTACT
                </Link>
              </li>
              <li>
                <div className="sagefooterInSocial">
                  <a href="https://www.instagram.com/sage.euphoria?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer"><img src={insta} alt=""></img></a>
                </div>
              </li>
            </ul>
          </label>
        </div>
      </nav>
      <nav className="sageNavbar relative sageNavbarDesktop z-20">
        <Link to="/" className="sageNavLogo">
          <img className="SageEuphoriaLogo" src={SageEuphoriaLogo} alt="" />
        </Link>
        <ul className="sageNavigation">
          <li>
            <Link to="/">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/Events">
              EVENTS
            </Link>
          </li>
          <li >
            <Link onClick={handleNav} to="/Gallery">
              GALLERY
            </Link>
          </li>
          <li onClick={scrollToBottom}>
            <Link to="">
              CONTACT
            </Link>
          </li>
          <li>
            <div className="sagefooterInSocial">
              <a href="https://www.instagram.com/sage.euphoria?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer"><img src={insta} alt=""></img></a>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}
