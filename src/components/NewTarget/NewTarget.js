import { useState } from "react";
import "./new-target.css";

const NewTarget = (props) => {
  const [newId] = useState((props.targets.length + 1).toString());
  const [imgUrl, setImgUrl] = useState("");
  const [name, setName] = useState("");
  const [info, setInfo] = useState("");
  const [contact, setContact] = useState("");
  const [status, setStatus] = useState("");
  const [location, setLocation] = useState("");
  const [revenue, setRevenue] = useState("");
  const [funding, setFunding] = useState("");
  const [size, setSize] = useState("");

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
      <h2>Create new target</h2>
      <form
        onSubmit={(e) =>
          props.addNewTarget(
            e,
            {
              id: newId,
              img_url: imgUrl,
              name: name,
              info: info,
              status: status,
              contact: contact,
              location: location,
              revenue: revenue,
              funding: funding,
              size: size,
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
        <input
          type='url'
          placeholder='image url'
          value={imgUrl}
          onChange={(e) => setImgUrl(e.target.value)}
        ></input>
        <textarea
          type='text'
          placeholder='synopsis'
          value={info}
          onChange={(e) => setInfo(e.target.value)}
        ></textarea>
        <input
          type='text'
          placeholder='contact'
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        ></input>
        <input
          type='text'
          placeholder='location (separated by commas)'
          value={location}
          onChange={(e) => setLocation(e.target.value.split(","))}
        ></input>
        <input
          type='text'
          placeholder='revenue'
          value={revenue}
          onChange={(e) => setRevenue(e.target.value)}
        ></input>
        <input
          type='text'
          placeholder='funding'
          value={funding}
          onChange={(e) => setFunding(e.target.value)}
        ></input>
        <input
          type='text'
          placeholder='company size'
          value={size}
          onChange={(e) => setSize(e.target.value)}
        ></input>
        <div className='status'>
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
            <option value='' disabled defaultValue>
              status
            </option>
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
