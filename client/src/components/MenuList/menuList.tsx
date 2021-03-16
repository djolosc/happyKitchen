import MenuItemList from '../MenuItemList/menuItemList'
import { FunctionComponent } from 'react';

type menu = {
  id: string;
  title: string;
  description: string;
  image: null;
  createdAt: string;
  updatedAt: string;
  price: number;
}
type menuListProps = {
  menus: menu[]
}

const MenuList: FunctionComponent<menuListProps> = ({menus}) => {
  return (
      <div data-testid="menuList" className='menuList'>
          {menus.map((menu) => {
          return <MenuItemList key={menu.id} menu={menu} />
        })}
    </div>
  )
}

export default MenuList;
