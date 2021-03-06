import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ApiService from './ApiService';
import DishList from './components/DishList/dishList';
import MenuList from './components/MenuList/menuList';
import OrderList from './components/OrderList/orderList';
// import Dashboard from './Containers/Dashboard/dashboard';
import Navbar from './components/Navbar/Navbar';
import DishForm from './components/DishForm/dishForm';
import MenuForm from './components/MenuForm/menuForm';
import OrderForm from './components/OrderForm/orderForm';
import MenuItem from './components/MenuItem/menuItem';


function App () {
  const [dishes, setDishes] = useState([]);
  const [menus, setMenus] = useState([]);
  const [orders, setOrders] = useState([]);
  const [selectedDishes, setSelectedDishes] = useState([]);


  //DISHES
  useEffect(() => {
    ApiService.getDishes()
      .then((data) => setDishes(data))
  }, []);

  const addNewDish = (body) => {
    ApiService.addDish(body)
      .then((dish) => setDishes(prevDishes => [...prevDishes, dish]))
  }

  //MENUS
  useEffect(() => {
    ApiService.getMenus()
      .then((data) => setMenus(data))
  }, []);

  const createNewMenu = (body) => {
    ApiService.createMenu(body)
      .then((menu) => setMenus(prevMenus => [...prevMenus, menu]))
  }



  //ORDERS
  useEffect(() => {
    ApiService.getOrders()
      .then((data) => setOrders(data))
  }, []);

  const createNewOrder = (body) => {
    ApiService.createOrder(body)
      .then((order) => setOrders(prevOrders => [...prevOrders, order]))
  }

  console.log('dishes -> ', dishes);
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/menu">
              <MenuList menus={menus} />
            </Route>
            <Route exact path="/add_dish">
              <DishForm addNewDish={addNewDish} />
            </Route>
            <Route exact path="/dish">
              <DishList dishes={dishes} />
            </Route>
            <Route exact path="/create_menu">
              <MenuForm
                dishes={dishes}
                createNewMenu={createNewMenu}
                selectedDishes={selectedDishes}
                setSelectedDishes={setSelectedDishes}
              />
            </Route>
            <Route exact path="/order">
              <OrderList orders={orders} />
            </Route>
            <Route exact path="/create_order">
              <OrderForm createNewOrder={createNewOrder} />
            </Route>
            <Route exact path="/menu_item/:id">
              <MenuItem
                menus={menus}
              // getOneMenu={getOneMenu}
              />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>

  );
}

export default App;
