import './menuItemList.css';
import {FunctionComponent} from 'react'
import {menu} from '../../Types';

type props = {
  menu:menu;
}

const MenuItemList: FunctionComponent<props> = ({menu}) => {
  console.log('menu -> ', menu);
  return (
    <div className="menuItemList">
      <h3>{menu.title}</h3>
      <p>
        {menu.Dishes.map((dish) => (
          <p>{dish.title}</p>
        ))}
      </p>
    </div>
  );
}

export default MenuItemList;
