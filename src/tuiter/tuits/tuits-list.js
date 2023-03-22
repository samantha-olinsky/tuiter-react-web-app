import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteTuit, toggleLiked} from "./tuits-reducer";

const TuitList = () => {
  const tuitsArray = useSelector(state => state.tuits)
  const dispatch = useDispatch();
  const toggleLikedClickHandler = (tI) => {
    dispatch(toggleLiked(tI))
  }
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  }
  return(
      <ul className="list-group">
        {
          tuitsArray.map(tuitItem =>
              <li className="list-group-item d-flex flex-row w-100">
                <img className="me-3 avatar-img mt-1" src={`/images/${tuitItem.image}`}/>
                <div className="flex-column flex-fill">
                  <i className="bi bi-x-lg float-end"
                     onClick={() => deleteTuitHandler(tuitItem._id)}/>
                  <p className="mb-0"><span className="fw-bold">{tuitItem.userName} </span><i className="fa fa-check-circle"/> <span className="text-secondary">{tuitItem.handle} • {tuitItem.time}</span></p>
                  <p>{tuitItem.tuit}</p>
                  <div className="d-flex flex-row w-100 pb-2">
                    <span className="flex-fill wd-fg-color-gray">
                      <i className="fa-regular fa-comment"/>
                      <p className="d-inline ps-3">{tuitItem.replies}</p>
                    </span>
                    <span  className="flex-fill wd-fg-color-gray">
                      <i className="fa-solid fa-retweet"/>
                      <p className="d-inline ps-3">{tuitItem.retuits}</p>
                    </span>
                    <button onClick={() => toggleLikedClickHandler(tuitItem)} className="wd-fg-color-gray flex-fill bg-transparent border-0 p-0 text-start">
                      <span className={tuitItem.liked ? "wd-fg-color-red" : ""}><i className="fa-solid fa-heart"/></span>
                      <p className="d-inline ps-3">{tuitItem.likes}</p>
                    </button>
                    <span className="flex-fill wd-fg-color-gray">
                      <i className="fa-solid fa-arrow-up-from-bracket"/>
                    </span>
                  </div>
                </div>
              </li>
          )
        }
      </ul>
  );
};
export default TuitList;