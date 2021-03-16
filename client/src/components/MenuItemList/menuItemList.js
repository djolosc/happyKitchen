import './menuItemList.css';

function MenuItemList({ menu }) {
  return menu.Dishes === undefined || menu.Dishes.length < 1 ? (
    <div>
      <p className="loadingText"></p>
    </div>) : (
      <div className='menuItemList'>
        <h3>{menu.title}</h3>
        <p>{menu.Dishes.map(dish =>
          <p>{dish.title}</p>
        )}</p>
      </div>
    )
}

export default MenuItemList;