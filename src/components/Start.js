import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography, Grid, Avatar, IconButton } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import * as actionCreators from '../store/actions/index';

// local components

const useStyles = makeStyles(theme => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(3),
      width: theme.spacing(80),
      height: theme.spacing(40),
    },
    justifyContent: 'center',
  },

  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    boxShadow: '2px 4px 12px rgba(0, 0, 0, 0.30)',
  },
  gridContainer: {
    padding: '2em 6em',
  },
  avatarContainer: {
    width: 100,
  },
  serviceButton: {
    width: 200,
    margin: '.5em 0',
  },
}));

export default function Start() {
  // set window to top on render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const updateCurrentPath = path =>
    dispatch(actionCreators.updateCurrentPath(path));
  const setUserType = user => dispatch(actionCreators.setUserType(user));
  const [selectedUser, setSelectedUser] = useState();

  useEffect(() => {
    updateCurrentPath(history.location.pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history.location.path]);

  const users = useSelector(state => {
    return state.usr.users;
  });

  const handleSelectUserType = user => {
    setSelectedUser(user);
    setUserType(user);
  };

  return (
    <div className={classes.paper}>
      <Paper elevation={1}>
        <Grid
          container
          direction='column'
          alignItems='center'
          className={classes.gridContainer}>
          <Grid item>
            <Typography variant='h3'>What are you?</Typography>
          </Grid>

          <Grid
            item
            container
            justify='space-evenly'
            style={{ margin: '2em 0' }}>
            {users.map(user => (
              <Grid
                key={user}
                item
                container
                direction='column'
                //   justify='center'
                alignItems='center'
                className={classes.avatarContainer}>
                <Grid item style={{ margin: '1em' }}>
                  <IconButton onClick={() => handleSelectUserType(user)}>
                    <Avatar
                      className={
                        selectedUser === user ? classes.large : undefined
                      }></Avatar>
                  </IconButton>
                </Grid>
                <Grid item>
                  <Typography
                    variant='subtitle2'
                    style={{ textAlign: 'center' }}>
                    {user}
                  </Typography>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
