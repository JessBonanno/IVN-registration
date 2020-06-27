import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AlarmIcon from '@material-ui/icons/Alarm';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import { Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import * as actionCreators from '../store/actions/index';


const emails = ['username@gmail.com', 'user02@gmail.com'];
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

function SimpleDialog(props) {
    const dispatch = useDispatch();
    const addUserAvailability = info =>
    dispatch(actionCreators.addUserAvailability(info));
  const userAvailability = useSelector(state => {
    return state.usr.userAvailability;
  });


  const classes = useStyles();
  const { onClose, selectedValue, open } = props;
  const [choices, setChoices] = React.useState({
    Sunday: false,
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Saturday: false,
    morning: false,
    noon: false,
    night: false,
  });

  const handleChange = event => {
    setChoices({ ...choices, [event.target.name]: event.target.checked });
  };


  const {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
    morning,
    noon,
    night,
  } = choices;

  const handleClose = () => {
    onClose(selectedValue);
    addUserAvailability(choices)
  };
console.log(userAvailability);


  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby='simple-dialog-title'
      open={open}>
      <DialogTitle id='simple-dialog-title'>Choose all that apply</DialogTitle>
      <Grid container direction='column' justify='center' alignItems='center'>
        <Grid item>
          <FormControl component='fieldset' className={classes.formControl}>
            <FormLabel component='legend'>Best time to reach you</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={morning}
                    onChange={handleChange}
                    name='morning'
                  />
                }
                label='9am - 1pm EST'
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={noon}
                    onChange={handleChange}
                    name='noon'
                  />
                }
                label='1pm - 6pm EST'
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={night}
                    onChange={handleChange}
                    name='night'
                  />
                }
                label='6pm - 9pm EST'
              />
            </FormGroup>
            {/* <FormHelperText>Be careful</FormHelperText> */}
          </FormControl>{' '}
        </Grid>{' '}
      </Grid>{' '}
      <Grid item>
        <FormControl component='fieldset' className={classes.formControl}>
          <FormLabel component='legend'>Best days to reach you</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={Sunday}
                  onChange={handleChange}
                  name='Sunday'
                />
              }
              label='Sunday'
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={Monday}
                  onChange={handleChange}
                  name='Monday'
                />
              }
              label='Monday'
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={Tuesday}
                  onChange={handleChange}
                  name='Tuesday'
                />
              }
              label='Tuesday'
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={Wednesday}
                  onChange={handleChange}
                  name='Wednesday'
                />
              }
              label='Wednesday'
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={Thursday}
                  onChange={handleChange}
                  name='Thursday'
                />
              }
              label='Thursday'
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={Friday}
                  onChange={handleChange}
                  name='Friday'
                />
              }
              label='Friday'
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={Saturday}
                  onChange={handleChange}
                  name='Saturday'
                />
              }
              label='Saturday'
            />
          </FormGroup>
          {/* <FormHelperText>Be careful</FormHelperText> */}
        </FormControl>{' '}
        <Grid item align='center' style={{marginBottom: '1em'}}>
            <Button variant='contained' color='primary' onClick={handleClose}>Confirm</Button>
        </Grid>
      </Grid>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = value => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      {/* <Typography variant='subtitle1'>Selected: {selectedValue}</Typography> */}
      <br />
      <IconButton variant='contained' onClick={handleClickOpen} alt='time-day-picker'>
        <AlarmIcon color='primary' />
      </IconButton>{' '}
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
