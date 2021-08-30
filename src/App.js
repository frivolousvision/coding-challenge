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

  const editTarget = (e, targetObject) => {
    e.preventDefault();
    try {
      setTargets(
        targets.map((t) => {
          if (t.id !== targetObject.id) return t;
          return {
            ...t,
            img_url: targetObject.img_url,
            name: targetObject.name,
            info: targetObject.info,
            contact: targetObject.contact,
            status: targetObject.status,
            location: targetObject.location,
            revenue: targetObject.revenue,
            funding: targetObject.funding,
            size: targetObject.size,
          };
        })
      );
    } catch (err) {
      console.error(err.message);
    }
  };

  const editTargetFromHome = (e, targetObject) => {
    e.preventDefault();
    setTargets(
      targets.map((t) => {
        if (t.id !== targetObject.id) return t;
        return {
          ...t,
          name: targetObject.name,
          info: targetObject.info,
          contact: targetObject.contact,
          status: targetObject.status,
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
  // const filterTargets = (filter) => {
  // setTargets(data.filter((t) => t.status === filter));
  // };

  useEffect(() => {
    setTargets(data);
    // if(targets !== undefined)
    // localStorage.setItem('object', JSON.stringify(targets))
  }, []);

  return (
    <div className='App'>
      <Router>
        <Header targets={targets} />
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
