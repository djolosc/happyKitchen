import MenuItemList from '../MenuItemList/menuItemList'
import { FunctionComponent } from 'react';

type dish = {
  id: string;
  title: string;
  description: string;
  image: null;
  createdAt: string;
  updatedAt: string;
  price: number;
}

type menu = {
  id: number;
  title: string;
  description: string;
  image: null;
  createdAt: string;
  updatedAt: string;
  price: number;
  Dishes: dish[];
}
type menuListProps = {
  menus: menu[]
}

const MenuList: FunctionComponent<menuListProps> = ({menus}) => {
  if (!menus) {
    return (
      <div><p>No menues, yet</p></div>
      
    )
  } else 
  return (
      <div data-testid="menuList" className='menuList'>
          {menus.map((menu) => {
          return <MenuItemList key={menu.id} menu={menu} />
        })}
    </div>
  )
}

export default MenuList;
