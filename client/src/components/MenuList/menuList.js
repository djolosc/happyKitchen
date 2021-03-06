
import MenuItem from '../MenuItem/menuItem'
import { useParams, BrowserRouter as Router, Route, } from "react-router-dom";



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