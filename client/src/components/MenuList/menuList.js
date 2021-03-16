import MenuItemList from '../MenuItemList/menuItemList';

function MenuList({ menus }) {
  if (menus) {
    console.log('menus', menus);
    return (
      <div data-testid="menuList" className="menuList">
        {menus.map((menu) => (
          <MenuItemList key={menu.id} menu={menu} />
        ))}
      </div>
    );
  } else {
    return <p>HELLO</p>;
  }
}

export default MenuList;
