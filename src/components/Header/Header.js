import { Link } from "react-router-dom";
import "./header.css";

const Header = (props) => {
  // const approved = "Approved";
  // const researching = "Researching";
  return (
    <div className='header'>
      <Link to='/'>
        <h2>Target Acquisitions</h2>
      </Link>
      {/* <p onClick={() => props.filterTargets(approved)}>Approved</p> */}
      {/* <p onClick={() => props.filterTargets(researching)}>Researching</p> */}
    </div>
  );
};

export default Header;
