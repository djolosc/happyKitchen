import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { Home, People } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import {useState, ChangeEvent, MouseEvent} from 'react';
import ThreeSixtyIcon from '@material-ui/icons/ThreeSixty';

function BotNav() {
  const pathname = window.location.pathname; // in case user visits the path directly. The BottomNavBar is able to follow suit.
  const [value, setValue] = useState<string | ChangeEvent>(pathname);
  const handleChange = (event: ChangeEvent<{}>, newValue: ChangeEvent) => {
    setValue(newValue);
  };
  return (
    <div className="btn-nav">
      <BottomNavigation value={value} onChange={handleChange} showLabels={true}>
        <BottomNavigationAction
          data-testid="bottomNavAction1"
          label="Home"
          value="/"
          icon={<ThreeSixtyIcon />}
          component={Link}
          to="/"
        />
        <BottomNavigationAction
          data-testid="bottomNavAction2"
          label="Home"
          value="/"
          icon={<Home />}
          component={Link}
          to="/get_started"
        />
        <BottomNavigationAction
          data-testid="bottomNavAction3"
          label="User"
          value="/create_order"
          icon={<People />}
          component={Link}
          to="/create_order"
        />
      </BottomNavigation>
    </div>
  );
}

export default BotNav;
