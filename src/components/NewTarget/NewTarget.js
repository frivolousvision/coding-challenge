import { useState } from "react";
import "./new-target.css";

const NewTarget = (props) => {
  const [name, setName] = useState("");
  const [info, setInfo] = useState("");
  const [contact, setContact] = useState("");
  const [status, setStatus] = useState("");

  const handleStatusChange = (e) => {
    e.preventDefault();
    setStatus(e.target.value);
  };
  const clearData = () => {
    setName("");
    setInfo("");
    setContact("");
    setStatus("");
  };
  return (
    <div className='new-target-form-container'>
      <h3>Create new target</h3>
      <form
        onSubmit={(e) =>
          props.addNewTarget(
            e,
            {
              id: 10,
              name: name,
              info: info,
              status: status,
              contact: contact,
            },
            clearData()
          )
        }
      >
        <input
          type='text'
          placeholder='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <textarea
          type='text'
          placeholder='information'
          value={info}
          onChange={(e) => setInfo(e.target.value)}
        ></textarea>
        <input
          type='text'
          placeholder='contact'
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        ></input>
        <div className='status'>
          <p className='status-label'>status</p>
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
        <button>Submit</button>
      </form>
    </div>
  );
};

export default NewTarget;
