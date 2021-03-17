import './menuItemById.css';
import { useParams } from 'react-router-dom';
import {FunctionComponent} from 'react';
type dish = { title: string, description: string, price: number };

type menu = {
  id: string;
  title: string;
  description: string;
  image: null;
  createdAt: string;
  updatedAt: string;
  price: number;
  Dishes: dish[];
}

type props = {
  menus: menu[]};


const MenuItemById: FunctionComponent<props> = ({menus}) => {

  
  let { id } : {id: string} = useParams();

  const selectedMenu = () => {
    if (menus && menus.length > 0) {
      return menus.find((menu) => parseInt(menu.id) === parseInt(id));
    } 
  };

  let menu: menu | undefined = selectedMenu();
  if (!menu) {
    return <div><p>NO MENU!</p></div>
  } else
  return (
    <div className="menuItemById">
      {menus && menus.length > 0 && (
        <>
          <h2>ID: {id}</h2>
          <h2>{menu.title}</h2>
          {menu.Dishes.map((dish) => (
            <div>
              <p>{dish.title}</p>
              <p>{dish.description}</p>
              <p>{dish.price}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default MenuItemById;
