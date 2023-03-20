/* eslint-env jquery */
import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
import PostList from "../PostList/index.js";

function homeComponent() {
  $('#wd-home').append(`
      <div class="row mt-2">
        <div class="col-2 col-md-2 col-lg-1 col-xl-2">
          ${NavigationSidebar("Home")}
        </div>
        <div class="col-10 col-lg-7 col-xl-6">
          ${PostList()}
        
<!--          <div class="wd-post wd-border-gray">-->
<!--            <img class="avatar-img" src="../../images/avatar1.jpg"/>-->
<!--            <div class="wd-post-content">-->
<!--              <p class="wd-ellipses">...</p>-->
<!--              <p class="wd-author">Robert Zubrin</p>-->
<!--              <p class="wd-handle wd-fg-color-gray">@robert_zubrin</p>-->
<!--              <p class="wd-time wd-fg-color-gray">• Jul 31</p>-->
<!--              <p class="wd-post-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus nulla, laoreet tempus est vel, gravida feugiat eros. Maecenas molestie libero massa, a consequat elit varius ac. Morbi porta suscipit leo, at cursus mauris feugiat ut.</p>-->
<!--              <img class="wd-image wd-border-gray" src="../../images/bmpost1.jpg"/>-->
<!--              <div class="wd-image-description wd-border-gray">-->
<!--                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>-->
<!--                <p class="wd-fg-color-gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>-->
<!--                <a href="#">-->
<!--                  <i class="fa-solid fa-link wd-fg-color-gray wd-icon"></i>-->
<!--                  <p class="wd-fg-color-gray content-link">rt.com</p>-->
<!--                </a>-->
<!--              </div>-->
<!--              <div class="wd-post-actions">-->
<!--                <a href="#" class="wd-post-action">-->
<!--                  <i class="fa-regular fa-comment wd-fg-color-gray wd-icon"></i>-->
<!--                  <p class="wd-num wd-fg-color-gray">22</p>-->
<!--                </a>-->
<!--                <a href="#" class="wd-post-action">-->
<!--                  <i class="fa-solid fa-retweet wd-fg-color-gray wd-icon"></i>-->
<!--                  <p class="wd-num wd-fg-color-gray">9</p>-->
<!--                </a>-->
<!--                <a href="#" class="wd-post-action">-->
<!--                  <i class="fa-solid fa-heart wd-icon wd-fg-color-red"></i>-->
<!--                  <p class="wd-num wd-fg-color-red">37</p>-->
<!--                </a>-->
<!--                <a href="#" class="wd-post-action">-->
<!--                  <i class="fa-solid fa-arrow-up-from-bracket wd-fg-color-gray wd-icon"></i>-->
<!--                </a>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
        
        
        
        </div>
        <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
           ${PostSummaryList()}
        </div>
      </div>

   `);
}

$(homeComponent);