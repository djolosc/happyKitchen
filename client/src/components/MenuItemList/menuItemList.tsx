import './menuItemList.css';
import {FunctionComponent} from 'react'

type dish = { title: string, description: string, price: number };
type Menu = {
  Dishes: dish[];
  createdAt: string;
  id: number;
  title: string;
  updatedAt: string
};

type props = {
  menu:Menu;
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
