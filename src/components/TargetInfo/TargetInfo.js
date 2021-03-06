import { useState, useEffect } from "react";
import { Redirect, Link } from "react-router-dom";
import "./target-info.css";
import { classNameSelector } from "../../util/classNameSelector";

const TargetInfo = ({ targets, match, deleteTarget, editTarget }, props) => {
  const [target, setTarget] = useState(targets || "");
  const [redirect, setRedirect] = useState(false);
  const [editCompanyInfo, setEditCompanyInfo] = useState(false);
  const [nextId, setNextId] = useState(null);
  const [previousId, setPreviousId] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const filterdTarget = targets.find((t) => {
      return match.params.id === t.id;
    });
    setTarget(filterdTarget);

    const getNextId = () => {
      if (targets) {
        const currentIndex = targets.findIndex((t) => match.params.id === t.id);
        if (currentIndex + 1 < targets.length && currentIndex !== -1) {
          const nextIndex =
            targets.findIndex((t) => match.params.id === t.id) + 1;
          setNextId(targets[nextIndex].id);
        } else {
          setNextId(null);
        }
      }
    };
    const getPreviousId = () => {
      if (targets) {
        const currentIndex = targets.findIndex((t) => match.params.id === t.id);
        if (currentIndex !== 0 && currentIndex !== -1) {
          const prevIndex =
            targets.findIndex((t) => match.params.id === t.id) - 1;
          setPreviousId(targets[prevIndex].id);
        } else {
          setPreviousId(null);
        }
      }
    };
    getNextId();
    getPreviousId();
  }, [targets, match.params]);

  const toggleForm = () => {
    !editCompanyInfo ? setEditCompanyInfo(true) : setEditCompanyInfo(false);
  };

  return (
    <div className='target-info'>
      <div
        className={previousId ? "next-previous-buttons" : "next-button-only"}
      >
        {previousId > 0 ? (
          <Link to={`/${previousId.toString()}`}>
            <button>Previous Target</button>
          </Link>
        ) : null}
        {nextId ? (
          <Link to={`/${nextId.toString()}`}>
            <button>Next Target</button>
          </Link>
        ) : null}
      </div>
      <div className={!editCompanyInfo ? "target-info" : "hide-target-info"}>
        {target ? (
          <div>
            {target.img_url ? (
              <img
                src={target.img_url}
                alt='Company Logo'
                className='company-logo'
              ></img>
            ) : (
              <p>No image available</p>
            )}
            {target.name ? (
              <h2 className='name'>{target.name}</h2>
            ) : (
              <p>No information available</p>
            )}
            <p className='summary'>{target.info}</p>
            <div className='target-details'>
              <div className='details-content contact'>
                <strong>Contact Info:</strong>
                {target.contact ? (
                  <a href={`mailto:${target.contact}`}>{target.contact}</a>
                ) : (
                  <p>No information available</p>
                )}
              </div>
              <div className='details-content'>
                {target.location && target.location.length > 1 ? (
                  <strong>Locations:</strong>
                ) : (
                  <strong>Location:</strong>
                )}

                {!target.location ? (
                  <p>No information available</p>
                ) : Array.isArray(target.location) ? (
                  target.location.map((city, i) => {
                    return <p key={i}>{city}</p>;
                  })
                ) : (
                  <p>{target.location}</p>
                )}
              </div>
              <div className='details-content'>
                <strong>Yearly Revenue:</strong>
                {target.revenue ? (
                  <p>${target.revenue}</p>
                ) : (
                  <p>No information available</p>
                )}
              </div>
              <div className='details-content'>
                <strong>Total Funding:</strong>
                {target.funding ? (
                  <p>${target.funding}</p>
                ) : (
                  <p>No information available</p>
                )}
              </div>
              <div className='details-content'>
                <strong>Company size:</strong>
                {target.size ? (
                  <p>{target.size} people</p>
                ) : (
                  <p>No information available</p>
                )}
              </div>
              <div className='details-content'>
                <strong>Status:</strong>
                {target.status ? (
                  <p className={classNameSelector(target.status)}>
                    {target.status}
                  </p>
                ) : (
                  <p>No status provided</p>
                )}
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
            onSubmit={(e) => editTarget(e, target)}
            className='form-content'
          >
            {target ? (
              <div className='image-container'>
                <img
                  src={target.img_url}
                  alt='Company Logo'
                  className='form-image'
                ></img>
              </div>
            ) : null}
            <label>Image URL</label>
            <input
              type='text'
              autoFocus
              placeholder='image url'
              value={target ? target.img_url : "no information provided"}
              onChange={(e) =>
                setTarget({ ...target, img_url: e.target.value })
              }
              className='form-input'
            ></input>
            <label>Name</label>
            <input
              type='text'
              autoFocus
              placeholder='name'
              value={target ? target.name : "no information provided"}
              onChange={(e) => setTarget({ ...target, name: e.target.value })}
              className='form-input'
            ></input>
            <label>Company Info</label>
            <textarea
              type='text'
              rows='5'
              cols='50'
              placeholder='information'
              value={target ? target.info : "no information provided"}
              onChange={(e) => setTarget({ ...target, info: e.target.value })}
              className='form-input'
            ></textarea>
            <label>Contact</label>
            <input
              type='text'
              placeholder='email'
              value={target ? target.contact : "no information provided"}
              onChange={(e) =>
                setTarget({ ...target, contact: e.target.value })
              }
              className='form-input'
            ></input>
            <label>Location</label>
            <span className='comma-directions'>
              (separate locations by commmas)
            </span>
            <input
              type='text'
              placeholder='location'
              value={target ? target.location : "no information provided"}
              onChange={(e) =>
                setTarget({ ...target, location: e.target.value.split(",") })
              }
              className='form-input'
            ></input>
            <label>Revenue</label>
            <input
              type='text'
              placeholder='revenue'
              value={target ? target.revenue : "no information provided"}
              onChange={(e) =>
                setTarget({ ...target, revenue: e.target.value })
              }
              className='form-input'
            ></input>
            <label>Funding</label>
            <input
              type='text'
              placeholder='funding'
              value={target ? target.funding : "no information provided"}
              onChange={(e) =>
                setTarget({ ...target, funding: e.target.value })
              }
              className='form-input'
            ></input>
            <label>Company Size</label>
            <input
              type='text'
              placeholder='company size'
              value={target ? target.size : "no information provided"}
              onChange={(e) => setTarget({ ...target, size: e.target.value })}
              className='form-input'
            ></input>
            <div className=''>
              <label>Status</label>
              <select
                required
                value={target ? target.status : "no information provided"}
                onChange={(e) =>
                  setTarget({ ...target, status: e.target.value })
                }
                className={classNameSelector(target ? target.status : null)}
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
      <div className='edit-delete-button'>
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
            setTimeout(() => deleteTarget(target.id), 500);
          }}
          className='delete-target-button'
        >
          Delete Target
        </button>
      </div>
    </div>
  );
};

export default TargetInfo;
