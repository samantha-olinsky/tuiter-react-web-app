import React from "react";
import {useDispatch, useSelector} from "react-redux";
import "./index.css"
import {Link} from "react-router-dom";

const ProfileComponent = () => {
  const profileInfo = useSelector(state => state.profile)
  const dispatch = useDispatch();
  return(
      <div className="container border-start border-end ps-0 pe-0">
        <div className="row">
          <Link className="col-2 text-center mt-auto mb-auto text-dark" to="/tuiter/"><i className="fa fa-arrow-left"/></Link>
          <div className="col-8">
            <h4>{profileInfo.name}</h4>
            <p>{profileInfo.total_tuits.toLocaleString()} Tuits</p>
          </div>
        </div>
        <div className="wd-profile-images-div">
          <img className="w-100" src={`/images/${profileInfo.bannerPicture}`}/>
          <img className="wd-profile-picture" src={`/images/${profileInfo.profilePicture}`}/>
          <button className="btn btn-outline-secondary rounded-pill float-end m-3"><span className="fw-bold">Edit Profile</span></button>
        </div>
        <div className="w-100 p-3">
          <div>
            <h4 className="fw-bolder mb-0">{profileInfo.name}</h4>
            <p className="text-secondary fw-semibold">{profileInfo.handle}</p>
          </div>
          <p className="">{profileInfo.bio}</p>
          <div className="text-secondary">
            <span className="me-3"><span className="pe-2"><i className="fa fa-location-dot"/></span><p className="d-inline-block">{profileInfo.location}</p></span>
            <span className="me-3"><span className="pe-2"><i className="fa fa-cake-candles"/></span><p className="d-inline-block">Born {profileInfo.dateOfBirth}</p></span>
            <span><span className="pe-2"><i className="fa fa-calendar"/></span><p className="d-inline-block">Joined {profileInfo.dateJoined}</p></span>
          </div>
          <div>
            <span className="me-4"><span className="fw-bold">{profileInfo.followingCount}</span><span className="text-secondary"> Following</span></span>
            <span><span className="fw-bold">{profileInfo.followersCount}</span><span className="text-secondary"> Followers</span></span>
          </div>
        </div>
      </div>
  );
};
export default ProfileComponent;