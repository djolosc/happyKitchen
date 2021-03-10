import './menuItemById.css';
import { useParams } from "react-router-dom";


//TODO: REPLACE ID BY TITLE
//TODO: CHECK IF CHOSENMENU IS NEEDED

function MenuItemById ({ menus }) {

  let { id } = useParams();

  const selectedMenu = () => {
    if (menus && menus.length > 0) {
      return menus.find(menu => parseInt(menu.id) === parseInt(id));
    }
  }

  let menu = selectedMenu();

  return (
    <div className='menuItemById'>
      { menus && menus.length > 0 && (
        <>
          <h2>ID: {id}</h2>
          <h2>{menu.title}</h2>
          {menu.Dishes.map(dish =>
            <div>
              <p>{dish.title}</p>
              <p>{dish.description}</p>
              <p>{dish.price}</p>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default MenuItemById;
