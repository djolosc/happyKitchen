import './menuItemList.css';
import {FunctionComponent} from 'react'

type dish = { title: string, description: string, price: number };
type menu = {
  Dishes: dish[];
  createdAt: string;
  id: string;
  title: string;
  updatedAt: string
};

type props = {
  menu:menu;
}


const MenuItemList: FunctionComponent<props> = ({menu}) => {
  console.log('menu -> ', menu);
  return (
    <div className="menuItemList">
      <h3>{menu.title}</h3>
      <p>
        {menu.Dishes.map((dish: dish) => (
          <p>{dish.title}</p>
        ))}
      </p>
    </div>
  );
}

export default MenuItemList;
