import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Footer from '../Home/Footer';
import Tables from 'react-bootstrap/Table';

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
    createData('M.Div (Master of Divinity)', 'Offline : Regular - 9:00am - 3:30pm (Monday - Friday)', '3 years', 'English', 'B.Th / Bachelor Degree from reconized University'),
    createData('M.Min (Master of Ministry)', 'Online : Regular - 7:00pm - 9:00pm (Monday - Wednesday)', '2 years', 'English & Kannada', 'B.Th / Any Bachelor Degree'),
    createData('PTC (Pastoral Training Course)', 'Online : Regular - 7:00pm - 9:00pm (Monday - Tuesday)', '1 year', 'English', '10th Pass with IPCKS ID'),
];

export default function Courses() {
    return (
        <>
            <div className='coursetable'>
                <div>
                    <h4 className='courseHeader'>Dip.Th (Diploma in Thelogical)</h4>
                    <Tables striped className='cousetabletag'>
                        <thead>
                            <tr>
                                <th>Duration</th>
                                <th>Course Type</th>
                                <th>Medium</th>
                                <th>Qualification</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2 years</td>
                                <td>Regular (offline) : 9:00am - 3:30pm (Monday to Friday)</td>
                                <td>Kannada & English</td>
                                <td>SSLC</td>
                            </tr>
                            <tr>
                                <td>2years</td>
                                <td>Online : 7:00pm - 9:00pm (Monday & Tuesday)</td>
                                <td>Kannada,English & Malayalam</td>
                                <td>SSLC</td>
                            </tr>
                            {/* <tr>
                            <td colSpan={2}>Larry the Bird</td>
                            <td>@twitter</td>
                        </tr> */}
                        </tbody>
                    </Tables>
                </div>

                <div>
                    <h4 className='courseHeader'>C.Th (Certificate in Thelogical)</h4>
                    <Tables striped className='cousetabletag'>
                        <thead>
                            <tr>
                                <th>Duration</th>
                                <th>Course Type</th>
                                <th>Medium</th>
                                <th>Qualification</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1 years</td>
                                <td>Regular (offline) : 9:00am - 3:30pm (Monday to Friday)</td>
                                <td>Kannada</td>
                                <td>SSLC</td>
                            </tr>
                            <tr>
                                <td>1years</td>
                                <td>Online : 7:00pm - 9:00pm (Monday & Tuesday)</td>
                                <td>Kannada,English,Malayalam & Telugu</td>
                                <td>SSLC</td>
                            </tr>
                        </tbody>
                    </Tables>
                </div>
                <div>
                    <h4 className='courseHeader'>B.Th (Bachelor of Thelogical)</h4>
                    <Tables striped className='cousetabletag'>
                        <thead>
                            <tr>
                                <th>Duration</th>
                                <th>Course Type</th>
                                <th>Medium</th>
                                <th>Qualification</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>3years</td>
                                <td>Regular (offline) : 9:00am - 3:30pm (Monday to Friday)</td>
                                <td>Kannada & English</td>
                                <td>10+2 pass or Dip.Th or Equivalent</td>
                            </tr>
                        </tbody>
                    </Tables>
                </div>
                <div>
                    <h4 className='courseHeader'>B.Min (Bachelor of Ministry)</h4>
                    <Tables striped className='cousetabletag'>
                        <thead>
                            <tr>
                                <th>Duration</th>
                                <th>Course Type</th>
                                <th>Medium</th>
                                <th>Qualification</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>3 years</td>
                                <td>Online : 7:00pm - 9:00pm (Monday to Tuesday)</td>
                                <td>Kannada</td>
                                <td>10+2 pass or Dip.Th or Equivalent</td>
                            </tr>
                        </tbody>
                    </Tables>
                </div>
            </div>
            <div>
                <h4 className='othercourseheader'>Other course</h4>
                <div className='Courses-Container'>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Course</StyledTableCell>
                                    <StyledTableCell>Course Type</StyledTableCell>
                                    <StyledTableCell >Duration</StyledTableCell>
                                    <StyledTableCell>Medium</StyledTableCell>
                                    <StyledTableCell >Qualification</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <StyledTableRow key={row.name}>
                                        <StyledTableCell component="th" scope="row">{row.name}</StyledTableCell>
                                        <StyledTableCell >{row.calories}</StyledTableCell>
                                        <StyledTableCell >{row.fat}</StyledTableCell>
                                        <StyledTableCell >{row.carbs}</StyledTableCell>
                                        <StyledTableCell align="right">{row.protein}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
            <Footer />
        </>
    )
}
