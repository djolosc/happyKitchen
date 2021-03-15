import './menuItemById.css';
import { useParams } from 'react-router-dom';

type dish = { title: string, description: string, price: number };

type Menu = {
  id: string; title: string; createdAt: string; updatedAt: string; Dishes: dish[];
}

type Menus = {
  menus: Menu[]};


const MenuItemById: React.FC<Menus> = ({menus}) => {

  
  let { id } : {id: string} = useParams();

  const selectedMenu = () => {
    if (menus && menus.length > 0) {
      return menus.find((menu: Menu) => parseInt(menu.id) === parseInt(id));
    } 
  };

  let menu: Menu | undefined = selectedMenu();
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
