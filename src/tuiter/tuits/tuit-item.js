import React from "react";
import {useDispatch} from "react-redux";
import {deleteTuit} from "./tuits-reducer";
import TuitStats from "./tuit-stats";

const TuitItem = ({tuitItem}) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  }
  return (
      <li className="list-group-item d-flex flex-row w-100">
        <img className="me-3 avatar-img mt-1" src={`/images/${tuitItem.image}`}/>
        <div className="flex-column flex-fill">
          <i className="bi bi-x-lg float-end"
             onClick={() => deleteTuitHandler(tuitItem._id)}/>
          <p className="mb-0">
            <span className="fw-bold">{tuitItem.userName} </span>
            <i className="fa fa-check-circle"/> <span className="text-secondary">{tuitItem.handle} • {tuitItem.time}</span>
          </p>
          <p>{tuitItem.tuit}</p>
          <TuitStats tuitItem={tuitItem}/>
        </div>
      </li>
  )
};

export default TuitItem;