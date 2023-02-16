import ExploreTabItem from "./ExploreTabItem.js";
import tabs from "./tabs.js";

const ExploreTabs = () => {
  return(`
    <ul class="nav nav-tabs mb-2">
        ${
          tabs.map(tab => {
            return (ExploreTabItem(tab));
          }).join("")
        }
    </ul>
  `);
}
export default ExploreTabs;