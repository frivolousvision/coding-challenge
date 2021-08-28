import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faBars,
  faTimesCircle,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import "./header.css";

const Header = (props) => {
  // const approved = "Approved";
  // const researching = "Researching";
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const showMenu = () => {
    document.getElementsByClassName("mobile-menu")[0].style.width = "70%";
    document.getElementsByClassName("mobile-menu")[0].style.display = "flex";
    document.getElementsByClassName("bars")[0].style.display = "none";
  };
  const closeMenu = () => {
    document.getElementsByClassName("mobile-menu")[0].style.width = "0";
    document.getElementsByClassName("mobile-menu")[0].style.display = "none";
    document.getElementsByClassName("bars")[0].style.display = "block";
  };
  return (
    <nav className='header'>
      <div className='header-links'>
        <Link to='/'>
          <FontAwesomeIcon
            onClick={() => scrollTop()}
            className='icon-mobile'
            icon={faGlobe}
          />
        </Link>
        <Link to='/'>
          <h2 onClick={() => scrollTop()} className='header-desktop'>
            Global Acquisitions
          </h2>
        </Link>

        <FontAwesomeIcon
          icon={faBars}
          className='bars'
          onClick={() => showMenu()}
        />
      </div>
      <div className='mobile-menu'>
        <FontAwesomeIcon
          icon={faTimes}
          className='close-button'
          onClick={() => closeMenu()}
        />
        <div className='ul-container'>
          <ul>
            {props.targets
              ? props.targets.map((target) => {
                  return (
                    <Link to={`/${target.id}`}>
                      <li className='menu-targets'>{target.name}</li>
                    </Link>
                  );
                })
              : null}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
