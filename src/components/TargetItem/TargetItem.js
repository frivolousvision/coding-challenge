import "./target-item.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import EditTargetForm from "../EditTargetForm/EditTargetForm";
import { classNameSelector } from "../../util/classNameSelector";

const TargetItem = (props) => {
  const [id] = useState(props.target.id);
  const [editCompany, setEditCompany] = useState(false);

  const toggleForm = () => {
    !editCompany ? setEditCompany(true) : setEditCompany(false);
  };

  return (
    <div className='target-items'>
      <div className={!editCompany ? "show-info" : "hide-form"}>
        <div className='target-heading'>
          <Link to={`/${props.target.id}`}>
            {props.target.img_url ? (
              <img src={props.target.img_url} alt='Company Logo'></img>
            ) : null}
            <h2>{props.target.name}</h2>
          </Link>
        </div>
        <div className='target-information'>
          <p>{props.target.info}</p>
        </div>
        <div className='contact-container'>
          <h4 className='contact-header'>Contact:</h4>
          <a href={`mailto:${props.target.contact}`}>{props.target.contact}</a>
        </div>
        <Link to={`/${props.target.id}`}>
          <div className='learn-more-container'>
            <p>Learn more about {props.target.name}</p>
          </div>
        </Link>
        <div className={props.target.status}>
          <strong className={classNameSelector(props.target.status)}>
            {props.target.status}
          </strong>
        </div>
      </div>

      <div className={editCompany ? "show-form" : "hide-form"}>
        <EditTargetForm
          toggleForm={toggleForm}
          target={props.target}
          editTargetFromHome={props.editTargetFromHome}
        />
      </div>
      <div className='edit-delete-button-container'>
        {!editCompany ? (
          <button onClick={toggleForm} className='edit-cancel-button'>
            Edit
          </button>
        ) : (
          <button onClick={toggleForm} className='edit-cancel-button'>
            Cancel
          </button>
        )}
        {props.target.id ? (
          <button
            onClick={() => props.deleteTarget(id)}
            className='delete-button'
          >
            Delete
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default TargetItem;
