import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#ed0303',
        color: theme.palette.common.white,
        fontWeight: 800,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 1,
    },
}));

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('C.Th', '1 year', 'Kannada/English/Malayalam', 'SSLC Pass'),
    createData('D.Th', '2 years', 'Kannada/English/Malayalam', 'SSLC Pass'),
    createData('B.Min', '2/3 years', 'Kannada', 'D.Th/SSLC Pass'),
    createData('B.Th', '3 years', 'Kannada/English', 'PUC Pass'),
    createData('M.Div', '3 years', 'English', 'B.Th/Degree Pass'),
];

export default function Courses() {
    return (
        <div className='Courses-Container'>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Course</StyledTableCell>
                            <StyledTableCell >Duration</StyledTableCell>
                            <StyledTableCell>Medium</StyledTableCell>
                            <StyledTableCell >Qualification</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell >{row.calories}</StyledTableCell>
                                <StyledTableCell >{row.fat}</StyledTableCell>
                                <StyledTableCell >{row.carbs}</StyledTableCell>
                                {/* <StyledTableCell align="right">{row.protein}</StyledTableCell> */}
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
