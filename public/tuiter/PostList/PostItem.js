import PostItemCard from "./PostItemCard.js";
import PostItemImage from "./PostItemImage.js";

const PostItem = (post) => {
  return(`
      <li class="list-group-item bg-black d-flex flex-row w-100">
          <img class="rounded-5 me-3 avatar-img mt-1" src="../../images/${post.avatarIcon}"/>
          <div class="flex-column flex-fill">
              <p><span class="fw-bold">${post.authorName} </span><i class="fa fa-check-circle"></i> <span class="text-secondary">@${post.handle} • ${post.time}</span></p>
              <p>${post.text}</p>
              ${'image' in post ? PostItemImage(post.image) : PostItemCard(post.card)}
          </div>
      </li>
  `);
}

export default PostItem;