import { useState, useEffect } from "react";
import "./target-info.css";

const TargetInfo = ({ targets, match }) => {
  //   const [id, setId] = useState(props.target.id);
  //   const [imgUrl, setImgUrl] = useState(props.target.img_url);
  const [target, setTarget] = useState("");
  //   const [info, setInfo] = useState(props.target.info);
  //   const [contact, setContact] = useState(props.target.contact);
  //   const [status, setStatus] = useState(props.target.status);

  useEffect(() => {
    console.log(targets);
    setTarget(targets.filter((t) => match.params.id == t.id));
    console.log(match.params.id);
    if (target) {
      console.log("target", target);
    }
  }, []);
  return (
    <div className='target-info'>
      <p>Whats happening here</p>
      {target ? (
        <div>
          <p className='name'>{target[0].name}</p>
          <p className='name'>{target[0].info}</p>
          <img src={target[0].img_url}></img>{" "}
        </div>
      ) : (
        <p className='name'>Nothings happening here</p>
      )}
    </div>
  );
};

export default TargetInfo;
