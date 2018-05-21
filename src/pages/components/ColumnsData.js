import React from 'react';
import CustomTableCell from './customTableCell';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ColumnsData = ({ columns, match }) => (
  <TableBody>
    {columns.map(data => (
      <TableRow key={data.id}>
        {data.data.map(rowData => {
          if (rowData.meta === 'details') {
            return (
              <CustomTableCell key={rowData.meta}>
                <Button component={Link} to={`${match.path}/${data.id}`} variant="raised" color="primary">
                  Details
                </Button>
              </CustomTableCell>
            );
          }
          return <CustomTableCell key={rowData.meta}>{rowData.title}</CustomTableCell>;
        })}
      </TableRow>
    ))}
  </TableBody>
);

ColumnsData.propTypes = {
  columns: PropTypes.arrayOf(Array),
  match: PropTypes.objectOf(Object).isRequired,
};
ColumnsData.defaultProps = {
  columns: [],
};
export default ColumnsData;
