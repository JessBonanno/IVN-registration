import React, { useState, useEffect } from 'react';
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
import { useSelector, useDispatch } from 'react-redux';
import * as actionCreators from '../store/actions/index';
import { useHistory } from 'react-router-dom';

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
  const history = useHistory();
  const dispatch = useDispatch();
  const updateCurrentPath = path =>
    dispatch(actionCreators.updateCurrentPath(path));
  const currentPath = useSelector(state => {
    return state.srv.currentPath;
  });
  const [userInfo, setUserInfo] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    timezone: '',
    availability: '',
    immigrant: false,
    fromCountry: '',
  });
  const [dropdownValues, setDropdownValues] = useState({
    fromCountry: '',
    state: '',
    country: '',
    timezone: '',
  });

  useEffect(() => {
    updateCurrentPath(history.location.pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history.location.path]);

  const handleChanges = e => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleValueChanges = (e, value) => {};
  console.log(userInfo);
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
                  name='firstname'
                  value={userInfo.firstname}
                  type='text'
                  label='First Name'
                  onChange={handleChanges}
                />
              </Grid>
              <Grid item>
                <TextField
                  className={classes.input}
                  variant='outlined'
                  id='lastname'
                  name='lastname'
                  value={userInfo.lastname}
                  type='text'
                  label='Last Name'
                  onChange={handleChanges}
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
                  name='email'
                  value={userInfo.email}
                  type='email'
                  label='Email'
                  onChange={handleChanges}
                />
              </Grid>
              <Grid item>
                <TextField
                  className={classes.input}
                  variant='outlined'
                  id='phone'
                  name='phone'
                  value={userInfo.phone}
                  type='tel'
                  label='Phone Number'
                  onChange={handleChanges}
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
                name='address'
                value={userInfo.address}
                type='text'
                label='Address'
                onChange={handleChanges}
              />
            </Grid>

            {/* city state  container */}

            <Grid item justify='space-between' container>
              <Grid item>
                <TextField
                  className={classes.input}
                  variant='outlined'
                  id='city'
                  name='city'
                  value={userInfo.city}
                  type='text'
                  label='City'
                  onChange={handleChanges}
                />
              </Grid>
              <Grid item>
                <Autocomplete
                  className={classes.dropdown}
                  id='state'
                  options={states}
                  getOptionLabel={option => option}
                  style={{ width: 300 }}
                  value={userInfo.state}
                  onChange={(event, newValue) => {
                    setUserInfo({
                      ...userInfo,
                      state: newValue,
                    });
                  }}
                  renderInput={params => (
                    <TextField
                      {...params}
                      label='State'
                      variant='outlined'
                      name='state'
                    />
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
                  name='zip'
                  value={userInfo.zip}
                  type='postal'
                  label='Zip'
                  onChange={handleChanges}
                />
              </Grid>
              <Grid item>
                <Autocomplete
                  className={classes.dropdown}
                  id='country'
                  options={countries}
                  getOptionLabel={option => option}
                  style={{ width: 300 }}
                  value={userInfo.country}
                  onChange={(event, newValue) => {
                    setUserInfo({
                      ...userInfo,
                      country: newValue,
                    });
                  }}
                  renderInput={params => (
                    <TextField
                      {...params}
                      label='Country'
                      variant='outlined'
                      name='country'
                    />
                  )}
                />
              </Grid>
            </Grid>

            {/* time container */}

            <Grid item container justify='space-between' alignItems='center'>
              <Grid item>
                <Autocomplete
                  className={classes.dropdown}
                  id='timezone'
                  options={timeZones}
                  getOptionLabel={option => option}
                  style={{ width: 300 }}
                  value={userInfo.timezone}
                  onChange={(event, newValue) => {
                    setUserInfo({
                      ...userInfo,
                      timezone: newValue,
                    });
                  }}
                  renderInput={params => (
                    <TextField
                      {...params}
                      label='Time Zone'
                      variant='outlined'
                      name='timezone'
                    />
                  )}
                />
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
              <Button
                variant='contained'
                color='secondary'
                onClick={() =>
                  setUserInfo({
                    ...userInfo,
                    immigrant: true,
                  })
                }>
                Yes
              </Button>
            </Grid>
            <Grid item className={classes.enrollButtons}>
              <Button
                variant='contained'
                color='secondary'
                onClick={() =>
                  setUserInfo({
                    ...userInfo,
                    immigrant: false,
                  })
                }>
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
          <form>
            <Grid item>
              <Autocomplete
                className={classes.dropdown}
                id='fromCountry'
                options={countries}
                getOptionLabel={option => option}
                style={{ width: 300 }}
                value={userInfo.fromCountry}
                onChange={(event, newValue) => {
                  setUserInfo({
                    ...userInfo,
                    fromCountry: newValue,
                  });
                }}
                renderInput={params => (
                  <TextField
                    {...params}
                    label='Country'
                    variant='outlined'
                    name='fromCountry'
                  />
                )}
              />
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
}
