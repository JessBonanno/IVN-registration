import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function OptionsDialog(props) {

  // ! add logic to save answers
  
  const handleSubmit = () => {
    props.setService({
      ...props.service,
      selected: true,
    })
    props.handleClose();
  }

  const handleCancel = () => {
    props.setService({
      ...props.service,
      selected: false,
    })
    props.handleClose();

  }
  console.log(props.service);
  
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
            let answers = q.answers;
            return (
              <>
                <DialogContentText style={{ marginTop: '1em' }}>
                  {q.name}
                </DialogContentText>
                <Autocomplete
                  id='combo-box-demo'
                  options={answers}
                  getOptionLabel={option => option}
                  style={{ width: 300 }}
                  renderInput={params => (
                    <TextField {...params} label='Answers' variant='outlined' />
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
          <Button onClick={handleSubmit} color='primary'>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
