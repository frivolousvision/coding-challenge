import "./target-item.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const TargetItem = (props) => {
  const [id] = useState(props.target.id);
  const [imgUrl] = useState(props.target.img_url);
  const [name, setName] = useState(props.target.name);
  const [info, setInfo] = useState(props.target.info);
  const [contact, setContact] = useState(props.target.contact);
  const [status, setStatus] = useState(props.target.status);

  const [newName, setNewName] = useState(props.target.name);
  const [newInfo, setNewInfo] = useState(props.target.info);
  const [newContact, setNewContact] = useState(props.target.contact);
  const [editCompany, setEditCompany] = useState(false);

  const handleStatusChange = (e) => {
    e.preventDefault();
    setStatus(e.target.value);
  };

  const editCurrentTarget = (e) => {
    e.preventDefault();
    setName(newName);
    setInfo(newInfo);
    setContact(newContact);
  };

  const toggleForm = () => {
    !editCompany ? setEditCompany(true) : setEditCompany(false);
  };

  return (
    <div className='target-items'>
      <div className={!editCompany ? "show-info" : "hide-form"}>
        <div className='target-heading'>
          <Link to={`/${props.target.id}`}>
            {imgUrl ? <img src={imgUrl} alt='Company Logo'></img> : null}
            <h2>{name}</h2>
          </Link>
        </div>
        <div className='target-information'>
          <p>{info}</p>
        </div>
        <p>{contact}</p>
        <Link to={`/${props.target.id}`}>
          <div>More info</div>
        </Link>
        <div
          className={
            status === "Researching"
              ? "yellow status status-box"
              : status === "Pending Approval"
              ? "blue status status-box"
              : status === "Approved"
              ? "green status status-box"
              : status === "Declined"
              ? "red status status-box"
              : null
          }
        >
          <strong className='status'>{status}</strong>
        </div>
      </div>

      <div className={editCompany ? "show-form" : "hide-form"}>
        <form onSubmit={(e) => editCurrentTarget(e)} className='form-content'>
          {imgUrl ? (
            <div className='image-container'>
              <img src={imgUrl} alt='Company Logo' className='form-image'></img>
            </div>
          ) : null}
          <label>Name</label>
          <input
            type='text'
            autoFocus
            placeholder='name'
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          ></input>
          <label>Company Information</label>
          <textarea
            type='text'
            rows='5'
            cols='50'
            placeholder='information'
            value={newInfo}
            onChange={(e) => setNewInfo(e.target.value)}
          ></textarea>
          <label>Contact</label>
          <input
            type='text'
            placeholder='contact'
            value={newContact}
            onChange={(e) => setNewContact(e.target.value)}
          ></input>
          <div className=''>
            <label>Status</label>
            <select
              value={status}
              onChange={handleStatusChange}
              className={
                status === "Researching"
                  ? "yellow status status-selector"
                  : status === "Pending Approval"
                  ? "blue status status-selector"
                  : status === "Approved"
                  ? "green status status-selector"
                  : status === "Declined"
                  ? "red status status-selector"
                  : null
              }
            >
              <option value='Researching'>Researching</option>
              <option value='Pending Approval'>Pending Approval</option>
              <option value='Approved'>Approved</option>
              <option value='Declined'>Declined</option>
            </select>
          </div>
          <button onClick={toggleForm} className='save-button'>
            Save
          </button>
        </form>
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
