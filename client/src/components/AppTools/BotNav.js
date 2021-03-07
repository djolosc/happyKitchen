import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { Home, People, Menu } from '@material-ui/icons';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import React from 'react';


function BotNav () {
  const pathname = window.location.pathname; // in case user visits the path directly. The BottomNavBar is able to follow suit.
  const [value, setValue] = React.useState(pathname);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <BottomNavigation value={value} onChange={handleChange} showLabels={true} >
      <BottomNavigationAction label="Menu" value="/create_menu" icon={<Menu />} component={Link} to='/create_menu' />
      <BottomNavigationAction label="Home" value="/" icon={<Home />} component={Link} to='/' />
      <BottomNavigationAction label="User" value="/add_dish" icon={<People />} component={Link} to='/add_dish' />
    </BottomNavigation>
  );
}


export default BotNav;



