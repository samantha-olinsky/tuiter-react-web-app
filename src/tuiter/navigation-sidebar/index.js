import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import "./index.css";

const NavigationSidebar = () => {
  const {pathname} = useLocation();
  const paths = pathname.split('/')
  const active = paths[2];
  return (
      <div className="list-group">
        <span className="list-group-item">Tuiter</span>
        <Link to="/tuiter/" className={`list-group-item
                    ${active === ""?'active':''}`}>
          <span className="wd-nav-icon"><i className="fa fa-home"/></span>
          <span className="d-xl-inline d-none ">Home</span>
        </Link>
        <Link to="/tuiter/explore" className={`list-group-item
                    ${active === 'explore'?'active':''}`}>
          <span className="wd-nav-icon"><i className="fa fa-hashtag"/></span>
          <span className="d-xl-inline d-none ">Explore</span>
        </Link>
        <Link to="/" className={`list-group-item
                    ${active === 'more'?'active':''}`}>
          <span className="wd-nav-icon"><i className="fa fa-asterisk"/></span>
          <span className="d-xl-inline d-none ">Labs</span>
        </Link>
        <Link to="#" className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
          <span className="wd-nav-icon"><i className="fa fa-bell"/></span>
          <span className="d-xl-inline d-none ">Notifications</span>
        </Link>
        <Link to="#" className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
          <span className="wd-nav-icon"><i className="fa fa-envelope"/></span>
          <span className="d-xl-inline d-none ">Messages</span>
        </Link>
        <Link to="#" className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
          <span className="wd-nav-icon"><i className="fa fa-bookmark"/></span>
          <span className="d-xl-inline d-none ">Bookmarks</span>
        </Link>
        <Link to="#" className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
          <span className="wd-nav-icon"><i className="fa fa-list"/></span>
          <span className="d-xl-inline d-none ">Lists</span>
        </Link>
        <Link to="/tuiter/profile" className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
          <span className="wd-nav-icon"><i className="fa fa-user"/></span>
          <span className="d-xl-inline d-none ">Profile</span>
        </Link>
        <Link to="#" className={`list-group-item
                    ${active === 'more'?'active':''}`}>
          <span className="wd-nav-icon"><i className="fa fa-ellipsis-h"/></span>
          <span className="d-xl-inline d-none ">More</span>
        </Link>
      </div>
  );
};
export default NavigationSidebar;