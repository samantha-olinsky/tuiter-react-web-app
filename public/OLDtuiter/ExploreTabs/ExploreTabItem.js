const ExploreTabItem = (tab) => {
  return(`
      <li class="nav-item">
         <a class="nav-link ${tab.status}" href="../${tab.link}">${tab.title}</a>
      </li>
  `);
}

export default ExploreTabItem;