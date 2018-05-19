import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

class TimeSheet extends React.Component {
  render() {
    return (
      <Grid item xs={10}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>2</TableCell>
              <TableCell>3</TableCell>
              <TableCell>4</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell> Data 1</TableCell>
              <TableCell> Data 2</TableCell>
              <TableCell> Data 3</TableCell>
              <TableCell> Data 4</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Grid>
    );
  }
}

export default TimeSheet;
