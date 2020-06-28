import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as actionCreators from '../store/actions/index';
import { Grid, Typography, Button } from '@material-ui/core';

export default function Submitted() {
      // set window to top on render 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const history = useHistory();
  const dispatch = useDispatch();
  const updateCurrentPath = path =>
    dispatch(actionCreators.updateCurrentPath(path));
  useEffect(() => {
    updateCurrentPath(history.location.pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history.location.path]);


  
  return (
    <Grid
      container
      direction='column'
      justify='center'
      alignItems='center'
      style={{ marginTop: '5em' }}>
      <Grid item>
        <Typography variant='h3'>
          Thank you, we have received your submission!
        </Typography>
      </Grid>
      <Grid item>
        <Button
          variant='contained'
          color='primary'
          style={{ marginTop: '5em' }}>
          Return Home
        </Button>
      </Grid>
    </Grid>
  );
}
