import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export const List = ({data}) =>{
  return(
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell component="th">City</TableCell>
            <TableCell component="th">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(item => {
            return (
              <TableRow key={item.id}>
                <TableCell hover scope="row">{item.name}</TableCell>
                <TableCell>{item.price}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  )
}
