import { useState } from "react";
import "./edit-target-form.css";
import { classNameSelector } from "../../util/classNameSelector";

const EditTargetForm = (props) => {
  const [editTarget, setEditTarget] = useState(props.target);

  return (
    <div className='form-container'>
      <form
        onSubmit={(e) => props.editTargetFromHome(e, editTarget)}
        className='form-content'
      >
        {editTarget.img_url ? (
          <div className='image-container'>
            <img
              src={editTarget.img_url}
              alt='Company Logo'
              className='form-image'
            ></img>
          </div>
        ) : null}
        <label>Name</label>
        <input
          type='text'
          autoFocus
          placeholder='name'
          value={editTarget.name}
          onChange={(e) =>
            setEditTarget({ ...editTarget, name: e.target.value })
          }
          className='form-input'
        ></input>
        <label>Company Information</label>
        <textarea
          type='text'
          rows='5'
          cols='50'
          placeholder='company bio'
          value={editTarget.info}
          onChange={(e) =>
            setEditTarget({ ...editTarget, info: e.target.value })
          }
          className='form-input'
        ></textarea>
        <label>Contact</label>
        <input
          type='text'
          placeholder='Contact Information'
          value={editTarget.contact}
          onChange={(e) =>
            setEditTarget({ ...editTarget, contact: e.target.value })
          }
          className='form-input'
        ></input>
        <div className='status-selector-container'>
          <label>Status</label>
          <select
            value={editTarget.status}
            onChange={(e) =>
              setEditTarget({ ...editTarget, status: e.target.value })
            }
            className={classNameSelector(editTarget.status)}
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
