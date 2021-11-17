import React from 'react';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import UserModel from '../components/UserModel';
import UserCommentsModel from '../components/UserCommentsModel';

import { useQuery } from "@apollo/client"
import { GET_USERS } from '../gql/query';


const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function User() {

  const { data, loading, error } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  // if there is an error fetching the data, display an error message
  if (error) return <p>Error!</p>;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">User</TableCell>
            <TableCell align="right">User Comments</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.users.data.map((user) => (
            <StyledTableRow
              key={user.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{user.id}</TableCell>
              <TableCell align="right">{user.name}</TableCell>
              <TableCell align="right"><UserModel userId = {user.id}/></TableCell>
              <TableCell align="right"><UserCommentsModel userId = {user.id} /></TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
// const User = () => {
//     return (
//         <div>
//             <h1>notedly</h1>
//             <p>User page</p>
//         </div>
//     );
// };

// export default User