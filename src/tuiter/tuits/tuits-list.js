import React from "react";
import {useSelector} from "react-redux";
import TuitItem from "./tuit-item";

const TuitList = () => {
  const tuitsArray = useSelector(state => state.tuits)
  return(
      <ul className="list-group">
        {
          tuitsArray.map(tuitItem => <TuitItem tuitItem={tuitItem}/>)
        }
      </ul>
  );
};
export default TuitList;