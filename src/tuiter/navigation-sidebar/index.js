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
          Home
        </Link>
        <Link to="/tuiter/explore" className={`list-group-item
                    ${active === 'explore'?'active':''}`}>
          <span className="wd-nav-icon"><i className="fa fa-hashtag"/></span>
          Explore
        </Link>
        <Link to="/" className={`list-group-item
                    ${active === 'more'?'active':''}`}>
          <span className="wd-nav-icon"><i className="fa fa-asterisk"/></span>
          Labs
        </Link>
        <Link to="#" className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
          <span className="wd-nav-icon"><i className="fa fa-bell"/></span>
          Notifications
        </Link>
        <Link to="#" className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
          <span className="wd-nav-icon"><i className="fa fa-envelope"/></span>
          Messages
        </Link>
        <Link to="#" className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
          <span className="wd-nav-icon"><i className="fa fa-bookmark"/></span>
          Bookmarks
        </Link>
        <Link to="#" className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
          <span className="wd-nav-icon"><i className="fa fa-list"/></span>
          Lists
        </Link>
        <Link to="#" className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
          <span className="wd-nav-icon"><i className="fa fa-user"/></span>
          Profile
        </Link>
        <Link to="#" className={`list-group-item
                    ${active === 'more'?'active':''}`}>
          <span className="wd-nav-icon"><i className="fa fa-ellipsis-h"/></span>
          More
        </Link>
      </div>
  );
};
export default NavigationSidebar;