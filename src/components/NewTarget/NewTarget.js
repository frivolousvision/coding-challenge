import { useState } from "react";
import "./new-target.css";
import { classNameSelector } from "../../util/classNameSelector";

const NewTarget = (props) => {
  const [newTarget, setNewTarget] = useState({
    id: (props.targets.length + 1).toString(),
  });

  const clearData = () => {
    setNewTarget("");
  };

  return (
    <div className='new-target-form-container'>
      <h2>Create new target</h2>
      <form onSubmit={(e) => props.addNewTarget(e, newTarget, clearData())}>
        <input
          type='text'
          placeholder='name'
          value={newTarget.name || ""}
          onChange={(e) => setNewTarget({ ...newTarget, name: e.target.value })}
        ></input>
        <input
          type='text'
          placeholder='image url'
          value={newTarget.img_url || ""}
          onChange={(e) =>
            setNewTarget({ ...newTarget, img_url: e.target.value })
          }
        ></input>
        <textarea
          type='text'
          placeholder='information'
          value={newTarget.info || ""}
          onChange={(e) => setNewTarget({ ...newTarget, info: e.target.value })}
        ></textarea>
        <input
          type='text'
          placeholder='contact'
          value={newTarget.contact || ""}
          onChange={(e) =>
            setNewTarget({ ...newTarget, contact: e.target.value })
          }
        ></input>
        <input
          type='text'
          placeholder='location (separated by commas)'
          value={newTarget.location || ""}
          onChange={(e) =>
            setNewTarget({ ...newTarget, location: e.target.value.split(",") })
          }
        ></input>
        <input
          type='text'
          placeholder='revenue'
          value={newTarget.revenue || ""}
          onChange={(e) =>
            setNewTarget({ ...newTarget, revenue: e.target.value })
          }
        ></input>
        <input
          type='text'
          placeholder='funding'
          value={newTarget.funding || ""}
          onChange={(e) =>
            setNewTarget({ ...newTarget, funding: e.target.value })
          }
        ></input>
        <input
          type='text'
          placeholder='company size'
          value={newTarget.size || ""}
          onChange={(e) => setNewTarget({ ...newTarget, size: e.target.value })}
        ></input>
        <div className='status'>
          <select
            value={newTarget.status || ""}
            onChange={(e) =>
              setNewTarget({ ...newTarget, status: e.target.value })
            }
            className={classNameSelector(newTarget.status)}
          >
            <option disabled defaultValue>
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
