import MenuItemList from '../MenuItemList/menuItemList';

function MenuList({ menus }) {
  return (
    <div data-testid="menuList" className="menuList">
      {menus.map((menu) => (
        <MenuItemList key={menu.id} menu={menu} />
      ))}
    </div>
  );
}

export default MenuList;
