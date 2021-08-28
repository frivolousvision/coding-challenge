import { Link } from "react-router-dom";
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
        <h2 onClick={() => scrollTop()}>Target Acquisitions</h2>
      </Link>
      {/* <Link to='/create-target'>Create Target</Link> */}
      {/* <p onClick={() => props.filterTargets(approved)}>Approved</p> */}
      {/* <p onClick={() => props.filterTargets(researching)}>Researching</p> */}
    </nav>
  );
};

export default Header;
