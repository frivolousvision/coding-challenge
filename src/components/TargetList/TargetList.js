import TargetItem from "../TargetItem/TargetItem";
import "./target-list.css";

const TargetList = (props) => {
  return (
    <div className='target-list'>
      {props.targets.map((target) => (
        <TargetItem
          target={target}
          key={target.id}
          deleteTarget={props.deleteTarget}
        />
      ))}
    </div>
  );
};
export default TargetList;
