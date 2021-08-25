import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className='header'>
      <Link to='/'>
        <h2>Target Acquisitions</h2>
      </Link>
    </div>
  );
};

export default Header;
