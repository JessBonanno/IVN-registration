import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import theme from './ui/Theme';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// local components
import ServiceRequests from './ServiceRequests';

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
}));

function App() {
  const classes = useStyles();
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
    <div>
      <Button
        disabled={activeStep === 0}
        onClick={handleBack}
        className={classes.button}>
        Back
      </Button>

      <Button
        variant='contained'
        color='primary'
        onClick={handleNext}
        className={classes.button}>
        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
      </Button>
    </div>
  );

  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <Router>
          {stepper}
          <ServiceRequests/>
          {stepperNav}
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
