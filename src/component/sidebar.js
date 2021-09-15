import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import MenuIcon from '@material-ui/icons/Menu';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";





const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function Sidebar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >  
      <Router>
        <List>
          <ListItem>
          <Link to="/home">Home</Link>
          </ListItem>
          <ListItem>
          <Link to="/about">About Us</Link>
          </ListItem>
          <ListItem>
          <Link to="/contact">Contact Us</Link>
          </ListItem>
          <ListItem>
          <Link to="/work">Work With us</Link>
          </ListItem>
          </List>

          {/* <Switch>
          <Route path="/home">
            <Home />
          </Route>
        </Switch> */}

      </Router>

    </div>
  );




  return (
    <div>
      {
        <React.Fragment key={'MENU'}>
          <Button onClick={toggleDrawer('MENU', true)}><MenuIcon /></Button>
          <Drawer anchor={'MENU'} open={state['MENU']} onClose={toggleDrawer('MENU', false)}>
            {list('MENU')}
          </Drawer>
        </React.Fragment>
    
      }
    </div>
  );
}
