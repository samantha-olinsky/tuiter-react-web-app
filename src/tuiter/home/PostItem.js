import React from "react";
import PostItemCard from "./PostItemCard.js";
import PostItemImage from "./PostItemImage.js";

const PostItem = (
    {post = {_id: 111,
      authorName: 'Elon Musk',
      handle: 'elonmusk',
      avatarIcon: 'elon.jpeg',
      time: '23h',
      text: 'Amazing show about @Inspiration4x mission!',
      card: {
        image: 'inspiration4.jpeg',
        imageTitle: 'Countdown: Inspiration4 Mission to Space | Netflix Official Site',
        imageCaption: 'From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space...',
        imageLink: 'netflix.com',},
      numComments: '4.2K',
      numRetuits: '3.5K',
      numLikes: '37.5K',}}
) => {
  return(
      <li className="list-group-item d-flex flex-row w-100">
          <img className="rounded-5 me-3 avatar-img mt-1" src={`/images/${post.avatarIcon}`}/>
          <div className="flex-column flex-fill">
              <p><span className="fw-bold">{post.authorName} </span><i className="fa fa-check-circle"></i> <span className="text-secondary">@{post.handle} • {post.time}</span></p>
              <p>{post.text}</p>
              {post.hasOwnProperty("image") ? PostItemImage(post.image) : PostItemCard(post.card)}
          </div>
      </li>
  );
};

export default PostItem;