import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState, useEffect, Fragment } from "react";

//Data
import { data } from "./lib/data";

//Components
import Header from "./components/Header/Header";
import TargetList from "./components/TargetList/TargetList";
import NewTarget from "./components/NewTarget/NewTarget";
import TargetInfo from "./components/TargetInfo/TargetInfo";

function App() {
  const [targets, setTargets] = useState([]);

  const addNewTarget = (e, target) => {
    e.preventDefault();
    setTargets((targets) => targets.concat(target));
  };

  const editTarget = (
    e,
    targetId,
    newName,
    newInfo,
    newContact,
    newStatus,
    newLocation,
    newRevenue,
    newFunding,
    newSize
  ) => {
    e.preventDefault();
    setTargets(
      targets.map((t) => {
        if (t.id !== targetId) return t;
        return {
          ...t,
          name: newName,
          info: newInfo,
          contact: newContact,
          status: newStatus,
          location: newLocation,
          revenue: newRevenue,
          funding: newFunding,
          size: newSize,
        };
      })
    );
  };

  const editTargetFromHome = (
    e,
    targetId,
    newName,
    newInfo,
    newContact,
    newStatus
  ) => {
    e.preventDefault();
    setTargets(
      targets.map((t) => {
        if (t.id !== targetId) return t;
        return {
          ...t,
          name: newName,
          info: newInfo,
          contact: newContact,
          status: newStatus,
        };
      })
    );
  };

  const deleteTarget = (id) => {
    let answer = window.confirm("Are you sure want to delete this target?");
    if (answer === true) {
      setTargets(targets.filter((t) => t.id !== id));
    }
    if (answer === false) {
      return;
    }
  };
  const filterTargets = (filter) => {
    setTargets(data.filter((t) => t.status === filter));
  };
  const showAll = () => {
    setTargets(data);
  };

  useEffect(() => {
    setTargets(data);
  }, []);

  return (
    <div className='App'>
      <Router>
        <Header filterTargets={filterTargets} />
        <Switch>
          <Route
            path='/'
            exact
            component={() => (
              <Fragment>
                <TargetList
                  targets={targets}
                  deleteTarget={deleteTarget}
                  addNewTarget={addNewTarget}
                  editTargetFromHome={editTargetFromHome}
                />
                <NewTarget addNewTarget={addNewTarget} targets={targets} />
              </Fragment>
            )}
          />
          <Route
            path='/:id'
            exact
            component={(props) => (
              <TargetInfo
                {...props}
                targets={targets}
                deleteTarget={deleteTarget}
                editTarget={editTarget}
              />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
