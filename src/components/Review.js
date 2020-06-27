import React, { useEffect } from 'react';
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

export default function Review() {
//   const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const updateCurrentPath = path =>
    dispatch(actionCreators.updateCurrentPath(path));
  const currentPath = useSelector(state => {
    return state.srv.currentPath;
  });

  useEffect(() => {
    updateCurrentPath(history.location.pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history.location.path]);

  return <div></div>;
}
