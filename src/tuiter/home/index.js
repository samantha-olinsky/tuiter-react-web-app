import React from "react";
import PostItem from "./PostItem.js";
import posts from "./posts.js";
import "./index.css";

const HomeComponent = () => {
  return(
    <ul className="list-group">
        {
            posts.map(post =>
              <PostItem key={post._id} post={post}/> )
        }
    </ul>
  );
}
export default HomeComponent;