const PostSummaryItem = (post) => {
  return(`
      <li class="list-group-item">
        <img class="float-end rounded-3 ms-3 post-summary-image" src="../../images/${post.image}"/>
        <p class="text-secondary fw-semibold">${post.topic}</p>
        <p><span class="fw-bold">${post.userName} </span><i class="fa fa-check-circle"></i> <span class="text-secondary">- ${post.time}</span></p>
        <p class="fw-bold">${post.title}</p>
      </li>
  `);
}

export default PostSummaryItem;