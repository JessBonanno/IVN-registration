import React, { useEffect } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import theme from './ui/Theme';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Grid,
  Button,
  StepLabel,
  Step,
  Stepper,
} from '@material-ui/core';
import { useSelector } from 'react-redux';

// local components
import ServiceRequests from './ServiceRequests';
import Enroll from './Enroll';
import Review from './Review';
import Submitted from './Submitted';
import Start from './Start';

// data text
import { textScheme } from '../data/userTextScheme';

const useStyles = makeStyles(theme => ({
  root: {
    width: '80%',
    margin: '2em auto',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(1),
    fontSize: '1.5rem',
    textAlign: 'center',
  },
  stepperNavContainer: {
    margin: '3em 0',
    padding: '0 10em',
  },
}));

function App() {
  // set window to top on render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const userType = useSelector(state => {
    return state.usr.userType;
  });
  const userText = textScheme.filter(scheme => scheme.userType === userType);

  const currentPath = useSelector(state => {
    return state.srv.currentPath;
  });
  const selectedServices = useSelector(state => {
    return state.srv.selectedServices;
  });

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  // const path = history.location.pathname;

  // get steps and get step content populate the stepper and associated text
  function getSteps() {
    return ['Start', 'Services', 'Personal Information', 'Verification'];
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return 'Start Here';
      case 1:
        return `${
          selectedServices.length === 0
            ? userText[0].optionsText
            : userText[0].optionsTextAlt
        }`;
      case 2:
        return `${userText[0].enroll}`;
      case 3:
        return 'Please verify the following information before you submit this form';
      default:
        return '';
    }
  }

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const stepper = (
    <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            {/* <Typography className={classes.instructions}>
              Thank you, we have received your submission!
            </Typography> */}
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
          </div>
        )}
      </div>
    </div>
  );


  const stepperNav = (
    <Grid
      container
      justify='space-between'
      className={classes.stepperNavContainer}>
      <Grid item>
        <Button
          component={Link}
          to={
            currentPath === '/review'
              ? '/enroll'
              : currentPath === '/enroll'
              ? '/services'
              : currentPath === '/services' && '/'
          }
          disabled={activeStep === 0}
          onClick={handleBack}
          className={classes.button}>
          Back
        </Button>
      </Grid>
      <Grid item>
        <Button
          disabled={userType === ''}
          component={Link}
          to={
            currentPath === '/'
              ? '/services'
              : currentPath === '/services'
              ? '/enroll'
              : currentPath === '/enroll'
              ? '/review'
              : currentPath === '/review'
              ? '/finished'
              : currentPath === '/finished' && undefined
          }
          variant='contained'
          color='primary'
          onClick={handleNext}
          className={classes.button}>
          {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
        </Button>
      </Grid>
    </Grid>
  );

  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <Router>
          {stepper}
          <Route exact path='/' render={props => <Start {...props} />} />

          <Route
            exact
            path='/services'
            render={props => <ServiceRequests {...props} />}
          />
          <Route path='/enroll' render={props => <Enroll {...props} />} />
          <Route exact path='/review' render={props => <Review {...props} />} />
          <Route
            exact
            path='/finished'
            render={props => <Submitted {...props} />}
          />
          {currentPath !== '/finished' && stepperNav}
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
