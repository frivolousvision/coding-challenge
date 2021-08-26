import { useState } from "react";
const EditTargetForm = (props) => {
  const [id] = useState(props.target.id);
  const [imgUrl] = useState(props.target.img_url);
  const [newName, setNewName] = useState(props.target.name);
  const [newInfo, setNewInfo] = useState(props.target.info);
  const [newContact, setNewContact] = useState(props.target.contact);
  const [newStatus, setNewStatus] = useState(props.target.status);

  return (
    <div>
      <form
        onSubmit={(e) =>
          props.editTargetFromHome(
            e,
            id,
            newName,
            newInfo,
            newContact,
            newStatus
          )
        }
        className='form-content'
      >
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
          className='form-input'
        ></input>
        <label>Company Information</label>
        <textarea
          type='text'
          rows='5'
          cols='50'
          placeholder='information'
          value={newInfo}
          onChange={(e) => setNewInfo(e.target.value)}
          className='form-input'
        ></textarea>
        <label>Contact</label>
        <input
          type='text'
          placeholder='contact'
          value={newContact}
          onChange={(e) => setNewContact(e.target.value)}
          className='form-input'
        ></input>
        <div className=''>
          <label>Status</label>
          <select
            value={newStatus}
            onChange={(e) => setNewStatus(e.target.value)}
            className={
              newStatus === "Researching"
                ? "yellow status status-selector"
                : newStatus === "Pending Approval"
                ? "blue status status-selector"
                : newStatus === "Approved"
                ? "green status status-selector"
                : newStatus === "Declined"
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
        <button onClick={props.toggleForm} className='save-button'>
          Save
        </button>
      </form>
    </div>
  );
};

export default EditTargetForm;
