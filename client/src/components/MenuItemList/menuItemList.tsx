import './menuItemList.css';
type dish = { title: string, description: string, price: number };
type Menu = {
  menu: {
  Dishes: dish[];
  createdAt: string;
  id: number;
  title: string;
  updatedAt: string}
};



const MenuItemList: React.FC<Menu> = ({menu}) => {
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
