import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Chip,
} from '@material-ui/core';

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
    margin: '.5em 0',
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
  const [value, setValue] = useState('Dione');
  const [service, setService] = useState(props.service)


console.log(service);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Grid container>
      <Grid item>
        <Chip
          label={`${service.name}`}
          clickable
          onClick={handleClickOpen}
          color='secondary'
          className={service.selected ? classes.serviceButtonSelected : classes.serviceButton}
        />
      </Grid>
      <OptionsDialog
          classes={{
            paper: classes.paper,
          }}
          id={service.id}
          keepMounted
          open={open}
          onClose={handleClose}
          value={value}
          service={service}
          handleClose={handleClose}
          handleClickOpen={handleClickOpen}
          setService={setService}
        />
    </Grid>
  );
}
