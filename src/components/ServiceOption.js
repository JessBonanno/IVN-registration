import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Chip } from '@material-ui/core';
import { useSelector } from 'react-redux';

import OptionsDialog from './OptionsDialog';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    width: '80%',
    maxHeight: 435,
  },
  gridContainer: {
    padding: '2em 6em',
  },
  serviceButton: {
    width: 200,
    height: 40,
    margin: '1em .5em',
    boxShadow: '2px 4px 12px rgba(0, 0, 0, 0.60)',
  },
  serviceButtonSelected: {
    width: 200,
    height: 40,
    margin: '.5em 0',
    boxShadow: 'inset 2px 4px 12px rgba(0, 0, 0, 0.60)',
  },
}));

// ! need to add window to top funcion
export default function ServiceOption(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  // const [service, setService] = useState(props.service);
  // const selectedServices = useSelector(state => {
  //   return state.srv.selectedServices;
  // });
  // const servicesOffered = useSelector(state => {
  //   return state.srv.servicesOffered;
  // });



  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Grid container>
    {/* {servicesOffered.map(service => ( */}
      <>
        <Grid item>
          <Chip
            label={`${props.service.name}`}
            clickable
            onClick={handleClickOpen}
            color='secondary'
            //  ! refactor to use redux selected service array
            className={
              props.service.selected
                ? classes.serviceButtonSelected
                : classes.serviceButton
            }
          />
        </Grid>
         <OptionsDialog
          classes={{
            paper: classes.paper,
          }}
          id={props.service.id}
          keepMounted
          open={open}
          onClose={handleClose}
          value=''
          service={props.service}
          handleClose={handleClose}
          handleClickOpen={handleClickOpen}
          // setService={setService}
        /> 
      </>
    {/* ))} */}
    </Grid>
  );
}
