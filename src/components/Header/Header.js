import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

import "./header.css";

const Header = (props) => {
  // const approved = "Approved";
  // const researching = "Researching";
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <nav className='header'>
      <Link to='/'>
        <h2 onClick={() => scrollTop()} className='header-desktop'>
          Global Acquisitions
        </h2>
      </Link>
      <Link to='/'>
        <FontAwesomeIcon
          onClick={() => scrollTop()}
          className='header-mobile'
          icon={faGlobe}
        />
      </Link>
      {/* <Link to='/create-target'>Create Target</Link> */}
      {/* <p onClick={() => props.filterTargets(approved)}>Approved</p> */}
      {/* <p onClick={() => props.filterTargets(researching)}>Researching</p> */}
    </nav>
  );
};

export default Header;
