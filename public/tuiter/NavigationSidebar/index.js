import NavigationSidebarItem from "./NavigationSidebarItem.js";
import navItems from "./navItems.js";

const NavigationSidebar = (active) => {
  return(`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i></a>
     ${
        navItems.map(navItem => {
          return (NavigationSidebarItem(navItem, active === navItem.title ? "active" : ""));
        }).join("")
     }
   </div>
   <div class="d-grid mt-2">
     <a href="../tuit.html"
        class="btn btn-primary btn-block rounded-pill">
        Tuit</a>
   </div>
 `);
}
export default NavigationSidebar;