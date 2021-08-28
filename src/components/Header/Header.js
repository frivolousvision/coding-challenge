import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./header.css";

const Header = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleMenu = () => {
    if (!showMenu) {
      // document.getElementsByClassName("mobile-menu-contents")[0].style.display =
      //   "contents";
      document.getElementById("menu-contents").style.display = "contents";
      document.getElementsByClassName("mobile-menu")[0].style.width = "20rem";
      document.getElementsByClassName("bars")[0].style.transform =
        "rotate(360deg)";
      document.getElementsByClassName("bars")[0].style.right = "-20px";
      setShowMenu(true);
    }
    if (showMenu) {
      document.getElementsByClassName("mobile-menu")[0].style.width = "0";
      // document.getElementsByClassName("mobile-menu-contents")[0].style.display =
      // "none";
      document.getElementById("menu-contents").style.display = "none";
      document.getElementsByClassName("bars")[0].style.display = "block";
      document.getElementsByClassName("bars")[0].style.transform =
        "rotate(-360deg)";
      setShowMenu(false);
    }
  };
  const handleHomeClick = () => {
    scrollTop();
    if (showMenu) {
      document.getElementsByClassName("mobile-menu")[0].style.width = "0";
      document.getElementsByClassName("mobile-menu-contents")[0].style.display =
        "none";
      document.getElementsByClassName("bars")[0].style.display = "block";
      document.getElementsByClassName("bars")[0].style.transform =
        "rotate(-360deg)";
      setShowMenu(false);
    }
  };
  const handleNewTargetLink = () => {
    toggleMenu();
    window.scrollTo(0, document.body.scrollHeight);
  };

  return (
    <nav className='header'>
      <div className='header-links'>
        <Link to='/'>
          <FontAwesomeIcon
            onClick={() => handleHomeClick()}
            className='icon-mobile'
            icon={faGlobe}
          />
        </Link>
        <Link to='/'>
          <h2 onClick={() => handleHomeClick()} className='icon-desktop'>
            Global Acquisitions
          </h2>
        </Link>

        <FontAwesomeIcon
          icon={faBars}
          className='bars'
          onClick={() => toggleMenu()}
        />
      </div>
      <div className='mobile-menu'>
        <div className='mobile-menu-contents' id='menu-contents'>
          <div className='ul-container'>
            <ul>
              {props.targets
                ? props.targets.map((target) => {
                    return (
                      <Link to={`/${target.id}`} onClick={() => toggleMenu()}>
                        <li className='menu-targets'>{target.name}</li>
                      </Link>
                    );
                  })
                : null}
              <li
                onClick={() => handleNewTargetLink()}
                className='menu-targets'
              >
                Create New Target
              </li>
            </ul>
          </div>
          <div className='close-menu-container'>
            <FontAwesomeIcon
              icon={faTimes}
              className='close-button'
              onClick={() => toggleMenu()}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
