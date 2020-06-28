import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as actionCreators from '../store/actions/index';

export default function Start() {
  // set window to top on render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
//   const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const updateCurrentPath = path =>
    dispatch(actionCreators.updateCurrentPath(path));

  useEffect(() => {
    updateCurrentPath(history.location.pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history.location.path]);

  return <div></div>;
}
