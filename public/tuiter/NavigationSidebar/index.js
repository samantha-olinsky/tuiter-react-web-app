const NavigationSidebar = () => {
  return(`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i></a>
     <a class="list-group-item" href="../home.html">
       <i class="fa fa-home"></i> Home</a>
     <a class="list-group-item active" href="/">
       <i class="fa fa-hashtag"></i> Explore</a>
     <a class="list-group-item" href="/">
       <i class="fa fa-bell"></i> Notifications</a>
     <a class="list-group-item" href="/">
       <i class="fa fa-envelope"></i> Messages</a>
     <a class="list-group-item" href="../bookmarks/index.html">
       <i class="fa fa-bookmark"></i> Bookmarks</a>
     <a class="list-group-item" href="/">
       <i class="fa fa-list"></i> List</a>
     <a class="list-group-item" href="../profile.html">
       <i class="fa fa-user"></i> Profile</a>
     <a class="list-group-item" href="/">
       <i class="fa fa-circle"></i> More</a>
   </div>
   <div class="d-grid mt-2">
     <a href="../tuit.html"
        class="btn btn-primary btn-block rounded-pill">
        Tuit</a>
   </div>
 `);
}
export default NavigationSidebar;