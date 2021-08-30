import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faBars,
  faTimes,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import "./header.css";

const Header = (props) => {
  const defaultCategoryState = [
    { id: 0, show: false },
    { id: 1, show: false },
    { id: 2, show: false },
    { id: 3, show: false },
  ];

  const [showMenu, setShowMenu] = useState(false);
  const [displayCategory, setDisplayCategory] = useState(defaultCategoryState);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const collapseCategories = () => {
    const menuArrOne = document.getElementsByClassName("menu-category");
    for (let i = 0; i < menuArrOne.length; i++) {
      menuArrOne[i].style.transform = "scaleY(0)";
      menuArrOne[i].style.height = "0";
    }
  };

  const toggleMenu = () => {
    if (!showMenu) {
      document.getElementById("menu-contents").style.display = "contents";
      document.getElementsByClassName("mobile-menu")[0].style.width = "20rem";
      document.getElementsByClassName("bars")[0].style.transform =
        "rotate(360deg)";
      setShowMenu(true);
    }
    if (showMenu) {
      document.getElementsByClassName("mobile-menu")[0].style.width = "0";
      document.getElementById("menu-contents").style.display = "none";
      document.getElementsByClassName("bars")[0].style.transform =
        "rotate(-360deg)";
      setShowMenu(false);
      setDisplayCategory(defaultCategoryState);
      collapseCategories();
    }
  };

  const toggleCategories = (id) => {
    let updated;
    const theOne = displayCategory.find((t) => t.id === id);
    if (theOne.show === false) {
      updated = {
        ...theOne,
        show: true,
      };
      document.getElementsByClassName("menu-category")[id].style.height =
        "auto";
      document.getElementsByClassName("menu-category")[id].style.transform =
        "scaleY(1)";
    }
    if (theOne.show === true) {
      updated = {
        ...theOne,
        show: false,
      };
      document.getElementsByClassName("menu-category")[id].style.transform =
        "scaleY(0)";
      setTimeout(() => {
        document.getElementsByClassName("menu-category")[id].style.height = "0";
      }, 300);
    }
    const updatedShow = displayCategory.map((t) =>
      t.id === updated.id ? updated : t
    );
    setDisplayCategory(updatedShow);
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
    setDisplayCategory(defaultCategoryState);
    collapseCategories();
  };

  const handleNewTargetLink = () => {
    toggleMenu();
    collapseCategories();
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 100);
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
            Target Acquisitions
          </h2>
        </Link>

        {showMenu ? (
          <FontAwesomeIcon
            icon={faTimes}
            className='bars'
            onClick={() => toggleMenu()}
          />
        ) : (
          <FontAwesomeIcon
            icon={faBars}
            className='bars'
            onClick={() => toggleMenu()}
          />
        )}
      </div>
      <div className='mobile-menu'>
        <div className='mobile-menu-contents' id='menu-contents'>
          <div className='ul-container'>
            <ul>
              <h2 onClick={() => toggleCategories(0)}>
                Researching{" "}
                {displayCategory[0].show ? (
                  <FontAwesomeIcon icon={faMinus} className='awesome' />
                ) : (
                  <FontAwesomeIcon icon={faPlus} className='awesome' />
                )}
              </h2>
              <div className='menu-category'>
                {props.targets
                  ? props.targets.map((target) => {
                      if (target.status === "Researching") {
                        return (
                          <Link
                            to={`/${target.id}`}
                            onClick={() => toggleMenu()}
                          >
                            <li className='menu-targets'>{target.name}</li>
                          </Link>
                        );
                      }
                      return null;
                    })
                  : null}
              </div>
              <h2 onClick={() => toggleCategories(1)}>
                Approved{" "}
                {displayCategory[1].show ? (
                  <FontAwesomeIcon icon={faMinus} className='awesome' />
                ) : (
                  <FontAwesomeIcon icon={faPlus} className='awesome' />
                )}
              </h2>
              <div className='menu-category'>
                {props.targets
                  ? props.targets.map((target) => {
                      if (target.status === "Approved") {
                        return (
                          <Link
                            to={`/${target.id}`}
                            onClick={() => toggleMenu()}
                          >
                            <li className='menu-targets'>{target.name}</li>
                          </Link>
                        );
                      }
                      return null;
                    })
                  : null}
              </div>
              <h2 onClick={() => toggleCategories(2)}>
                Pending Approval{" "}
                {displayCategory[2].show ? (
                  <FontAwesomeIcon icon={faMinus} className='awesome' />
                ) : (
                  <FontAwesomeIcon icon={faPlus} className='awesome' />
                )}
              </h2>
              <div className='menu-category'>
                {props.targets
                  ? props.targets.map((target) => {
                      if (target.status === "Pending Approval") {
                        return (
                          <Link
                            to={`/${target.id}`}
                            onClick={() => toggleMenu()}
                          >
                            <li className='menu-targets'>{target.name}</li>
                          </Link>
                        );
                      }
                      return null;
                    })
                  : null}
              </div>
              <h2 onClick={() => toggleCategories(3)}>
                Declined{" "}
                {displayCategory[3].show ? (
                  <FontAwesomeIcon icon={faMinus} className='awesome' />
                ) : (
                  <FontAwesomeIcon icon={faPlus} className='awesome' />
                )}
              </h2>
              <div className='menu-category'>
                {props.targets
                  ? props.targets.map((target) => {
                      if (target.status === "Declined") {
                        return (
                          <Link
                            to={`/${target.id}`}
                            onClick={() => toggleMenu()}
                          >
                            <li className='menu-targets'>{target.name}</li>
                          </Link>
                        );
                      }
                      return null;
                    })
                  : null}
              </div>
              <Link to='/'>
                <li
                  onClick={() => handleNewTargetLink()}
                  className='menu-targets new-target'
                >
                  Create New Target
                </li>
              </Link>
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
