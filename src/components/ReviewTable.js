import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

import { textScheme } from '../data/userTextScheme';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

const columns = [
  { id: 'category', label: 'Category', maxWidth: '24%' },
  { id: 'options', label: 'Options', maxWidth: '24%' },
  {
    id: 'postedDate',
    label: 'Posted Date',
    maxWidth: '24%',
    align: 'right',
  },
  {
    id: 'status',
    label: 'Status',
    maxWidth: '24%',
    align: 'right',
  },
  //   {
  //     id: 'edit',
  //     label: 'Edit',
  //     maxWidth: '19%',
  //     align: 'right',
  //   },
];

function createData(category, options, postedDate, status) {
  return { category, options, postedDate, status };
}

const rows = [
  createData('Category 1', 'option 1', '06/19/20', 'Requested'),
  createData('Category 2', 'option 1, option 2', '06/19/20', 'In Process'),
  createData('Category 3', 'option 4, option 1', '06/19/20', 'Completed'),
];

const useStyles = makeStyles({
  root: {
    width: '80%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function MaterialTableDemo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const userType = useSelector(state => {
    return state.usr.userType;
  });
  const userChoices = useSelector(state => {
    return state.userChoices;
  });

  const userText = textScheme.filter(scheme => scheme.userType === userType);
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Typography variant='h3' style={{ margin: '1em' }}>
        {userText[0].optionsConfirmation}
      </Typography>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label='sticky table'>
            <TableHead>
              <TableRow>
                {columns.map(column => (
                  <StyledTableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}>
                    {column.label}
                  </StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(row => {
                  return (
                    <StyledTableRow
                      hover
                      role='checkbox'
                      tabIndex={-1}
                      key={row.code}>
                      {columns.map(column => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </StyledTableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component='div'
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}
