import PostSummaryList from "../PostSummaryList/index.js";
import ExploreTabs from "../ExploreTabs/index.js";

const MainContent = () => {
  return(`
          <div class="w-100 d-flex mb-2 align-items-center">
            <form class="rounded-5 p-2 ps-3 bg-white d-inline-flex flex-fill align-items-center">
              <label for="search"><i class="fa fa-search"></i></label>
              <input id="search" placeholder="Search Tuiter" class="border-0 bg-transparent ms-3 me-3 w-100"/>
            </form>
            <a class="d-inline-flex ms-4" href="explore-settings.html"><i class="fa fa-solid fa-gear fa-2x link-primary"></i></a>
          </div>
          ${ExploreTabs()}
          <div class="position-relative">
            <img class="img-fluid" src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg"/>
            <span class="position-absolute start-0 bottom-0 ms-2 mb-2 text-light fw-bold h2">SpaceX's Starship</span>
          </div>
          ${PostSummaryList()}
    `);
}
export default MainContent;
