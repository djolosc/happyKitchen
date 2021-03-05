
import MenuItem from '../MenuItem/menuItem'

function MenuList ({ menus }) {
  return (
    <div className='menuList'>
      {menus.map(menu =>
        <MenuItem key={menu.id} menu={menu} />
      )}
    </div>
  )
}

export default MenuList;