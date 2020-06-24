import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography, Grid, Avatar } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  paper: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
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
  },
  gridContainer: {
    padding: '2em 6em'
  },
  avatarContainer: {
    width: 100,
  },
}));

export default function ServiceRequests() {
  const classes = useStyles();

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
            <Grid
              item
              container
              direction='column'
            //   justify='center'
              alignItems='center'

              className={classes.avatarContainer}>
              <Grid item style={{margin: '1em'}}>
                <Avatar className={classes.large}>I</Avatar>
              </Grid>
              <Grid item>
                <Typography variant='caption1'>Individual</Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction='column'
            //   justify='center'
              alignItems='center'

              className={classes.avatarContainer}>
              <Grid item style={{margin: '1em'}}>
                <Avatar className={classes.large}>O</Avatar>
              </Grid>
              <Grid item>
                <Typography variant='caption1'>Social Service Organization</Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction='column'
            //   justify='center'
              alignItems='center'
              className={classes.avatarContainer}>
              <Grid item style={{margin: '1em'}}>
                <Avatar  className={classes.large}>B</Avatar>
              </Grid>
              <Grid item>
                <Typography variant='caption1'>Business</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
