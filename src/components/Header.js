import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withRouter, NavLink } from 'react-router-dom';
import { useAuth0 } from '../auth/react-auth0-wrapper';

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  loginButton: {
    flex: '1',
    justifyContent: 'flex-end'
  },
  linkStyles: {
    textDecoration: 'none',
    color: '#fff'
  },
  menuLinkStyles: {
    textDecoration: 'none',
    color: '#000'
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  },
  toolbarWrapper: {
    display: 'flex',
    alignItems: 'center',
    width: '85%',
    [theme.breakpoints.down('sm')]: {
      width: '51%'
    }
  },
  buttonWrapper: {
    display: 'flex',
    alignItems: 'center',
    width: '15%',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '49%',
      justifyContent: 'flex-end'
    }
  }
}));

function Header({ headerText }) {
  const classes = useStyles();
  const { isAuthenticated, logout } = useAuth0();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <div className={classes.toolbarWrapper}>
            <Typography variant="h6" noWrap>
              <NavLink className={classes.linkStyles} to="/">
                {headerText}
              </NavLink>
            </Typography>
          </div>
          <div className={classes.buttonWrapper}>
            {isAuthenticated && (
              <>
                <div style={{ fontSize: '1rem' }}>{user.displayName} | </div>
                <Button onClick={() => logout()} color="inherit">
                  LOG OUT
                </Button>
              </>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(Header);
