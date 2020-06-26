import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  TextField,
  Grid,
  IconButton,
  Typography,
  Button,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import AlarmIcon from '@material-ui/icons/Alarm';

// data for dropdowns
import { states, countries, timeZones } from '../dropdownData';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  enrollSection: {
    width: '100%',
    margin: '1em auto',
  },
  input: {
    margin: '1em 0',
    // width: 100,
  },
  dropdown: {
    margin: '1em 0',
    maxWidth: 225,
  },
  datePickerContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  enrollButtons: {
    margin: '1em',
  },
}));
export default function Enroll() {
  const classes = useStyles();

  // ! add logic to store user entries

  return (
    // main container for page
    <Grid
      container
      direction='column'
      alignItems='center'
      className={classes.enrollContainer}>
      {/* inputs item */}
      <Grid item style={{ width: 470 }}>
        <form className={classes.root} noValidate autoComplete='off'>
          {/* inputs container */}
          <Grid container direction='column' className={classes.enrollSection}>
            {/* name container */}

            <Grid item justify='space-between' container>
              <Grid item>
                <TextField
                  className={classes.input}
                  variant='outlined'
                  id='firstname'
                  type='text'
                  label='First Name'
                />
              </Grid>
              <Grid item>
                <TextField
                  className={classes.input}
                  variant='outlined'
                  id='lastname'
                  type='text'
                  label='Last Name'
                />
              </Grid>
            </Grid>

            {/* phone email container */}

            <Grid item justify='space-between' container>
              <Grid item>
                <TextField
                  className={classes.input}
                  variant='outlined'
                  id='email'
                  type='email'
                  label='Email'
                />
              </Grid>
              <Grid item>
                <TextField
                  className={classes.input}
                  variant='outlined'
                  id='phone'
                  type='tel'
                  label='Phone Number'
                />
              </Grid>
            </Grid>

            {/* address section */}

            <Grid item justify='center' container>
              <TextField
                style={{ width: '100%' }}
                className={classes.input}
                variant='outlined'
                id='address'
                type='text'
                label='Address'
              />
            </Grid>

            {/* city state  container */}

            <Grid item justify='space-between' container>
              <Grid item>
                <TextField
                  className={classes.input}
                  variant='outlined'
                  id='city'
                  type='text'
                  label='City'
                />
              </Grid>
              <Grid item>
                <Autocomplete
                  className={classes.dropdown}
                  id='combo-box-demo'
                  options={states}
                  getOptionLabel={option => option}
                  style={{ width: 300 }}
                  renderInput={params => (
                    <TextField {...params} label='State' variant='outlined' />
                  )}
                />
              </Grid>
            </Grid>
            <Grid item container justify='space-between'>
              <Grid item>
                <TextField
                  className={classes.input}
                  variant='outlined'
                  id='zip'
                  type='postal'
                  label='Zip'
                />
              </Grid>
              <Grid item>
                <Autocomplete
                  className={classes.dropdown}
                  id='combo-box-demo'
                  options={countries}
                  getOptionLabel={option => option}
                  style={{ width: 300 }}
                  renderInput={params => (
                    <TextField {...params} label='Country' variant='outlined' />
                  )}
                />{' '}
              </Grid>
            </Grid>

            {/* time container */}

            <Grid item container justify='space-between' alignItems='center'>
              <Grid item>
                <Autocomplete
                  className={classes.dropdown}
                  id='combo-box-demo'
                  options={timeZones}
                  getOptionLabel={option => option}
                  style={{ width: 300 }}
                  renderInput={params => (
                    <TextField
                      {...params}
                      label='Time Zone'
                      variant='outlined'
                    />
                  )}
                />{' '}
              </Grid>
              <Grid item container alignItems='center'>
                <Grid item>
                  <Typography variant='subtitle2'>
                    When is the best time to reach you?
                  </Typography>
                </Grid>
                <Grid item>
                  <IconButton variant='contained'>
                    <AlarmIcon color='primary' />
                  </IconButton>
                </Grid>{' '}
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Grid>
      {/* immigration status */}
      <Grid item>
        <Grid
          container
          direction='column'
          alignItems='center'
          justify='center'
          className={classes.enrollSection}>
          <Grid item>
            <Typography variant='subtitle1' style={{ margin: '1em 0' }}>
              Are you an immigrant in the country you live in?
            </Typography>
          </Grid>
          <Grid item container justify='center' alignItems='center'>
            <Grid item className={classes.enrollButtons}>
              <Button variant='contained' color='secondary'>
                Yes
              </Button>
            </Grid>
            <Grid item className={classes.enrollButtons}>
              <Button variant='contained' color='secondary'>
                No
              </Button>
            </Grid>
          </Grid>
          <Grid item>
            <Typography
              variant='subtitle1'
              style={{
                maxWidth: '70%',
                margin: '1em auto',
                textAlign: 'center',
              }}>
              If you answered no to the above question, Which country did you
              emigrate FROM?
            </Typography>
          </Grid>
          <Grid item>
            <Autocomplete
              className={classes.dropdown}
              id='combo-box-demo'
              options={countries}
              getOptionLabel={option => option}
              style={{ width: 300 }}
              renderInput={params => (
                <TextField {...params} label='Country' variant='outlined' />
              )}
            />{' '}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
