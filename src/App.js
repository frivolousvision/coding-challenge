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
    setTargets((prevTargets) => prevTargets.concat(target));
  };

  const editTarget = (e, targetId, newName, newInfo, newContact, newStatus) => {
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

  useEffect(() => {
    setTargets(data);
  }, []);

  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route
            path='/'
            exact
            component={() => (
              <Fragment>
                <TargetList
                  deleteTarget={deleteTarget}
                  targets={targets}
                  addNewTarget={addNewTarget}
                  editTarget={editTarget}
                />
                <NewTarget addNewTarget={addNewTarget} />
              </Fragment>
            )}
          />
          <Route
            path='/:id'
            exact
            component={(props) => <TargetInfo {...props} targets={targets} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
