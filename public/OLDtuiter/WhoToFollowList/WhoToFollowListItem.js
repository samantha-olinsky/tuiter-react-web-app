const WhoToFollowListItem = (who) => {
  return(`
    <li class="list-group-item align-items-center d-flex flex-row w-100">
          <img class="rounded-5 me-3 avatar-img" src="../../images/${who.avatarIcon}"/>
          <div class="flex-column flex-fill">
            <p class="align-items-center"><span class="fw-bold">${who.userName} </span><i class="fa fa-check-circle"> </i></p>
            <p>@${who.handle}</p>
          </div>
          <button class="btn btn-primary rounded-5 ms-auto" type="button">Follow</button>
        </li>
  `);
}
export default WhoToFollowListItem;