import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, useHistory, Link } from 'react-router-dom';
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

// local components
import ServiceRequests from './ServiceRequests';
import Enroll from './Enroll';

const useStyles = makeStyles(theme => ({
  root: {
    width: '80%',
    margin: '2em auto',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  stepperNavContainer: {
    margin: '3em 0',
    padding: '0 10em',
  },
}));

function App() {
  const classes = useStyles();
  const history = useHistory();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  function getSteps() {
    return ['Service Requests', 'Personal Information', 'Verification'];
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return 'What would you like to request help for?';
      case 1:
        return 'Enroll as a Help Seeker';
      case 2:
        return 'Please verify the following information before you submit this form';
      default:
        return 'Unknown step';
    }
  }

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReturnHome = () => {
    setActiveStep(0);
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
            <Typography className={classes.instructions}>
              Thank you, we have received your submission!
            </Typography>
            <Button onClick={handleReturnHome} className={classes.button}>
              Return to Home
            </Button>
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
          disabled={activeStep === 0}
          onClick={handleBack}
          className={classes.button}>
          Back
        </Button>
      </Grid>

      <Grid item>
        <Button
          component={Link}
          to='/enroll'
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
          <Route
            exact
            path='/'
            render={props => (
              <ServiceRequests
                {...props}
              />
            )}
          />
          {stepperNav}
          <Route
            exact
            path='/enroll'
            render={props => (
              <Enroll
                {...props}
              />
            )}
          />

        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
