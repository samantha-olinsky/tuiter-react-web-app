import React from "react";
const PostItemCard = (card) => {
  return(
      <div className="card">
        <img className="card-img-top" src={`/images/${card.image}`}/>
        <div className="card-body bg-body">
          <h6 className="card-title">{card.imageTitle}</h6>
          <p className="card-text">{card.imageCaption}</p>
          <p className="card-text"><i className="fa fa-link"></i>{card.imageLink}
          </p>
        </div>
      </div>
  );
};

export default PostItemCard;
