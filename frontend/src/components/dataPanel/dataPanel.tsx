import React from "react";
import { useUserValue } from "../../context/user";
import ErrorPage from "../errorPage/errorPage";
import { useLocation } from "react-router-dom";
import ComingSoonPage from "../comingSoonPage/comingSoonPage";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


const DataPanel : React.FC = () => {
    const userValue = useUserValue();
    const location  = useLocation();
    console.log();

    if(userValue != null)
    {
        if(location.pathname.split("/")[2] == 'patients')
        {
            if(userValue.type == 'manager')
            {
                return ( 
                    <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>Dessert (100g serving)</TableCell>
                          <TableCell align="right">Calories</TableCell>
                          <TableCell align="right">Fat&nbsp;(g)</TableCell>
                          <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                          <TableCell align="right">Protein&nbsp;(g)</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            <TableCell component="th" scope="row">
                              {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                );
            }
        }
        if(location.pathname.split("/")[2] == 'medics')
        {
            if(userValue.type == 'manager')
            {
                return ( <ComingSoonPage /> );
            }
        }
        if(location.pathname.split("/")[2] == 'admins')
        {
            if(userValue.type == 'manager')
            {
                return ( <ComingSoonPage /> );
            }
        }
    }

    return (
        <ErrorPage />
    );
};

export default DataPanel;