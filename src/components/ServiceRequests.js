import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography, Grid } from '@material-ui/core';
import ServiceOption from './ServiceOption';
import { useSelector, useDispatch } from 'react-redux';
import * as actionCreators from '../store/actions/index';

import { useHistory } from 'react-router-dom';
// data text
import {textScheme} from '../data/userTextScheme';

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

export default function ServiceRequests() {
  // set window to top on render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const updateCurrentPath = path =>
    dispatch(actionCreators.updateCurrentPath(path));

  useEffect(() => {
    updateCurrentPath(history.location.pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history.location.path]);

  const services = useSelector(state => {
    return state.srv.servicesOffered;
  });
  const userType = useSelector(state => {
    return state.usr.userType;
  });
  const userText = textScheme.filter(scheme => scheme.userType === userType);

  return (
    <div className={classes.paper}>
      <Paper elevation={1}>
        <Grid
          container
          direction='column'
          alignItems='center'
          className={classes.gridContainer}>
          {/* <Grid item>
            <Typography variant='h3'>
              {userText[0].optionsText}
            </Typography>
          </Grid> */}
          <Grid
            item
            container
            justify='space-evenly'
            style={{ margin: '2em 0' }}>
            {/* refactor this into its own component with the menu checkbox etc */}
            {services.map(service => (
              <Grid item key={service}>
                <ServiceOption service={service} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
