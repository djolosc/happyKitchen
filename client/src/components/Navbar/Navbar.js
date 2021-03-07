import './Navbar.css';
import { Link } from "react-router-dom";


//TODO UPDATE CLASSNAME
//TODO UPDATE DYMANIC ID (MENU 15)
function Navbar () {
  return (
    <nav className="navbar">
      <h1>EASY KITCHEN</h1>
      <div className="links">
        <ul className="button">
          <li className="btn-home"><Link to="/">Home</Link></li>
          <li className="btn-dish"> <Link to="/add_dish">Add a dish</Link></li>
          <li className="btn-dish"> <Link to="/dish">Dishes List</Link></li>
          <li className="btn-create-menu"><Link to="/create_menu">Create a menu</Link></li>
          <li className="btn-see-menus"><Link to="/menu">See menus</Link></li>
          <li className="btn-order"><Link to="/order">See orders</Link></li>
          <li className="btn-order"><Link to="/create_order">Create orders</Link></li>

          <li className="btn-order"><Link to="/menu/15">Menu 15</Link></li>
        </ul>
      </div>
    </nav>
  )
}
export default Navbar;