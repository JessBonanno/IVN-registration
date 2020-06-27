import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid,  Chip } from '@material-ui/core';

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

export default function ServiceOption(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
    // set window to top on render 
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Grid container>
      <>
        <Grid item>
          <Chip
            label={`${props.service.name}`}
            clickable
            onClick={handleClickOpen}
            color='secondary'
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
