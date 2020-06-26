import React, {useEffect} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useDispatch } from 'react-redux';
import * as actionCreators from '../store/actions/services';
import { useSelector } from 'react-redux';




export default function OptionsDialog(props) {
  const dispatch = useDispatch();
  const addService = service => dispatch(actionCreators.addService(service));
  const removeService = service => dispatch(actionCreators.removeService(service));
  const addResponses = responses => dispatch(actionCreators(addResponses(responses)))
  const servicesOffered = useSelector(state => {
    return state.srv.servicesOffered;
  });




  // ! add logic to save answers

  const handleSubmit = () => {
    console.log(props.service);
    addService(props.service);
    props.handleClose();
  }

  const handleCancel = () => {
    props.handleClose();
  }
  
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby='form-dialog-title'>
        <DialogTitle id='form-dialog-title' style={{ padding: '1em 10em 0 ' }}>
          {props.service.name}
        </DialogTitle>
        <DialogContent style={{ padding: '0 10em' }}>
          {props.service.questions.map(q => {
            let choices = q.choices;
            return (
              <>
                <DialogContentText style={{ marginTop: '1em' }}>
                  {q.name}
                </DialogContentText>
                <Autocomplete
                  id='combo-box-demo'
                  options={choices}
                  getOptionLabel={option => option}
                  style={{ width: 300 }}
                  renderInput={params => (
                    <TextField {...params} label='Choices' variant='outlined' />
                  )}
                />{' '}
              </>
            );
          })}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color='primary'>
            Cancel
          </Button>
          <Button onClick={() => handleSubmit(props.service.id)} color='primary'>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
