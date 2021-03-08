import './menuItemList.css';


function MenuItemList ({ menu }) {
  console.log('menu -> ', menu);
  return (
    <div className='menuItemList'>
      <p>{menu.title}</p>
    </div>
  )
}


export default MenuItemList;