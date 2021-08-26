import "./target-item.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import EditTargetForm from "../EditTargetForm/EditTargetForm";

const TargetItem = (props) => {
  const [target] = useState(props.target);
  const [id] = useState(props.target.id);
  const [imgUrl] = useState(props.target.img_url);
  const [newStatus] = useState(props.target.status);
  const [editCompany, setEditCompany] = useState(false);

  const toggleForm = () => {
    !editCompany ? setEditCompany(true) : setEditCompany(false);
  };

  return (
    <div className='target-items'>
      <div className={!editCompany ? "show-info" : "hide-form"}>
        <div className='target-heading'>
          <Link to={`/${props.target.id}`}>
            {imgUrl ? <img src={imgUrl} alt='Company Logo'></img> : null}
            <h2>{props.target.name}</h2>
          </Link>
        </div>
        <div className='target-information'>
          <p>{props.target.info}</p>
        </div>
        <p>{props.target.contact}</p>
        <Link to={`/${props.target.id}`}>
          <div>More info</div>
        </Link>
        <div
          className={
            newStatus === "Researching"
              ? "yellow status status-box"
              : newStatus === "Pending Approval"
              ? "blue status status-box"
              : newStatus === "Approved"
              ? "green status status-box"
              : newStatus === "Declined"
              ? "red status status-box"
              : null
          }
        >
          <strong className='status'>{newStatus}</strong>
        </div>
      </div>

      <div className={editCompany ? "show-form" : "hide-form"}>
        <EditTargetForm
          toggleForm={toggleForm}
          target={target}
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
