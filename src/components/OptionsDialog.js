import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Autocomplete from '@material-ui/lab/Autocomplete';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { useSelector, useDispatch } from 'react-redux';
import * as actionCreators from '../store/actions/services';

export default function OptionsDialog(props) {
  const dispatch = useDispatch();
  const [selections, setSelections] = useState();
  const addService = service => dispatch(actionCreators.addService(service));
  const servicesOffered = useSelector(state => {
    return state.srv.servicesOffered;
  });
  

  const handleSubmit = () => {
    addService(props.service);
    props.handleClose();
    console.log(selections);
  };

  const handleCancel = () => {
    props.handleClose();
  };
  //  storing values from question popup
  const handleChange = (e, service, question) => {
    e.persist();
    setSelections({
       ...selections, 
       service: service,
       [e.target.name]: e.target.value });

  };

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby='form-dialog-title'>
        <DialogTitle
          id='form-dialog-title'
          style={{
            padding: '1em 1em 0 ',
            fontSize: '1.5rem',
            textAlign: 'center',
          }}>
          {props.service.name}
        </DialogTitle>
        <DialogContent style={{ padding: '0 10em' }}>
          {props.service.questions.map(q => {
            let choices = q.choices;
            return (
              <>
                <DialogContentText
                  style={{
                    marginTop: '1em',
                    fontSize: '1.3rem',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  {q.name}
                </DialogContentText>
                <Select
                  style={{ width: 200 }}
                  id={q.name}
                  value={selections ? selections[q.name] : ''}
                  onChange={(e) => handleChange(e, props.service, q)}
                  name={q.name}>
                  <MenuItem value='None'>None</MenuItem>
                  {choices.map(choice => {
                    return <MenuItem value={choice}>{choice}</MenuItem>;
                  })}
                </Select>

                {/* <Autocomplete
                  id={props.service.questions.name}
                  options={choices}
                  getOptionLabel={option => option}
                  style={{ width: 300 }}
                  renderInput={params => (
                    <TextField {...params} label='Choices' variant='outlined' />
                  )}
                />{' '} */}
              </>
            );
          })}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color='primary'>
            Cancel
          </Button>
          <Button
            onClick={() => handleSubmit(props.service.id)}
            color='primary'>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
