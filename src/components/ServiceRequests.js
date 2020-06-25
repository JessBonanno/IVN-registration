import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography, Grid, Avatar, Chip, Modal } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';

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

const services = [
  {
    name: 'Personal Protection Products',
    id: '1',
    selected: false,
  },
  {
    name: 'Shopping Services',
    id: '2',
    selected: false,
  },
  {
    name: 'Helpline',
    id: '3',
    selected: false,
  },
  {
    name: 'Volunteer Support Services',
    id: '4',
    selected: false,
  },
  {
    name: 'Money',
    id: '5',
    selected: false,
  },
  {
    name: 'Mentor Job Seekers',
    id: '6',
    selected: false,
  },
];

export default function ServiceRequests() {
  const classes = useStyles();
  const [selectedServices, setSelectedServices] = useState([]);

  console.log(selectedServices);

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
              <Grid item style={{ margin: '1em' }}>
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
              <Grid item style={{ margin: '1em' }}>
                <Avatar className={classes.large}>O</Avatar>
              </Grid>
              <Grid item>
                <Typography variant='caption1'>
                  Social Service Organization
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction='column'
              //   justify='center'
              alignItems='center'
              className={classes.avatarContainer}>
              <Grid item style={{ margin: '1em' }}>
                <Avatar className={classes.large}>B</Avatar>
              </Grid>
              <Grid item>
                <Typography variant='caption1'>Business</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <Paper elevation={1} style={{ height: 600 }}>
        <Grid
          container
          direction='column'
          alignItems='center'
          className={classes.gridContainer}>
          <Grid item>
            <Typography variant='h3'>
              What would you like to request help for?
            </Typography>
          </Grid>
          <Grid
            item
            container
            justify='space-evenly'
            style={{ margin: '2em 0' }}>
            {services.map(service => (
              <Grid item>
                <Chip
                  label={`${service.name}`}
                  clickable
                  color='secondary'
                  className={classes.serviceButton}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
