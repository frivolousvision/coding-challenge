import { useState, useEffect } from "react";
import { Redirect } from "react-router";
import "./target-info.css";

const TargetInfo = ({ targets, match, deleteTarget, editTarget }, props) => {
  const [target, setTarget] = useState(null);
  const [redirect, setRedirect] = useState(false);
  const [editCompanyInfo, setEditCompanyInfo] = useState(false);
  const [id, setId] = useState("");
  const [imgUrl] = useState("");
  const [newName, setNewName] = useState("");
  const [newInfo, setNewInfo] = useState("");
  const [newContact, setNewContact] = useState("");
  const [newStatus, setNewStatus] = useState("");
  const [newLocation, setNewLocation] = useState("");
  const [newRevenue, setNewRevenue] = useState("");
  const [newFunding, setNewFunding] = useState("");
  const [newSize, setNewSize] = useState("");

  useEffect(() => {
    setTarget(targets.filter((t) => match.params.id === t.id));

    targets.map((t) => {
      if (t.id === match.params.id) {
        setId(t.id);
        setNewName(t.name);
        setNewInfo(t.info);
        setNewContact(t.contact);
        setNewStatus(t.status);
        setNewLocation(t.location);
        setNewRevenue(t.revenue);
        setNewFunding(t.funding);
        setNewSize(t.size);
        return t;
      } else {
        return t;
      }
    });
  }, [targets, match.params]);

  const toggleForm = () => {
    !editCompanyInfo ? setEditCompanyInfo(true) : setEditCompanyInfo(false);
  };

  return (
    <div className='target-info'>
      <div className={!editCompanyInfo ? "target-info" : "hide-target-info"}>
        {target ? (
          <div>
            {target[0].img_url ? (
              <img src={target[0].img_url} alt='Company Logo'></img>
            ) : (
              <p>No information available</p>
            )}
            {target[0].name ? (
              <h2 className='name'>{target[0].name}</h2>
            ) : (
              <p>No information available</p>
            )}
            <p className='summary'>{target[0].info}</p>
            <div className='target-details'>
              <div className='details-content'>
                <strong>Status:</strong>
                <p>{target[0].status}</p>
              </div>
              <div className='details-content'>
                <strong>Contact Info:</strong>
                <p>{target[0].contact}</p>
              </div>
              <div className='details-content'>
                {target[0].location.length > 1 ? (
                  <strong>Locations:</strong>
                ) : (
                  <strong>Location:</strong>
                )}
                {target[0].location.map((city, i) => {
                  return <p key={i}>{city}</p>;
                })}
              </div>
              <div className='details-content'>
                <strong>Yearly Revenue:</strong>
                <p>${target[0].revenue}</p>
              </div>
              <div className='details-content'>
                <strong>Total Funding:</strong>
                {target[0].funding ? (
                  <p>{target[0].funding}</p>
                ) : (
                  <p>No information available</p>
                )}
              </div>
              <div className='details-content'>
                <strong>Company size:</strong>
                <p>{target[0].size} people</p>
              </div>
            </div>
          </div>
        ) : (
          <p className='name'>No company information</p>
        )}
        {redirect ? <Redirect to='/' /> : null}
      </div>

      <div className={editCompanyInfo ? "show-form" : "hide-form"}>
        <div>
          <form
            onSubmit={(e) =>
              editTarget(
                e,
                id,
                newName,
                newInfo,
                newContact,
                newStatus,
                newLocation.split(","),
                newRevenue,
                newFunding,
                newSize
              )
            }
            className='form-content'
          >
            {imgUrl ? (
              <div className='image-container'>
                <img
                  src={imgUrl}
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
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className='form-input'
            ></input>
            <label>Company Info</label>
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
            <label>Location</label>
            <span className='comma-directions'>
              (separate states by commmas)
            </span>
            <input
              type='text'
              placeholder='location'
              value={newLocation}
              onChange={(e) => setNewLocation(e.target.value)}
              className='form-input'
            ></input>
            <label>Revenue</label>
            <input
              type='text'
              placeholder='revenue'
              value={newRevenue}
              onChange={(e) => setNewRevenue(e.target.value)}
              className='form-input'
            ></input>
            <label>Funding</label>
            <input
              type='text'
              placeholder='funding'
              value={newFunding}
              onChange={(e) => setNewFunding(e.target.value)}
              className='form-input'
            ></input>
            <label>Company Size</label>
            <input
              type='text'
              placeholder='revenue'
              value={newSize}
              onChange={(e) => setNewSize(e.target.value)}
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
      </div>
      <div className='edit-delete-button-container'>
        {!editCompanyInfo ? (
          <button onClick={toggleForm} className='edit-cancel-button'>
            Edit
          </button>
        ) : (
          <button onClick={toggleForm} className='edit-cancel-button'>
            Cancel
          </button>
        )}

        <button
          onClick={() => {
            setRedirect(true);
            setTimeout(() => deleteTarget(target[0].id), 500);
          }}
        >
          Delete this target
        </button>
      </div>
    </div>
  );
};

export default TargetInfo;
