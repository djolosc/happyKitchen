import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { Home, People } from '@material-ui/icons';
import { Link } from "react-router-dom";
import React from 'react';


function BotNav () {
  const pathname = window.location.pathname; // in case user visits the path directly. The BottomNavBar is able to follow suit.
  const [value, setValue] = React.useState(pathname);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="btn-nav">
      <BottomNavigation value={value} onChange={handleChange} showLabels={true} >
        <BottomNavigationAction label="Home" value="/" icon={<Home />} component={Link} to='/' />
        <BottomNavigationAction label="User" value="/create_order" icon={<People />} component={Link} to='/create_order' />
      </BottomNavigation>
    </div>
  );
}

export default BotNav;



