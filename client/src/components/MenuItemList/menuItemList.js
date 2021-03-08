import './menuItemList.css';


function MenuItemList ({ menu }) {
  console.log('menu -> ', menu);
  return (
    <div className='menuItemList'>
      <h3>{menu.title}</h3>
      <p>{menu.Dishes.map(dish =>
        <p>{dish.title}</p>
      )}</p>
    </div>
  )
}


export default MenuItemList;