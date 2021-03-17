import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ApiService from './ApiService';
import { CssBaseline, Grid } from '@material-ui/core';
import { DishList, MenuList, OrderList, DishForm, MenuForm, OrderForm, MenuItemById, Home, TopNav, BotNav, ClientBye, MenuSaved, GetStarted, DishSaved } from './components/Index';
import type {bodyDish, bodyMenu, bodyOrder, dish, menu, order} from './Types';
require('dotenv').config();

function App() {
  const [dishes, setDishes] = useState<dish[] | []>([]);
  const [menus, setMenus] = useState<menu[] | []>([]);
  const [orders, setOrders] = useState<order[] | []>([]);
  const [selectedDishes, setSelectedDishes] = useState<dish[] | []>([]);
  const [chosenMenu, setChosenMenu] = useState<menu[] | []>([]);


  //DISHES
  useEffect(() => {
    ApiService.getDishes().then((data) => setDishes(data));
  }, []);

  const addNewDish = (body: bodyDish) => {
    ApiService.addDish(body).then((dish) =>
      setDishes((prevDishes) => [...prevDishes, dish])
    );
  };

  //MENUS
  useEffect(() => {
    ApiService.getMenus().then((data) => setMenus(data));
  }, []);

  const createNewMenu = (body:bodyMenu) => {
    ApiService.createMenu(body).then((menu) =>
      setMenus((prevMenus) => [...prevMenus, menu])
    );
  };

  // const deleteOneMenu = (id) => {
  //   ApiService.deleteMenu(id).then(
  //     setMenus(menus.filter((menu) => menu.id !== id))
  //   );
  // };

  //ORDERS
  useEffect(() => {
    ApiService.getOrders().then((data) => setOrders(data));
  }, []);

  const createNewOrder = (body:bodyOrder) => {
    ApiService.createOrder(body).then((order) =>
      setOrders((prevOrders) => {
       
        return [...prevOrders, order];
      })
    );
  };

  //STYLE
  const containerStyle = {
    height: 'calc(100vh - 112px)',
    overFlow: 'auto',
    textAlign: 'center' as 'center',
  };

  return (
    <Router>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500&display=swap');
      </style>
      <div className="App">
        <Grid container direction="column">
          <TopNav />
          <div style={containerStyle} className="content">
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
                <OrderList orders={orders}  />
              </Route>
              <Route exact path="/create_order">
                <OrderForm
                  createNewOrder={createNewOrder}
                  menus={menus}
                  chosenMenu={chosenMenu}
                  setChosenMenu={setChosenMenu}
                />
              </Route>
              <Route exact path="/menu/:id">
                <MenuItemById menus={menus} />
              </Route>
              <Route exact path="/get_started" component={GetStarted}></Route>
              <Route exact path="/" component={Home} />
              <Route exact path="/dish_saved" component={DishSaved} />
              <Route exact path="/menu_saved" component={MenuSaved} />
              <Route exact path="/bye" component={ClientBye} />
            </Switch>
          </div>
          <BotNav />
        </Grid>
        <CssBaseline />
      </div>
    </Router>
  );
}

export default App;
