const NavigationSidebarItem = (navItem, status) => {
  return(`
      <a class="list-group-item ${status}" href="${navItem.link}">
       <i class="fa ${navItem.faicon}"></i> ${navItem.title}</a>
  `);
}

export default NavigationSidebarItem;