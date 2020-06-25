import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Grid } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

import {states, countries} from '../locationsData';

console.log(states);

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  inputContainer: {
    width: '80%',
    margin: '1em auto',
  },  
}));
export default function Enroll() {
  const classes = useStyles();

  return (
    <Grid container direction='column' alignItems='center' className={classes.enrollContainer}>
        <form className={classes.root} noValidate autoComplete="off">
          <Grid item container justify='space-evenly' className={classes.inputContainer}>
            <Grid>
              <Grid item>
                <TextField variant="outlined" id="firstname" type="text" label="First Name" />
              </Grid>
              <Grid item>
                <TextField variant="outlined" id="lastname" type="text" label="Last Name" />
              </Grid>
            </Grid>
            <Grid item>
              <TextField variant="outlined" id="email" type="email" label="Email" />
            </Grid>
            <Grid item>
              <TextField variant="outlined" id="phone" type="tel" label="Phone Number" />
            </Grid>
            <Grid item>
            <TextField variant="outlined" id="address" type="text" label="Address" />
            </Grid>
            <Grid item>
              <TextField variant="outlined" id="city" type="text" label="City" />
            </Grid>
            <Grid item>
            <Autocomplete
                id="combo-box-demo"
                options={states}
                getOptionLabel={(option) => option}
                style={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="State" variant="outlined" />
                )}
              />{' '}

            </Grid>
            <Grid item>
              <TextField variant="outlined" id="zip" type="postal" label="Zip" />
            </Grid>
            <Grid item>
            <Autocomplete
                id="combo-box-demo"
                options={countries}
                getOptionLabel={(option) => option}
                style={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Country" variant="outlined" />
                )}
              />{' '}
            </Grid>
          </Grid>
        </form>
    </Grid>
  );
}
