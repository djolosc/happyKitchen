import { AppBar, Toolbar, IconButton, Menu, MenuItem } from "@material-ui/core";
import {useState, MouseEvent,} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { withRouter } from 'react-router-dom';
import { useHistory } from 'react-router';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "sticky",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    display: "flex",
    color: "black"
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    width: "120px",
    height: "25px",
    
  }
}));


function TopNav () {
  const history = useHistory();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | EventTarget & Element>(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: MouseEvent) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (path: string) => {
    history.push(path);
    setAnchorEl(null);
  };

  return (
    <div data-testid="TopNavtest" className={classes.root}>
      <AppBar position="static">
        <Toolbar style={{ background: '#EEE' }}>
        <IconButton
              data-testid="Menutest"
              edge="start"
              
              color="inherit"
              aria-label="logo"
              onClick={()=> {history.push('/get_started')}}
            >
          <img
            src={"/Logo-easykitchen.png"}
            alt="logo"
            className={classes.logo} />
           </IconButton>
          <Typography
            variant="h6"
            className={classes.title}>
          </Typography>
          <div>
            <IconButton
              data-testid="Menutest"
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={() => setAnchorEl(null)}
            >
              <MenuItem data-testid="dish" onClick={() => handleMenuClick('/add_dish')}>Add a dish</MenuItem>
              <MenuItem data-testid="menu" onClick={() => handleMenuClick('/create_menu')}>Create a menu</MenuItem>
              <MenuItem data-testid="see_menu" onClick={() => handleMenuClick('/menu')}>See menus</MenuItem>
              <MenuItem data-testid="orders" onClick={() => handleMenuClick('/order')}>See orders</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(TopNav);


