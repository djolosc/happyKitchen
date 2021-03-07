import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ApiService from './ApiService';
import DishList from './components/DishList/dishList';
import MenuList from './components/MenuList/menuList';
import OrderList from './components/OrderList/orderList';
import Navbar from './components/Navbar/Navbar';
import DishForm from './components/DishForm/dishForm';
import MenuForm from './components/MenuForm/menuForm';
import OrderForm from './components/OrderForm/orderForm';
import MenuItemById from './components/MenuItemById/menuItemById';
import Home from './components/Home';
import { Grid } from '@material-ui/core';
import TopNav from './components/AppTools/TopNav';
import Content from './components/AppTools/Content';
import BotNav from './components/AppTools/BotNav';

function App () {
  const [dishes, setDishes] = useState([]);
  const [menus, setMenus] = useState([]);
  const [orders, setOrders] = useState([]);
  const [selectedDishes, setSelectedDishes] = useState([]);
  const [chosenMenu, setChosenMenu] = useState([])


  //DISHES
  useEffect(() => {
    ApiService.getDishes()
      .then((data) => setDishes(data))
  }, []);

  const addNewDish = (body) => {
    ApiService.addDish(body)
      .then((dish) => setDishes(prevDishes => [...prevDishes, dish]))
  };

  //MENUS
  useEffect(() => {
    ApiService.getMenus()
      .then((data) => setMenus(data))
  }, []);

  const createNewMenu = (body) => {
    ApiService.createMenu(body)
      .then((menu) => setMenus(prevMenus => [...prevMenus, menu]))
  };


  const deleteOneMenu = (id) => {
    ApiService.deleteMenu(id)
      .then(setMenus(menus.filter((menu) => menu.id !== id)))
  };



  //ORDERS
  useEffect(() => {
    ApiService.getOrders()
      .then((data) => setOrders(data))
  }, []);

  const createNewOrder = (body) => {
    ApiService.createOrder(body)
      .then((order) => setOrders(prevOrders => [...prevOrders, order]))
  }

  const containerStyle = {
    height: "100vh",
    overFlow: "auto",
    textAlign: "center"
  }

  return (
    <Router>
      <div className="App">
        <Grid container direction="column">
          {/* <Navbar /> */}
          <TopNav />


          <div style={containerStyle} className="content">
            <Content />
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
                  menus={menus}
                />
              </Route>
              <Route exact path="/order">
                <OrderList orders={orders} />
              </Route>
              <Route exact path="/create_order">
                <OrderForm createNewOrder={createNewOrder} />
              </Route>
              <Route exact path="/menu/:id">
                <MenuItemById
                  menus={menus}
                />
              </Route>
              <Route exact path="/" component={Home} />
              <BotNav />
            </Switch>
          </div>
        </Grid>
      </div>
    </Router>

  );
}

export default App;
