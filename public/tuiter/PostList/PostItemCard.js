const PostItemCard = (card) => {
  return(`
      <div class="card">
        <img class="card-img-top" src="../../images/${card.image}">
        <div class="card-body bg-body">
          <h6 class="card-title">${card.imageTitle}</h6>
          <p class="card-text wd-fg-color-gray">${card.imageCaption}</p>
          <p class="card-text wd-fg-color-gray"><i class="fa fa-link"></i>${card.imageLink}
          </p>
        </div>
      </div>
  `);
}

export default PostItemCard;
