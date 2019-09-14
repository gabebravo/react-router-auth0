import React from 'react';
import Rowing from '@material-ui/icons/Rowing';
import {
  Avatar,
  Button,
  CssBaseline,
  Paper,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useAuth0 } from '../auth/react-auth0-wrapper';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '10%',
    [theme.breakpoints.down('sm')]: {
      marginTop: '35%'
    }
  },
  layout: {
    width: 'auto',
    display: 'block', // Fix IE11 issue.
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up(400 + theme.spacing(3 * 2))]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    marginTop: theme.spacing(3)
  }
}));

function Home(props) {
  const classes = useStyles();
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <Rowing />
          </Avatar>
          <Typography>Fitness App</Typography>
          <form className={classes.form}>
            {!isAuthenticated && (
              <Button
                onClick={() => loginWithRedirect({})}
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
            )}
            {!isAuthenticated && (
              <Button
                onClick={() => loginWithRedirect({})}
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign Up
              </Button>
            )}
          </form>
        </Paper>
      </main>
    </div>
  );
}

export default Home;
