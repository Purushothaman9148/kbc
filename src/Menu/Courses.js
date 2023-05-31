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

            {/* <div className='coursetable'>
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
            </div> */}
            {/* <div>
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

            </div> */}
            <div style={{
                padding: '40px'
            }}>
                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '6.0pt', marginBottom: '0cm', lineHeight: '115%' }}><strong><span style={{ fontSize: '19px', lineHeight: '115%', fontFamily: '"Times New Roman",serif' }}>RESIDENTIAL COURSES</span></strong></p>
                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '6.0pt', marginBottom: '0cm', lineHeight: '115%' }}><strong><u><span style={{ fontSize: '19px', lineHeight: '115%', fontFamily: '"Times New Roman",serif' }}><span style={{ textDecoration: 'none' }}>&nbsp;</span></span></u></strong></p>
                <div style={{ marginTop: '0cm', marginRight: '0cm', marginBottom: '8.0pt', marginLeft: '0cm', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif' }}>
                    <ol start={1} style={{ marginBottom: '0cm', listStyleType: 'upper-alpha' }}>
                        <li style={{ marginTop: '0cm', marginRight: '0cm', marginBottom: '8.0pt', marginLeft: '0cm', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif' }}><strong><u><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>Master of Divinity (M.Div)</span></u></strong></li>
                    </ol>
                </div>
                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%', textIndent: '36.0pt' }}><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>Master of Divinity is a Post-graduate degree offered to develop Christian Leadership for the different levels of the Church- at-large with a vision and skills to enhance Christian thinking, mobilize the church in Ministry, and complete the responsibility of making disciples of all peoples within the context of Karnataka and our nation, India.</span></p>
                <div style={{ marginTop: '0cm', marginRight: '0cm', marginBottom: '8.0pt', marginLeft: '0cm', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif' }}>
                    <ol start={1} style={{ marginBottom: '0cm', listStyleType: 'lower-alpha', marginLeft: '62px' }}>
                        <li style={{ marginTop: '0cm', marginRight: '0cm', marginBottom: '8.0pt', marginLeft: '0cm', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif' }}><strong><span style={{ fontSize: '19px' }}>Entrance Requirements:&nbsp;</span></strong></li>
                    </ol>
                </div>
                <p style={{ marginRight: '0cm', marginLeft: '70.9pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%', textIndent: '-14.2pt' }}><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></p>
                <p style={{ marginRight: '0cm', marginLeft: '70.9pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%', textIndent: '-14.2pt' }}><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>1. Graduate from a recognized University or its equivalence (3 years).</span></p>
                {/* <p style={{ marginRight: '0cm', marginLeft: '70.9pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%', textIndent: '-14.2pt' }}><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>2. B.Th. passed with minimum B grade (2 Years).&nbsp;</span></p>
                <p style={{ marginRight: '0cm', marginLeft: '70.9pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%', textIndent: '-14.2pt' }}><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>3. The candidate has to pass the Entrance Examination in Advanced English, the Bible and the General Knowledge.</span></p>
                <p style={{ marginRight: '0cm', marginLeft: '70.9pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%', textIndent: '-14.2pt' }}><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>4. Satisfaction of the Admission Committee on the candidate’s academic, Spiritual and character credentials.</span></p>
                <p style={{ marginRight: '0cm', marginLeft: '72.0pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p> */}
                <div style={{ marginTop: '0cm', marginRight: '0cm', marginBottom: '8.0pt', marginLeft: '0cm', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif' }}>
                    <ol start={2} style={{ marginBottom: '0cm', listStyleType: 'lower-alpha', marginLeft: '62px' }}>
                        <li style={{ marginTop: '0cm', marginRight: '0cm', marginBottom: '8.0pt', marginLeft: '0cm', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif' }}><strong><span style={{ fontSize: '19px' }}>Graduation Requirements:</span></strong></li>
                    </ol>
                </div>
                <p style={{ marginRight: '0cm', marginLeft: '72.0pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                <ol style={{ listStyleType: 'decimal', marginLeft: '60.900000000000006px' }}>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>&nbsp;For 2or 3 years M. Div program, minimum 110 credits and pass in all subjects.&nbsp;</span></li>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>&nbsp;Evidence of maturity in spiritual life and conduct.&nbsp;</span></li>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Satisfactory completion of the Practical Ministry requirements.&nbsp;</span></li>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Clear all the college fees.&nbsp;</span></li>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Attendance must be minimum 80%.&nbsp;</span></li>
                </ol>
                <p style={{ marginRight: '0cm', marginLeft: '72.0pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                <div style={{ marginTop: '0cm', marginRight: '0cm', marginBottom: '8.0pt', marginLeft: '0cm', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif' }}>
                    <ol start={3} style={{ marginBottom: '0cm', listStyleType: 'lower-alpha', marginLeft: '62px' }}>
                        <li style={{ marginTop: '0cm', marginRight: '0cm', marginBottom: '8.0pt', marginLeft: '0cm', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif' }}><strong><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Academic Requirements:</span></strong></li>
                    </ol>
                </div>
                <p style={{ marginRight: '0cm', marginLeft: '72.0pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                <p style={{ marginRight: '0cm', marginLeft: '70.9pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%', textIndent: '-14.2pt' }}><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>1. Medium of instruction is in English&nbsp;</span></p>
                <p style={{ marginRight: '0cm', marginLeft: '70.9pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%', textIndent: '-14.2pt' }}><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>2. Credit hours - 110</span></p>
                <p style={{ marginRight: '0cm', marginLeft: '70.9pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%', textIndent: '-14.2pt' }}><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>3. Four days of regular classes and Three days of practical ministry.</span></p>
                <p style={{ marginRight: '0cm', marginLeft: '70.9pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%', textIndent: '-14.2pt' }}><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>4. M. Div students are required to write a thesis of 50 pages in your interested area of research.</span></p>
                <p style={{ marginRight: '0cm', marginLeft: '70.9pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%', textIndent: '-14.2pt' }}><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>5. An assignment of practical ministry involvement.</span></p>
                <p style={{ marginRight: '0cm', marginLeft: '72.0pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                <p style={{ marginRight: '0cm', marginLeft: '72.0pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                <p style={{ marginRight: '0cm', marginLeft: '72.0pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                <ol start={4} style={{ listStyleType: 'lower-alpha', marginLeft: '62px' }}>
                    <li><strong><span style={{ fontSize: '19px' }}>Fees Structure:<br />&nbsp;<br />&nbsp;</span></strong></li>
                </ol>
                <ol style={{ listStyleType: 'decimal', marginLeft: '60.900000000000006px' }}>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Admission Fee&nbsp; &nbsp; &nbsp; &nbsp;-&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;500/-</span></li>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Tuition Fee&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;- &nbsp; &nbsp; &nbsp; &nbsp;25, 000/-</span></li>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Library Fee&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;- &nbsp; &nbsp; &nbsp; &nbsp;1000/-</span></li>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Graduation Fee &nbsp; &nbsp;&nbsp;&nbsp;- &nbsp; &nbsp; &nbsp; &nbsp; 500/-</span></li>
                </ol>
                <p style={{ marginRight: '0cm', marginLeft: '72.0pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></p>
                <div style={{ marginTop: '0cm', marginRight: '0cm', marginBottom: '8.0pt', marginLeft: '0cm', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif' }}>
                    <ol start={5} style={{ marginBottom: '0cm', listStyleType: 'lower-alpha', marginLeft: '62px' }}>
                        <li style={{ marginTop: '0cm', marginRight: '0cm', marginBottom: '8.0pt', marginLeft: '0cm', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif' }}><strong><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Curriculum:</span></strong></li>
                    </ol>
                </div>
                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%', textAlign: 'center' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>MASTER OF DIVINITY SUBJECTS</span></strong></p>
                <p style={{ marginRight: '0cm', marginLeft: '36.0pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%' }}><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif', color: 'red' }}>&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FIRST YEAR</span></p>
                <table style={{ marginLeft: '26.7pt', borderCollapse: 'collapse', border: 'none' }}>
                    <tbody>
                        <tr>
                            <td style={{ width: '34pt', border: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></p>
                            </td>
                            <td style={{ width: '134.7pt', borderTop: '1pt solid windowtext', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderImage: 'initial', borderLeft: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><strong><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>1<sup>st</sup> Semester</span></strong></p>
                            </td>
                            <td style={{ width: '42.5pt', borderTop: '1pt solid windowtext', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderImage: 'initial', borderLeft: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><strong><span style={{ fontSize: '13px', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                            </td>
                            <td style={{ width: '35.45pt', borderTop: '1pt solid windowtext', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderImage: 'initial', borderLeft: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></p>
                            </td>
                            <td style={{ width: '5cm', borderTop: '1pt solid windowtext', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderImage: 'initial', borderLeft: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><strong><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>2<sup>nd</sup> Semester</span></strong></p>
                            </td>
                            <td style={{ width: '42.5pt', borderTop: '1pt solid windowtext', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderImage: 'initial', borderLeft: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><strong><span style={{ fontSize: '13px', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '34pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><strong><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>No.</span></strong></p>
                            </td>
                            <td style={{ width: '134.7pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><strong><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>Subject Name</span></strong></p>
                            </td>
                            <td style={{ width: '42.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><strong><span style={{ fontSize: '13px', fontFamily: '"Times New Roman",serif' }}>Credit Hour</span></strong></p>
                            </td>
                            <td style={{ width: '35.45pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><strong><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>No.</span></strong></p>
                            </td>
                            <td style={{ width: '5cm', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><strong><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>Subject Name</span></strong></p>
                            </td>
                            <td style={{ width: '42.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><strong><span style={{ fontSize: '13px', fontFamily: '"Times New Roman",serif' }}>Credit Hour</span></strong></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '34pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>1.</span></p>
                            </td>
                            <td style={{ width: '134.7pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Introduction to Bible</span></p>
                            </td>
                            <td style={{ width: '42.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '35.45pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>1.</span></p>
                            </td>
                            <td style={{ width: '5cm', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Times New Roman",serif' }}>Church Planting &amp; Administration</span></p>
                            </td>
                            <td style={{ width: '42.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '34pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>2.</span></p>
                            </td>
                            <td style={{ width: '134.7pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Introduction to Mission</span></p>
                            </td>
                            <td style={{ width: '42.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '35.45pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>2.</span></p>
                            </td>
                            <td style={{ width: '5cm', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Times New Roman",serif' }}>Romans</span></p>
                            </td>
                            <td style={{ width: '42.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '34pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3.</span></p>
                            </td>
                            <td style={{ width: '134.7pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Research Methods</span></p>
                            </td>
                            <td style={{ width: '42.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '35.45pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3.</span></p>
                            </td>
                            <td style={{ width: '5cm', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Times New Roman",serif' }}>Major World Religions</span></p>
                            </td>
                            <td style={{ width: '42.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '34pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>4.</span></p>
                            </td>
                            <td style={{ width: '134.7pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Spiritual Formation</span></p>
                            </td>
                            <td style={{ width: '42.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '35.45pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>4.</span></p>
                            </td>
                            <td style={{ width: '5cm', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Times New Roman",serif' }}>Hermeneutics</span></p>
                            </td>
                            <td style={{ width: '42.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '34pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>5.</span></p>
                            </td>
                            <td style={{ width: '134.7pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Acts of the Apostles</span></p>
                            </td>
                            <td style={{ width: '42.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '35.45pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>5.</span></p>
                            </td>
                            <td style={{ width: '5cm', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Times New Roman",serif' }}>Synoptic Gospels</span></p>
                            </td>
                            <td style={{ width: '42.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '34pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>6.</span></p>
                            </td>
                            <td style={{ width: '134.7pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>English I</span></p>
                            </td>
                            <td style={{ width: '42.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '35.45pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>6.</span></p>
                            </td>
                            <td style={{ width: '5cm', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Times New Roman",serif' }}>Advanced English</span></p>
                            </td>
                            <td style={{ width: '42.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%', textAlign: 'center' }}><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif', color: 'red' }}><br />&nbsp;SECOND YEAR</span></p>
                <table style={{ marginLeft: '26.7pt', borderCollapse: 'collapse', border: 'none' }}>
                    <tbody>
                        <tr>
                            <td style={{ width: '33.75pt', border: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>1.</span></p>
                            </td>
                            <td style={{ width: '134.7pt', borderTop: '1pt solid windowtext', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderImage: 'initial', borderLeft: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Theology I</span></p>
                            </td>
                            <td style={{ width: '42.5pt', borderTop: '1pt solid windowtext', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderImage: 'initial', borderLeft: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '35.45pt', borderTop: '1pt solid windowtext', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderImage: 'initial', borderLeft: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>1.</span></p>
                            </td>
                            <td style={{ width: '5cm', borderTop: '1pt solid windowtext', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderImage: 'initial', borderLeft: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Theology II</span></p>
                            </td>
                            <td style={{ width: '42.5pt', borderTop: '1pt solid windowtext', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderImage: 'initial', borderLeft: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '33.75pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>2.</span></p>
                            </td>
                            <td style={{ width: '134.7pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Greek I</span></p>
                            </td>
                            <td style={{ width: '42.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '35.45pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>2.</span></p>
                            </td>
                            <td style={{ width: '5cm', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Hebrew Language I</span></p>
                            </td>
                            <td style={{ width: '42.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '33.75pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3.</span></p>
                            </td>
                            <td style={{ width: '134.7pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Pastoral Care and &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Counselling</span></p>
                            </td>
                            <td style={{ width: '42.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '35.45pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3.</span></p>
                            </td>
                            <td style={{ width: '5cm', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Historical Books</span></p>
                            </td>
                            <td style={{ width: '42.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '33.75pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>4.</span></p>
                            </td>
                            <td style={{ width: '134.7pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Prophetic Books</span></p>
                            </td>
                            <td style={{ width: '42.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '35.45pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>4.</span></p>
                            </td>
                            <td style={{ width: '5cm', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Pauline Thought</span></p>
                            </td>
                            <td style={{ width: '42.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '33.75pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>5.</span></p>
                            </td>
                            <td style={{ width: '134.7pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Pentateuch</span></p>
                            </td>
                            <td style={{ width: '42.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '35.45pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>5.</span></p>
                            </td>
                            <td style={{ width: '5cm', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Homiletics</span></p>
                            </td>
                            <td style={{ width: '42.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '33.75pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>6.</span></p>
                            </td>
                            <td style={{ width: '134.7pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Pentecostal Movement</span></p>
                            </td>
                            <td style={{ width: '42.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '35.45pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>6.</span></p>
                            </td>
                            <td style={{ width: '5cm', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Indian Church History</span></p>
                            </td>
                            <td style={{ width: '42.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '33.75pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>7.</span></p>
                            </td>
                            <td style={{ width: '134.7pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>History of Christianity I</span></p>
                            </td>
                            <td style={{ width: '42.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '35.45pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>7.</span></p>
                            </td>
                            <td style={{ width: '5cm', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>History of Christianity II</span></p>
                            </td>
                            <td style={{ width: '42.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%', textAlign: 'center' }}><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif', color: 'red' }}><br />&nbsp;THIRD YEAR</span></p>
                <table style={{ width: '430.65pt', marginLeft: '26.7pt', borderCollapse: 'collapse', border: 'none' }}>
                    <tbody>
                        <tr>
                            <td style={{ width: '33.75pt', border: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>1.</span></p>
                            </td>
                            <td style={{ width: '134.7pt', borderTop: '1pt solid windowtext', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderImage: 'initial', borderLeft: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>O.T Theology</span></p>
                            </td>
                            <td style={{ width: '42.9pt', borderTop: '1pt solid windowtext', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderImage: 'initial', borderLeft: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '35.05pt', borderTop: '1pt solid windowtext', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderImage: 'initial', borderLeft: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>1.</span></p>
                            </td>
                            <td style={{ width: '5cm', borderTop: '1pt solid windowtext', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderImage: 'initial', borderLeft: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>N.T Theology</span></p>
                            </td>
                            <td style={{ width: '42.5pt', borderTop: '1pt solid windowtext', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderImage: 'initial', borderLeft: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '33.75pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>2.</span></p>
                            </td>
                            <td style={{ width: '134.7pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Hebrew Poetry &amp; Wisdom Literature</span></p>
                            </td>
                            <td style={{ width: '42.9pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '35.05pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>2.</span></p>
                            </td>
                            <td style={{ width: '5cm', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Contemporary</span></p>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Trends of Mission</span></p>
                            </td>
                            <td style={{ width: '42.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '33.75pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3.</span></p>
                            </td>
                            <td style={{ width: '134.7pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Johannine Thought</span></p>
                            </td>
                            <td style={{ width: '42.9pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '35.05pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3.</span></p>
                            </td>
                            <td style={{ width: '5cm', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Christian Ethics</span></p>
                            </td>
                            <td style={{ width: '42.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '33.75pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>4.</span></p>
                            </td>
                            <td style={{ width: '134.7pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Urban and Tribal Mission</span></p>
                            </td>
                            <td style={{ width: '42.9pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '35.05pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>4.</span></p>
                            </td>
                            <td style={{ width: '5cm', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Cultural Anthropology</span></p>
                            </td>
                            <td style={{ width: '42.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '33.75pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>5.</span></p>
                            </td>
                            <td style={{ width: '134.7pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Theology of Mission</span></p>
                            </td>
                            <td style={{ width: '42.9pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '35.05pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>5.</span></p>
                            </td>
                            <td style={{ width: '5cm', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Apocalyptic Literature</span></p>
                            </td>
                            <td style={{ width: '42.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '33.75pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>6.</span></p>
                            </td>
                            <td style={{ width: '134.7pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>MRSM</span></p>
                            </td>
                            <td style={{ width: '42.9pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '35.05pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>6.</span></p>
                            </td>
                            <td style={{ width: '5cm', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Apologetics</span></p>
                            </td>
                            <td style={{ width: '42.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '33.75pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>7.</span></p>
                            </td>
                            <td style={{ width: '134.7pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Thesis</span></p>
                            </td>
                            <td style={{ width: '42.9pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></p>
                            </td>
                            <td style={{ width: '35.05pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></p>
                            </td>
                            <td style={{ width: '5cm', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Thesis</span></p>
                            </td>
                            <td style={{ width: '42.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div style={{ marginTop: '0cm', marginRight: '0cm', marginBottom: '8.0pt', marginLeft: '0cm', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif' }}>
                    <ol start={2} style={{ marginBottom: '0cm', listStyleType: 'upper-alpha' }}>
                        <li style={{ marginTop: '0cm', marginRight: '0cm', marginBottom: '8.0pt', marginLeft: '0cm', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif' }}><strong><u><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>Bachelor of Theology (B.Th)</span></u></strong></li>
                    </ol>
                </div>
                <p style={{ marginRight: '0cm', marginLeft: '36.0pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                <div style={{ marginTop: '0cm', marginRight: '0cm', marginBottom: '8.0pt', marginLeft: '0cm', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif' }}>
                    <ol start={1} style={{ marginBottom: '0cm', listStyleType: 'lower-alpha', marginLeft: '44px' }}>
                        <li style={{ marginTop: '0cm', marginRight: '0cm', marginBottom: '8.0pt', marginLeft: '0cm', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif' }}><strong><span style={{ fontSize: '14.0pt' }}>Entrance Requirements:&nbsp;</span></strong></li>
                    </ol>
                </div>
                <p style={{ marginRight: '0cm', marginLeft: '93.8pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></p>
                <ol style={{ listStyleType: 'decimal', marginLeft: '80px' }}>
                    <li><span style={{ fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Duration of Study- 3 years</span></li>
                    <li><span style={{ fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Medium- English/ Kannada</span></li>
                    <li><span style={{ fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Qualification: SSLC, +2 pass or Dip.Th and its equivalent from recognized Board/Institution.</span></li>
                    <li><span style={{ fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>The candidate has to pass in the Entrance examination conducted by the college.</span></li>
                </ol>
                <p style={{ marginRight: '0cm', marginLeft: '90.0pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></p>
                <div style={{ marginTop: '0cm', marginRight: '0cm', marginBottom: '8.0pt', marginLeft: '0cm', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif' }}>
                    <ol start={2} style={{ marginBottom: '0cm', listStyleType: 'lower-alpha', marginLeft: '44px' }}>
                        <li style={{ marginTop: '0cm', marginRight: '0cm', marginBottom: '8.0pt', marginLeft: '0cm', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif' }}><strong><span style={{ fontSize: '19px' }}>Graduation Requirements</span></strong><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>:</span></li>
                    </ol>
                </div>
                <p style={{ marginRight: '0cm', marginLeft: '54.0pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%' }}><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></p>
                <p style={{ marginRight: '0cm', marginLeft: '36.0pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%', textIndent: '36.0pt' }}><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>1. For 3 years of B.Th. program, minimum 120 credits and pass in all subjects.</span></p>
                <p style={{ marginRight: '0cm', marginLeft: '36.0pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%', textIndent: '36.0pt' }}><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>2. Evidence of maturity in spiritual life and conduct.&nbsp;</span></p>
                <p style={{ marginRight: '0cm', marginLeft: '36.0pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%', textIndent: '36.0pt' }}><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>3. Satisfactory completion of the Practical Ministry requirements.&nbsp;</span></p>
                <p style={{ marginRight: '0cm', marginLeft: '36.0pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%', textIndent: '36.0pt' }}><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>4. Student(s) who could not meet the above graduation requirements but has completed the course work can be given completion certificate on the recommendation of the faculty.</span></p>
                <div style={{ marginTop: '0cm', marginRight: '0cm', marginBottom: '8.0pt', marginLeft: '0cm', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif' }}>
                    <ol style={{ marginBottom: '0cm', listStyleType: 'undefined', marginLeft: '80px' }}>
                        <li style={{ marginTop: '0cm', marginRight: '0cm', marginBottom: '8.0pt', marginLeft: '0cm', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif' }}><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Attendance must be minimum 85%.&nbsp;</span></li>
                    </ol>
                </div>
                <p style={{ marginRight: '0cm', marginLeft: '92.15pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></p>
                <ol start={3} style={{ listStyleType: 'lower-alpha', marginLeft: '44px' }}>
                    <li><strong><span style={{ fontSize: '19px' }}>Academic Requirements:</span></strong>
                        <ol style={{ listStyleType: 'decimal' }}>
                            <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Medium of instruction is in English.</span></li>
                            <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Credit hours -120 hrs.</span></li>
                            <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Four days of regular classes and three days practical ministry.</span></li>
                            <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>B.Th. students are required to write an assignment as decided by the teachers.</span></li>
                            <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>An assignment of practical ministry involvement.</span></li>
                        </ol>
                    </li>
                </ol>
                <p style={{ marginRight: '0cm', marginLeft: '92.15pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></p>
                <ol start={4} style={{ listStyleType: 'lower-alpha', marginLeft: '44px' }}>
                    <li><strong><span style={{ fontSize: '19px' }}>Fees Structure :</span></strong>
                        <ol style={{ listStyleType: 'decimal' }}>
                            <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Admission Fee &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;- &nbsp;500/-</span></li>
                            <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Tuition Fee&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;- Free</span></li>
                            <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Library Fee&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;- 1000/-</span></li>
                            <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Accommodation and Food&nbsp; &nbsp;- 5,000/-</span></li>
                            <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Graduation Fee&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;- &nbsp; 500/-</span></li>
                        </ol>
                    </li>
                </ol>
                <p style={{ marginRight: '0cm', marginLeft: '92.15pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></p>
                <p style={{ marginRight: '0cm', marginLeft: '92.15pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></p>
                {/* <p style={{ marginRight: '0cm', marginLeft: '92.15pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></p>
                <p style={{ marginRight: '0cm', marginLeft: '92.15pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></p> */}
                <div style={{ marginTop: '0cm', marginRight: '0cm', marginBottom: '8.0pt', marginLeft: '0cm', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif' }}>
                    <ol start={5} style={{ marginBottom: '0cm', listStyleType: 'lower-alpha', marginLeft: '44px' }}>
                        <li style={{ marginTop: '0cm', marginRight: '0cm', marginBottom: '8.0pt', marginLeft: '0cm', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif' }}><strong><span style={{ fontSize: '19px' }}>Curriculum:</span></strong></li>
                    </ol>
                </div>
                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%', textAlign: 'center' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif', color: 'black' }}>BACHELOR OF THEOLOGY SUBJECTS</span></strong></p>
                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%', textAlign: 'center' }}><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif', color: 'red' }}>First year&nbsp;</span></p>
                <table style={{ marginLeft: '26.7pt', borderCollapse: 'collapse', border: 'none' }}>
                    <tbody>
                        <tr>
                            <td colSpan={6} style={{ width: '435.4pt', border: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; SEMESTER – 1 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; SEMESTER -2</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '62.2pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', height: '37.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><strong><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>No.</span></strong></p>
                            </td>
                            <td style={{ width: '96.05pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '37.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><strong><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>Subject&nbsp;</span></strong></p>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><strong><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>Name</span></strong></p>
                            </td>
                            <td style={{ width: '62.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '37.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><strong><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>Credit Hr</span></strong></p>
                            </td>
                            <td style={{ width: '48.4pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '37.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><strong><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>No.</span></strong></p>
                            </td>
                            <td style={{ width: '89.9pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '37.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><strong><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>Subject Name</span></strong></p>
                            </td>
                            <td style={{ width: '76.1pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '37.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><strong><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>Credit Hr</span></strong></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '62.2pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', height: '18.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>1.</span></p>
                            </td>
                            <td style={{ width: '96.05pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Introduction to bible&nbsp;</span></p>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>&nbsp;</span></p>
                            </td>
                            <td style={{ width: '62.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontFamily: '"Arial Narrow",sans-serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '48.4pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontFamily: '"Arial Narrow",sans-serif' }}>1.</span></p>
                            </td>
                            <td style={{ width: '89.9pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Synoptic Gospel &nbsp;</span></p>
                            </td>
                            <td style={{ width: '76.1pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '62.2pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', height: '18.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>2.</span></p>
                            </td>
                            <td style={{ width: '96.05pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Book of Acts</span></p>
                            </td>
                            <td style={{ width: '62.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontFamily: '"Arial Narrow",sans-serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '48.4pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontFamily: '"Arial Narrow",sans-serif' }}>2.</span></p>
                            </td>
                            <td style={{ width: '89.9pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>&nbsp;Romans &amp; Galatians &nbsp;</span></p>
                            </td>
                            <td style={{ width: '76.1pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '62.2pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', height: '18.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3.</span></p>
                            </td>
                            <td style={{ width: '96.05pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif', color: 'black', background: 'white' }}>OT Survey&nbsp;</span></p>
                            </td>
                            <td style={{ width: '62.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontFamily: '"Arial Narrow",sans-serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '48.4pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontFamily: '"Arial Narrow",sans-serif' }}>3.</span></p>
                            </td>
                            <td style={{ width: '89.9pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>N.T. Survey&nbsp;</span></p>
                            </td>
                            <td style={{ width: '76.1pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '62.2pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', height: '37.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>4.</span></p>
                            </td>
                            <td style={{ width: '96.05pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '37.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Life and ministry of Jesus Christ&nbsp;</span></p>
                            </td>
                            <td style={{ width: '62.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '37.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontFamily: '"Arial Narrow",sans-serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '48.4pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '37.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontFamily: '"Arial Narrow",sans-serif' }}>4.</span></p>
                            </td>
                            <td style={{ width: '89.9pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '37.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Systematic Theology -1</span></p>
                            </td>
                            <td style={{ width: '76.1pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '37.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '62.2pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', height: '18.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>5.</span></p>
                            </td>
                            <td style={{ width: '96.05pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif', color: '#333333', background: 'white' }}>Discipleship&nbsp;</span></p>
                            </td>
                            <td style={{ width: '62.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontFamily: '"Arial Narrow",sans-serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '48.4pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontFamily: '"Arial Narrow",sans-serif' }}>5.</span></p>
                            </td>
                            <td style={{ width: '89.9pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Intro. Christian &nbsp;Education</span></p>
                            </td>
                            <td style={{ width: '76.1pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '62.2pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', height: '23.25pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>6.</span></p>
                            </td>
                            <td style={{ width: '96.05pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '23.25pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Pentateuch</span></p>
                            </td>
                            <td style={{ width: '62.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '23.25pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontFamily: '"Arial Narrow",sans-serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '48.4pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '23.25pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontFamily: '"Arial Narrow",sans-serif' }}>6.</span></p>
                            </td>
                            <td style={{ width: '89.9pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '23.25pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Church History- I</span></p>
                            </td>
                            <td style={{ width: '76.1pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '23.25pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '62.2pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', height: '18.55pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>7.</span></p>
                            </td>
                            <td style={{ width: '96.05pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.55pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif', color: '#333333', background: '#F9F9F9' }}>English grammar&nbsp;</span></p>
                            </td>
                            <td style={{ width: '62.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.55pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontFamily: '"Arial Narrow",sans-serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '48.4pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.55pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontFamily: '"Arial Narrow",sans-serif' }}>7</span></p>
                            </td>
                            <td style={{ width: '89.9pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.55pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>History of Israel&nbsp;</span></p>
                            </td>
                            <td style={{ width: '76.1pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.55pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '21px', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '62.2pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', height: '18.55pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>8.&nbsp;</span></p>
                            </td>
                            <td style={{ width: '96.05pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.55pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif', color: '#333333', background: '#F9F9F9' }}>Bible Character</span></p>
                            </td>
                            <td style={{ width: '62.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.55pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontFamily: '"Arial Narrow",sans-serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '48.4pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.55pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontFamily: '"Arial Narrow",sans-serif' }}>8.</span></p>
                            </td>
                            <td style={{ width: '89.9pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.55pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Intro. to Mission</span></p>
                            </td>
                            <td style={{ width: '76.1pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.55pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '21px', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%', textAlign: 'center' }}><strong><span style={{ fontSize: '21px', lineHeight: '107%', fontFamily: '"Times New Roman",serif', color: 'red' }}>&nbsp;</span></strong></p>
                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%', textAlign: 'center' }}><strong><span style={{ fontSize: '21px', lineHeight: '107%', fontFamily: '"Times New Roman",serif', color: 'red' }}>B Th&nbsp;</span></strong><span style={{ fontSize: '21px', lineHeight: '107%', fontFamily: '"Times New Roman",serif', color: 'red' }}>Second Year&nbsp;</span></p>
                <table style={{ marginLeft: '26.7pt', borderCollapse: 'collapse', border: 'none' }}>
                    <tbody>
                        <tr>
                            <td colSpan={6} style={{ width: '435.4pt', border: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '21px', fontFamily: '"Times New Roman",serif' }}>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; SEMESTER – 1 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; SEMESTER -2</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '62.25pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', height: '37.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><strong><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>No.</span></strong></p>
                            </td>
                            <td style={{ width: '96.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '37.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><strong><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>Subject&nbsp;</span></strong></p>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><strong><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>Name</span></strong></p>
                            </td>
                            <td style={{ width: '62.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '37.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><strong><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>Credit Hr</span></strong></p>
                            </td>
                            <td style={{ width: '48.4pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '37.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><strong><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>No.</span></strong></p>
                            </td>
                            <td style={{ width: '89.8pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '37.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><strong><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>Subject Name</span></strong></p>
                            </td>
                            <td style={{ width: '75.85pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '37.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><strong><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>Credit Hr</span></strong></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '62.25pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', height: '18.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>1.</span></p>
                            </td>
                            <td style={{ width: '96.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Historical books &nbsp;</span></p>
                            </td>
                            <td style={{ width: '62.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '48.4pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>1.</span></p>
                            </td>
                            <td style={{ width: '89.8pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Daniel and Revelation&nbsp;</span></p>
                            </td>
                            <td style={{ width: '75.85pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '62.25pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', height: '18.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>2.</span></p>
                            </td>
                            <td style={{ width: '96.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Systematic&nbsp;</span></p>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Theology-ll&nbsp;</span></p>
                            </td>
                            <td style={{ width: '62.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '48.4pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>2.</span></p>
                            </td>
                            <td style={{ width: '89.8pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Indian church history&nbsp;</span></p>
                            </td>
                            <td style={{ width: '75.85pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '62.25pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', height: '18.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3.</span></p>
                            </td>
                            <td style={{ width: '96.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Church history -11</span></p>
                            </td>
                            <td style={{ width: '62.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '48.4pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3.</span></p>
                            </td>
                            <td style={{ width: '89.8pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Gospel of John&nbsp;</span></p>
                            </td>
                            <td style={{ width: '75.85pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '62.25pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', height: '20.65pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>4.</span></p>
                            </td>
                            <td style={{ width: '96.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '20.65pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Minor prophets&nbsp;</span></p>
                            </td>
                            <td style={{ width: '62.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '20.65pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '48.4pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '20.65pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>4.</span></p>
                            </td>
                            <td style={{ width: '89.8pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '20.65pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Major prophets&nbsp;</span></p>
                            </td>
                            <td style={{ width: '75.85pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '20.65pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '62.25pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', height: '18.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>5.</span></p>
                            </td>
                            <td style={{ width: '96.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Research methods</span></p>
                            </td>
                            <td style={{ width: '62.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '48.4pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>5.</span></p>
                            </td>
                            <td style={{ width: '89.8pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Pastoral epistles&nbsp;</span></p>
                            </td>
                            <td style={{ width: '75.85pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '62.25pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', height: '23.25pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>6.</span></p>
                            </td>
                            <td style={{ width: '96.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '23.25pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif', color: '#333333', background: '#F9F9F9' }}>Hermeneutics&nbsp;</span></p>
                            </td>
                            <td style={{ width: '62.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '23.25pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '48.4pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '23.25pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>6.</span></p>
                            </td>
                            <td style={{ width: '89.8pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '23.25pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Spiritual leadership&nbsp;</span></p>
                            </td>
                            <td style={{ width: '75.85pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '23.25pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '62.25pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', height: '18.55pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>7.</span></p>
                            </td>
                            <td style={{ width: '96.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.55pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif', color: 'black' }}>General epistles&nbsp;</span></p>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif', color: '#333333', background: '#F9F9F9' }}>&nbsp;</span></p>
                            </td>
                            <td style={{ width: '62.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.55pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontFamily: '"Arial Narrow",sans-serif' }}>&nbsp;</span></p>
                            </td>
                            <td style={{ width: '48.4pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.55pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>7.</span></p>
                            </td>
                            <td style={{ width: '89.8pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.55pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Homiletics&nbsp;</span></p>
                            </td>
                            <td style={{ width: '75.85pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.55pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '21px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '62.25pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', height: '18.55pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>8.</span></p>
                            </td>
                            <td style={{ width: '96.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.55pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif', color: 'black' }}>Evangelism and Church Planting</span></p>
                            </td>
                            <td style={{ width: '62.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.55pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontFamily: '"Arial Narrow",sans-serif' }}>&nbsp;</span></p>
                            </td>
                            <td style={{ width: '48.4pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.55pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif', color: 'black' }}>8.</span></p>
                            </td>
                            <td style={{ width: '89.8pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.55pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif', color: 'black' }}>Pastoral Theology &nbsp; &nbsp; &nbsp;&nbsp;</span></p>
                            </td>
                            <td style={{ width: '75.85pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.55pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '21px', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%', textAlign: 'center' }}><span style={{ fontSize: '21px', lineHeight: '107%', fontFamily: '"Times New Roman",serif', color: 'red' }}>&nbsp;</span></p>
                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%', textAlign: 'center' }}><span style={{ fontSize: '21px', lineHeight: '107%', fontFamily: '"Times New Roman",serif', color: 'red' }}>B.Th Third Year</span></p>
                <table style={{ marginLeft: '26.7pt', borderCollapse: 'collapse', border: 'none' }}>
                    <tbody>
                        <tr>
                            <td colSpan={6} style={{ width: '435.4pt', border: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '21px', fontFamily: '"Times New Roman",serif' }}>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; SEMESTER – 1 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; SEMESTER -2</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '62.25pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', height: '37.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>No.</span></p>
                            </td>
                            <td style={{ width: '95.9pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '37.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>Subject&nbsp;</span></p>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>Name</span></p>
                            </td>
                            <td style={{ width: '62.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '37.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>Credit Hr</span></p>
                            </td>
                            <td style={{ width: '48.4pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '37.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>No.</span></p>
                            </td>
                            <td style={{ width: '90.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '37.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>Subject Name</span></p>
                            </td>
                            <td style={{ width: '75.85pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '37.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>Credit Hr</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '62.25pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', height: '18.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>1.</span></p>
                            </td>
                            <td style={{ width: '95.9pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif', color: 'black' }}>Urban &amp; Rural Mission&nbsp;</span></p>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>&nbsp;</span></p>
                            </td>
                            <td style={{ width: '62.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontFamily: '"Arial Narrow",sans-serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '48.4pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontFamily: '"Arial Narrow",sans-serif' }}>1.</span></p>
                            </td>
                            <td style={{ width: '90.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>History of Pentecostal &amp; Charismatic Movement &nbsp; &nbsp;&nbsp;</span></p>
                            </td>
                            <td style={{ width: '75.85pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '62.25pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', height: '18.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>2.</span></p>
                            </td>
                            <td style={{ width: '95.9pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Book of Hebrews</span></p>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>&nbsp;</span></p>
                            </td>
                            <td style={{ width: '62.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontFamily: '"Arial Narrow",sans-serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '48.4pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontFamily: '"Arial Narrow",sans-serif' }}>2.</span></p>
                            </td>
                            <td style={{ width: '90.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Christian ethics&nbsp;</span></p>
                            </td>
                            <td style={{ width: '75.85pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '62.25pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', height: '18.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3.</span></p>
                            </td>
                            <td style={{ width: '95.9pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Life and ministry of Paul&nbsp;</span></p>
                            </td>
                            <td style={{ width: '62.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontFamily: '"Arial Narrow",sans-serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '48.4pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontFamily: '"Arial Narrow",sans-serif' }}>3.</span></p>
                            </td>
                            <td style={{ width: '90.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Christian biography&nbsp;</span></p>
                            </td>
                            <td style={{ width: '75.85pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '62.25pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', height: '37.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>4.</span></p>
                            </td>
                            <td style={{ width: '95.9pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '37.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Pastoral care and counselling&nbsp;</span></p>
                            </td>
                            <td style={{ width: '62.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '37.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontFamily: '"Arial Narrow",sans-serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '48.4pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '37.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontFamily: '"Arial Narrow",sans-serif' }}>4.</span></p>
                            </td>
                            <td style={{ width: '90.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '37.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif', color: 'black' }}>Apologetics&nbsp;</span></p>
                            </td>
                            <td style={{ width: '75.85pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '37.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '62.25pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', height: '18.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>5.</span></p>
                            </td>
                            <td style={{ width: '95.9pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif', color: 'black' }}>Major Religions</span></p>
                            </td>
                            <td style={{ width: '62.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontFamily: '"Arial Narrow",sans-serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '48.4pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontFamily: '"Arial Narrow",sans-serif' }}>5.</span></p>
                            </td>
                            <td style={{ width: '90.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif', color: 'black' }}>Cults, occults &amp; Heresies&nbsp;</span></p>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>&nbsp;</span></p>
                            </td>
                            <td style={{ width: '75.85pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.15pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '62.25pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', height: '23.25pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>6.</span></p>
                            </td>
                            <td style={{ width: '95.9pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '23.25pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif', color: '#333333', background: '#F9F9F9' }}>Preliminary Greek</span></p>
                            </td>
                            <td style={{ width: '62.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '23.25pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontFamily: '"Arial Narrow",sans-serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '48.4pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '23.25pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontFamily: '"Arial Narrow",sans-serif' }}>6.</span></p>
                            </td>
                            <td style={{ width: '90.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '23.25pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif', color: 'black' }}>Cultural Anthropology&nbsp;</span></p>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>&nbsp;</span></p>
                            </td>
                            <td style={{ width: '75.85pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '23.25pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '62.25pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', height: '18.55pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>7.</span></p>
                            </td>
                            <td style={{ width: '95.9pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.55pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif', color: '#333333', background: '#F9F9F9' }}>Prison Epistles</span></p>
                            </td>
                            <td style={{ width: '62.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.55pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontFamily: '"Arial Narrow",sans-serif' }}>&nbsp;</span></p>
                            </td>
                            <td style={{ width: '48.4pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.55pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontFamily: '"Arial Narrow",sans-serif' }}>7</span></p>
                            </td>
                            <td style={{ width: '90.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.55pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif', color: '#333333', background: '#F9F9F9' }}>Research Paper</span></p>
                            </td>
                            <td style={{ width: '75.85pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '18.55pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '21px', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p style={{ marginRight: '0cm', marginLeft: '21.3pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                <p style={{ marginRight: '0cm', marginLeft: '21.3pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                {/* <p style={{ marginRight: '0cm', marginLeft: '21.3pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                <p style={{ marginRight: '0cm', marginLeft: '21.3pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                <p style={{ marginRight: '0cm', marginLeft: '21.3pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                <p style={{ marginRight: '0cm', marginLeft: '21.3pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                <p style={{ marginRight: '0cm', marginLeft: '21.3pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                <p style={{ marginRight: '0cm', marginLeft: '21.3pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                <p style={{ marginRight: '0cm', marginLeft: '21.3pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                <p style={{ marginRight: '0cm', marginLeft: '21.3pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                <p style={{ marginRight: '0cm', marginLeft: '21.3pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                <p style={{ marginRight: '0cm', marginLeft: '21.3pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                <p style={{ marginRight: '0cm', marginLeft: '21.3pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                <p style={{ marginRight: '0cm', marginLeft: '21.3pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                <p style={{ marginRight: '0cm', marginLeft: '21.3pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                <p style={{ marginRight: '0cm', marginLeft: '21.3pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                <p style={{ marginRight: '0cm', marginLeft: '21.3pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                <p style={{ marginRight: '0cm', marginLeft: '21.3pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                <p style={{ marginRight: '0cm', marginLeft: '21.3pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                <p style={{ marginRight: '0cm', marginLeft: '21.3pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p> */}
                <div style={{ marginTop: '0cm', marginRight: '0cm', marginBottom: '8.0pt', marginLeft: '0cm', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif' }}>
                    <ol start={3} style={{ marginBottom: '0cm', listStyleType: 'upper-alpha' }}>
                        <li style={{ marginTop: '0cm', marginRight: '0cm', marginBottom: '8.0pt', marginLeft: '0cm', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif' }}><strong><u><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Diploma in Theology (Dip.Th.)</span></u></strong></li>
                    </ol>
                </div>
                <p style={{ marginRight: '0cm', marginLeft: '36.0pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                <ol start={1} style={{ listStyleType: 'lower-alpha', marginLeft: '44px' }}>
                    <li><strong><span style={{ fontSize: '19px' }}>Entrance Requirements:&nbsp;</span></strong></li>
                </ol>
                <ol style={{ listStyleType: 'decimal', marginLeft: '62px' }}>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Duration of Study- 2 years.</span></li>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Qualification: SSLC Pass.</span></li>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>The candidate has to pass the entrance exam conducted by college.</span></li>
                </ol>
                <p style={{ marginRight: '0cm', marginLeft: '96.0pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></p>
                <ol start={2} style={{ listStyleType: 'lower-alpha', marginLeft: '44px' }}>
                    <li><strong><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Academic Requirements:</span></strong></li>
                </ol>
                <ol style={{ listStyleType: 'decimal', marginLeft: '62px' }}>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Medium of instruction is in Kannada/ English.</span></li>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Credit hours -75 credits.</span></li>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>D.Th. students are required to write the assignments as decided by the teachers.</span></li>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>An assignment of practical ministry involvement.</span></li>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>The Classes will be held 5 days in a week.</span></li>
                </ol>
                <p style={{ marginRight: '0cm', marginLeft: '72.0pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                <ol start={3} style={{ listStyleType: 'lower-alpha', marginLeft: '44px' }}>
                    <li><strong><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Graduation Requirements</span></strong><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>:</span></li>
                </ol>
                <ol style={{ listStyleType: 'decimal', marginLeft: '62px' }}>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Minimum 75 credit hours and pass in all the subjects.</span></li>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Evidence of maturity in spiritual life and conduct.</span></li>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Satisfactory completion of the Practical Ministry requirements.</span></li>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Attendance must have minimum 80%.</span></li>
                </ol>
                <p style={{ marginRight: '0cm', marginLeft: '72.0pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                <ol start={4} style={{ listStyleType: 'lower-alpha', marginLeft: '44px' }}>
                    <li><strong><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Fees Structure</span></strong></li>
                </ol>
                <ol style={{ listStyleType: 'decimal', marginLeft: '47.3px' }}>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Admission Fee&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;- 500/-</span></li>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Graduation Fee&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;- 500/-</span></li>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Tuition Fee&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;- 200/month</span></li>
                </ol>
                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                {/* <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                <p style={{ marginRight: '0cm', marginLeft: '39.3pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p> */}
                <div style={{ marginTop: '0cm', marginRight: '0cm', marginBottom: '8.0pt', marginLeft: '0cm', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif' }}>
                    <ol start={5} style={{ marginBottom: '0cm', listStyleType: 'lower-alpha', marginLeft: '44px' }}>
                        <li style={{ marginTop: '0cm', marginRight: '0cm', marginBottom: '8.0pt', marginLeft: '0cm', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif' }}><strong><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Curriculum</span></strong></li>
                    </ol>
                </div>
                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%', textAlign: 'center' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif', color: 'black' }}>DIPLOMA IN THEOLOGY SUBJECTS</span></strong></p>
                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%', textAlign: 'center' }}><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif', color: 'red' }}>English/ Kannada/ Malayalam</span></p>
                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%', textAlign: 'center' }}><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif', color: 'red' }}>First year</span></p>
                <table style={{ marginLeft: '19.6pt', borderCollapse: 'collapse', border: 'none' }}>
                    <tbody>
                        <tr>
                            <td colSpan={6} style={{ width: '442.5pt', border: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '21px', fontFamily: '"Times New Roman",serif' }}>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; SEMESTER – 1 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; SEMESTER -2</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '63.55pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><strong><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>No.</span></strong></p>
                            </td>
                            <td style={{ width: '97.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><strong><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>Subject&nbsp;</span></strong></p>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><strong><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>Name</span></strong></p>
                            </td>
                            <td style={{ width: '63.35pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><strong><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>Credit Hr</span></strong></p>
                            </td>
                            <td style={{ width: '49.15pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><strong><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>No.</span></strong></p>
                            </td>
                            <td style={{ width: '91.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><strong><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>Subject Name</span></strong></p>
                            </td>
                            <td style={{ width: '77.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><strong><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>Credit Hr</span></strong></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '63.55pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>1.</span></p>
                            </td>
                            <td style={{ width: '97.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Life and ministry of Christ&nbsp;</span></p>
                            </td>
                            <td style={{ width: '63.35pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '49.15pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>1.</span></p>
                            </td>
                            <td style={{ width: '91.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Synoptic Gospel&nbsp;</span></p>
                            </td>
                            <td style={{ width: '77.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '63.55pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>2.</span></p>
                            </td>
                            <td style={{ width: '97.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>O T survey</span></p>
                            </td>
                            <td style={{ width: '63.35pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '49.15pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>2.</span></p>
                            </td>
                            <td style={{ width: '91.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Homiletics&nbsp;</span></p>
                            </td>
                            <td style={{ width: '77.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '63.55pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3.</span></p>
                            </td>
                            <td style={{ width: '97.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Discipleship&nbsp;</span></p>
                            </td>
                            <td style={{ width: '63.35pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '49.15pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>3.</span></p>
                            </td>
                            <td style={{ width: '91.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>General epistles</span></p>
                            </td>
                            <td style={{ width: '77.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '63.55pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>4.</span></p>
                            </td>
                            <td style={{ width: '97.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Book of Acts&nbsp;</span></p>
                            </td>
                            <td style={{ width: '63.35pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '49.15pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>4.</span></p>
                            </td>
                            <td style={{ width: '91.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Christology&nbsp;</span></p>
                            </td>
                            <td style={{ width: '77.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '63.55pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>5.</span></p>
                            </td>
                            <td style={{ width: '97.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Fundamental doctrine&nbsp;</span></p>
                            </td>
                            <td style={{ width: '63.35pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '49.15pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>5.</span></p>
                            </td>
                            <td style={{ width: '91.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>N T Survey</span></p>
                            </td>
                            <td style={{ width: '77.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '63.55pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', height: '23.25pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>6.</span></p>
                            </td>
                            <td style={{ width: '97.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '23.25pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Gospel of John&nbsp;</span></p>
                            </td>
                            <td style={{ width: '63.35pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '23.25pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '49.15pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '23.25pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>6.</span></p>
                            </td>
                            <td style={{ width: '91.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '23.25pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Evangelism &amp; church Planting&nbsp;</span></p>
                            </td>
                            <td style={{ width: '77.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '23.25pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '63.55pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', height: '13.5pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>7.</span></p>
                            </td>
                            <td style={{ width: '97.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '13.5pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Bibliology&nbsp;</span></p>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>&nbsp;</span></p>
                            </td>
                            <td style={{ width: '63.35pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '13.5pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>&nbsp;</span></p>
                            </td>
                            <td style={{ width: '49.15pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '13.5pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>7.</span></p>
                            </td>
                            <td style={{ width: '91.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '13.5pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Pneumatology</span></p>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>&nbsp;</span></p>
                            </td>
                            <td style={{ width: '77.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '13.5pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '63.55pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', height: '13.5pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>8.</span></p>
                            </td>
                            <td style={{ width: '97.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '13.5pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Romans</span></p>
                            </td>
                            <td style={{ width: '63.35pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '13.5pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>&nbsp;</span></p>
                            </td>
                            <td style={{ width: '49.15pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '13.5pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>8.</span></p>
                            </td>
                            <td style={{ width: '91.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '13.5pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Pastoral Care &amp;Counselling</span></p>
                            </td>
                            <td style={{ width: '77.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '13.5pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '63.55pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', height: '13.5pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>&nbsp;</span></p>
                            </td>
                            <td style={{ width: '97.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '13.5pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>&nbsp;</span></p>
                            </td>
                            <td style={{ width: '63.35pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '13.5pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>&nbsp;</span></p>
                            </td>
                            <td style={{ width: '49.15pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '13.5pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>9.</span></p>
                            </td>
                            <td style={{ width: '91.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '13.5pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Pentecostal Movement</span></p>
                            </td>
                            <td style={{ width: '77.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '13.5pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>3</span></p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%', textAlign: 'center' }}><span style={{ fontSize: '21px', lineHeight: '107%', fontFamily: '"Times New Roman",serif', color: 'red' }}>Second Year&nbsp;</span></p>
                <table style={{ marginLeft: '19.6pt', borderCollapse: 'collapse', border: 'none' }}>
                    <tbody>
                        <tr>
                            <td colSpan={6} style={{ width: '442.5pt', border: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '21px', fontFamily: '"Times New Roman",serif' }}>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; SEMESTER – 1 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; SEMESTER -2</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '63.5pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>No.</span></p>
                            </td>
                            <td style={{ width: '97.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>Subject&nbsp;</span></p>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>Name</span></p>
                            </td>
                            <td style={{ width: '63.3pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>Credit Hr</span></p>
                            </td>
                            <td style={{ width: '49.2pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>No.</span></p>
                            </td>
                            <td style={{ width: '91.8pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>Subject Name</span></p>
                            </td>
                            <td style={{ width: '77.2pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>Credit Hr</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '63.5pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>1.</span></p>
                            </td>
                            <td style={{ width: '97.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Bible characters</span></p>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>&nbsp;</span></p>
                            </td>
                            <td style={{ width: '63.3pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '21px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '49.2pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '21px', fontFamily: '"Times New Roman",serif' }}>1.</span></p>
                            </td>
                            <td style={{ width: '91.8pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Psalms in worship &nbsp;</span></p>
                            </td>
                            <td style={{ width: '77.2pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '63.5pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>2.</span></p>
                            </td>
                            <td style={{ width: '97.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Intro. to bible&nbsp;</span></p>
                            </td>
                            <td style={{ width: '63.3pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '21px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '49.2pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '21px', fontFamily: '"Times New Roman",serif' }}>2.</span></p>
                            </td>
                            <td style={{ width: '91.8pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Parables of Jesus Christ &nbsp; &nbsp;&nbsp;</span></p>
                            </td>
                            <td style={{ width: '77.2pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '63.5pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3.</span></p>
                            </td>
                            <td style={{ width: '97.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Historical books&nbsp;</span></p>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>&nbsp;</span></p>
                            </td>
                            <td style={{ width: '63.3pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '21px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '49.2pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '21px', fontFamily: '"Times New Roman",serif' }}>3.</span></p>
                            </td>
                            <td style={{ width: '91.8pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Christian education&nbsp;</span></p>
                            </td>
                            <td style={{ width: '77.2pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '63.5pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>4.</span></p>
                            </td>
                            <td style={{ width: '97.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Pastoral Epistles &nbsp;</span></p>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>&nbsp;</span></p>
                            </td>
                            <td style={{ width: '63.3pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '21px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '49.2pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '21px', fontFamily: '"Times New Roman",serif' }}>4.</span></p>
                            </td>
                            <td style={{ width: '91.8pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Christology &nbsp;/ pneumatology&nbsp;</span></p>
                            </td>
                            <td style={{ width: '77.2pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '63.5pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>5.</span></p>
                            </td>
                            <td style={{ width: '97.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Homiletics&nbsp;</span></p>
                            </td>
                            <td style={{ width: '63.3pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '21px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '49.2pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '21px', fontFamily: '"Times New Roman",serif' }}>5.</span></p>
                            </td>
                            <td style={{ width: '91.8pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif', color: 'black' }}>Missionary Heroes</span></p>
                            </td>
                            <td style={{ width: '77.2pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '63.5pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', height: '24pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>6.</span></p>
                            </td>
                            <td style={{ width: '97.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '24pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif', color: 'black' }}>Ordinance of the Church&nbsp;</span></p>
                            </td>
                            <td style={{ width: '63.3pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '24pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '21px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '49.2pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '24pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '21px', fontFamily: '"Times New Roman",serif' }}>6.</span></p>
                            </td>
                            <td style={{ width: '91.8pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '24pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif', color: 'black' }}>Prison Epistles&nbsp;</span></p>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>&nbsp;</span></p>
                            </td>
                            <td style={{ width: '77.2pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '24pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '63.5pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', height: '12.75pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>7.</span></p>
                            </td>
                            <td style={{ width: '97.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '12.75pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>&nbsp;Christian home&nbsp;</span></p>
                            </td>
                            <td style={{ width: '63.3pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '12.75pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '21px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '49.2pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '12.75pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '21px', fontFamily: '"Times New Roman",serif' }}>7.</span></p>
                            </td>
                            <td style={{ width: '91.8pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '12.75pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Spiritual leadership&nbsp;</span></p>
                            </td>
                            <td style={{ width: '77.2pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '12.75pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '21px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '63.5pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', height: '12.75pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>8.</span></p>
                            </td>
                            <td style={{ width: '97.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '12.75pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Pastoral Theology</span></p>
                            </td>
                            <td style={{ width: '63.3pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '12.75pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '21px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '49.2pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '12.75pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '21px', fontFamily: '"Times New Roman",serif' }}>8.</span></p>
                            </td>
                            <td style={{ width: '91.8pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '12.75pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Homilitics</span></p>
                            </td>
                            <td style={{ width: '77.2pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '12.75pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '21px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br></br>
                <div style={{ marginTop: '0cm', marginRight: '0cm', marginBottom: '8.0pt', marginLeft: '0cm', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif' }}>
                    <ol start={4} style={{ marginBottom: '0cm', listStyleType: 'upper-alpha' }}>
                        <li style={{ marginTop: '0cm', marginRight: '0cm', marginBottom: '8.0pt', marginLeft: '0cm', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif' }}><strong><u><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Certificate in Theology (C.Th.)</span></u></strong></li>
                    </ol>
                </div>
                <p style={{ marginRight: '0cm', marginLeft: '36.0pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                <ol start={1} style={{ listStyleType: 'lower-alpha', marginLeft: '40.2px' }}>
                    <li><strong><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Entrance Requirements:&nbsp;</span></strong></li>
                </ol>
                <ol style={{ listStyleType: 'decimal', marginLeft: '58.2px' }}>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Duration of Study- One Year</span></li>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Medium- Kannada/ Malayalam/ English</span></li>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Qualification: 10 pass.</span></li>
                </ol>
                <p style={{ marginRight: '0cm', marginLeft: '68.2pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                <ol start={2} style={{ listStyleType: 'lower-alpha', marginLeft: '40.2px' }}>
                    <li><strong><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Graduation Requirements</span></strong><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>:</span></li>
                </ol>
                <ol style={{ listStyleType: 'decimal', marginLeft: '58.2px' }}>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Minimum 45 credits and pass in all the subjects.</span></li>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Evidence of maturity in spiritual life and conduct.</span></li>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Satisfactory completion of the Practical Ministry requirements.&nbsp;</span></li>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Attendance must be minimum 80 percent.</span></li>
                </ol>
                <p style={{ marginRight: '0cm', marginLeft: '68.2pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                <ol start={3} style={{ listStyleType: 'lower-alpha', marginLeft: '40.2px' }}>
                    <li><strong><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Academic Requirements:</span></strong></li>
                </ol>
                <ol style={{ listStyleType: 'decimal', marginLeft: '58.2px' }}>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Medium of instruction is in Kannada/ Malayalam/ English.</span></li>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Credit hours -45credits</span></li>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>D.th. students are required to write an assignment as decided by the teachers.</span></li>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>An assignment of practical ministry involvement.</span></li>
                </ol>
                <p style={{ marginRight: '0cm', marginLeft: '68.2pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                <ol start={4} style={{ listStyleType: 'lower-alpha', marginLeft: '40.2px' }}>
                    <li><strong><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Fees Structure:</span></strong></li>
                </ol>
                <ol style={{ listStyleType: 'decimal', marginLeft: '58.2px' }}>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Admission fee&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;- &nbsp; 500 /-</span></li>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Library Fee&nbsp; &nbsp;- 1000/-</span></li>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Tuition fee&nbsp; &nbsp;&nbsp;- &nbsp; &nbsp;200/month</span></li>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Graduation Fee&nbsp; &nbsp; &nbsp; &nbsp;- &nbsp; 500/-</span></li>
                </ol>
                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                {/* <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                <p style={{ marginRight: '0cm', marginLeft: '68.2pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p> */}
                <div style={{ marginTop: '0cm', marginRight: '0cm', marginBottom: '8.0pt', marginLeft: '0cm', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif' }}>
                    <ol start={5} style={{ marginBottom: '0cm', listStyleType: 'lower-alpha', marginLeft: '40.2px' }}>
                        <li style={{ marginTop: '0cm', marginRight: '0cm', marginBottom: '8.0pt', marginLeft: '0cm', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif' }}><strong><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Curriculum</span></strong></li>
                    </ol>
                </div>
                <p style={{ marginRight: '0cm', marginLeft: '32.2pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><strong><span style={{ fontSize: '21px', fontFamily: '"Times New Roman",serif', color: 'red' }}>&nbsp;</span></strong></p>
                <p style={{ marginRight: '0cm', marginLeft: '32.2pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><strong><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif', color: 'black' }}>CERTIFICATE IN THEOLOGY SUBJECTS&nbsp;</span></strong></p>
                <p style={{ marginRight: '0cm', marginLeft: '32.2pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif', color: 'red' }}>English/ Kannada/ Malayalam</span></p>
                {/* <p style={{ marginRight: '0cm', marginLeft: '32.2pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif', color: 'red' }}>&nbsp;</span></p>
                <p style={{ marginRight: '0cm', marginLeft: '32.2pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif', color: 'red' }}>&nbsp;</span></p> */}
                <br></br>
                <table style={{ marginLeft: '19.6pt', borderCollapse: 'collapse', border: 'none' }}>
                    <tbody>
                        <tr>
                            <td colSpan={6} style={{ width: '442.5pt', border: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '21px', fontFamily: '"Times New Roman",serif' }}>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; SEMESTER – 1 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; SEMESTER -2</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '63.55pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><strong><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>No.</span></strong></p>
                            </td>
                            <td style={{ width: '97.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><strong><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>Subject&nbsp;</span></strong></p>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><strong><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>Name</span></strong></p>
                            </td>
                            <td style={{ width: '63.35pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><strong><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>Credit Hr</span></strong></p>
                            </td>
                            <td style={{ width: '49.15pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><strong><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>No.</span></strong></p>
                            </td>
                            <td style={{ width: '91.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><strong><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>Subject Name</span></strong></p>
                            </td>
                            <td style={{ width: '77.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><strong><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>Credit Hr</span></strong></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '63.55pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>1.</span></p>
                            </td>
                            <td style={{ width: '97.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Life and ministry of Christ&nbsp;</span></p>
                            </td>
                            <td style={{ width: '63.35pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '49.15pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>1.</span></p>
                            </td>
                            <td style={{ width: '91.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Synoptic Gospel&nbsp;</span></p>
                            </td>
                            <td style={{ width: '77.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '63.55pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>2.</span></p>
                            </td>
                            <td style={{ width: '97.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>O T survey</span></p>
                            </td>
                            <td style={{ width: '63.35pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '49.15pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>2.</span></p>
                            </td>
                            <td style={{ width: '91.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Homiletics&nbsp;</span></p>
                            </td>
                            <td style={{ width: '77.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '63.55pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3.</span></p>
                            </td>
                            <td style={{ width: '97.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Discipleship&nbsp;</span></p>
                            </td>
                            <td style={{ width: '63.35pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '49.15pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>3.</span></p>
                            </td>
                            <td style={{ width: '91.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>General epistles</span></p>
                            </td>
                            <td style={{ width: '77.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '63.55pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>4.</span></p>
                            </td>
                            <td style={{ width: '97.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Book of Acts&nbsp;</span></p>
                            </td>
                            <td style={{ width: '63.35pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '49.15pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>4.</span></p>
                            </td>
                            <td style={{ width: '91.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Christology&nbsp;</span></p>
                            </td>
                            <td style={{ width: '77.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '63.55pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>5.</span></p>
                            </td>
                            <td style={{ width: '97.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Fundamental doctrine&nbsp;</span></p>
                            </td>
                            <td style={{ width: '63.35pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '49.15pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>5.</span></p>
                            </td>
                            <td style={{ width: '91.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>N T Survey</span></p>
                            </td>
                            <td style={{ width: '77.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '63.55pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', height: '23.25pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>6.</span></p>
                            </td>
                            <td style={{ width: '97.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '23.25pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Gospel of John&nbsp;</span></p>
                            </td>
                            <td style={{ width: '63.35pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '23.25pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '49.15pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '23.25pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>6.</span></p>
                            </td>
                            <td style={{ width: '91.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '23.25pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Evangelism &amp; church Planting&nbsp;</span></p>
                            </td>
                            <td style={{ width: '77.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '23.25pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '63.55pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', height: '13.5pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>7.</span></p>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>&nbsp;</span></p>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>&nbsp;</span></p>
                            </td>
                            <td style={{ width: '97.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '13.5pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Bibliology&nbsp;</span></p>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>&nbsp;</span></p>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>&nbsp;</span></p>
                            </td>
                            <td style={{ width: '63.35pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '13.5pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>&nbsp;</span></p>
                            </td>
                            <td style={{ width: '49.15pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '13.5pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>7.</span></p>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>&nbsp;</span></p>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>&nbsp;</span></p>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>&nbsp;</span></p>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>&nbsp;</span></p>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>&nbsp;</span></p>
                            </td>
                            <td style={{ width: '91.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '13.5pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Pneumatology</span></p>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>&nbsp;</span></p>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>&nbsp;</span></p>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>&nbsp;</span></p>
                            </td>
                            <td style={{ width: '77.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '13.5pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>3</span></p>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>&nbsp;</span></p>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>3</span></p>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>&nbsp;</span></p>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>&nbsp;</span></p>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>&nbsp;</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '63.55pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', height: '13.5pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>8.</span></p>
                            </td>
                            <td style={{ width: '97.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '13.5pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Romans</span></p>
                            </td>
                            <td style={{ width: '63.35pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '13.5pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>&nbsp;</span></p>
                            </td>
                            <td style={{ width: '49.15pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '13.5pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>8.</span></p>
                            </td>
                            <td style={{ width: '91.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '13.5pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Pastoral Care &amp;Counselling</span></p>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>&nbsp;</span></p>
                            </td>
                            <td style={{ width: '77.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '13.5pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '63.55pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', height: '13.5pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>&nbsp;</span></p>
                            </td>
                            <td style={{ width: '97.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '13.5pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>&nbsp;</span></p>
                            </td>
                            <td style={{ width: '63.35pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '13.5pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>&nbsp;</span></p>
                            </td>
                            <td style={{ width: '49.15pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '13.5pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>9.</span></p>
                            </td>
                            <td style={{ width: '91.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '13.5pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Pentecostal Movement</span></p>
                            </td>
                            <td style={{ width: '77.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '13.5pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>3</span></p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br></br>
                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '6.0pt', marginBottom: '0cm', lineHeight: '115%', textIndent: '36.0pt' }}><span style={{ fontSize: '19px', lineHeight: '115%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></p>
                {/* <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '6.0pt', marginBottom: '0cm', lineHeight: '115%' }}><strong><u><span style={{ fontSize: '19px', lineHeight: '115%', fontFamily: '"Times New Roman",serif' }}><span style={{ textDecoration: 'none' }}>&nbsp;</span></span></u></strong></p>
                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '6.0pt', marginBottom: '0cm', lineHeight: '115%' }}><strong><u><span style={{ fontSize: '19px', lineHeight: '115%', fontFamily: '"Times New Roman",serif' }}><span style={{ textDecoration: 'none' }}>&nbsp;</span></span></u></strong></p>
                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '6.0pt', marginBottom: '0cm', lineHeight: '115%' }}><strong><u><span style={{ fontSize: '19px', lineHeight: '115%', fontFamily: '"Times New Roman",serif' }}><span style={{ textDecoration: 'none' }}>&nbsp;</span></span></u></strong></p>
                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '6.0pt', marginBottom: '0cm', lineHeight: '115%' }}><strong><u><span style={{ fontSize: '19px', lineHeight: '115%', fontFamily: '"Times New Roman",serif' }}><span style={{ textDecoration: 'none' }}>&nbsp;</span></span></u></strong></p>
                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '6.0pt', marginBottom: '0cm', lineHeight: '115%' }}><strong><span style={{ fontSize: '19px', lineHeight: '115%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '6.0pt', marginBottom: '0cm', lineHeight: '115%' }}><strong><span style={{ fontSize: '19px', lineHeight: '115%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '6.0pt', marginBottom: '0cm', lineHeight: '115%' }}><strong><span style={{ fontSize: '19px', lineHeight: '115%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '6.0pt', marginBottom: '0cm', lineHeight: '115%' }}><strong><span style={{ fontSize: '19px', lineHeight: '115%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '6.0pt', marginBottom: '0cm', lineHeight: '115%' }}><strong><span style={{ fontSize: '19px', lineHeight: '115%', fontFamily: '"Times New Roman",serif' }}>NON-RESIDENTIAL &nbsp;COURSES</span></strong></p>
                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '6.0pt', marginBottom: '0cm', lineHeight: '115%' }}><strong><u><span style={{ fontSize: '19px', lineHeight: '115%', fontFamily: '"Times New Roman",serif' }}><span style={{ textDecoration: 'none' }}>&nbsp;</span></span></u></strong></p>
                <p style={{ marginRight: '0cm', marginLeft: '35.45pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%', textIndent: '-21.25pt' }}><strong><u><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>A. Master in Ministry (M.Min.)</span></u></strong></p>
                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%', textIndent: '14.2pt' }}><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif', color: 'black', background: 'white' }}>Master of Ministry&nbsp;</span><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>is a Post-graduate degree that</span><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif', color: 'black', background: 'white' }}>&nbsp;aims to&nbsp;</span><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>assist practicing Pastors and other church leaders to upgrade their knowledge and skills at an advanced level<span style={{ color: 'black', background: 'white' }}>. The course includes specialist study fields of ministry, and a research option may also be undertaken. &nbsp;&nbsp;</span></span></p>
                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%', textIndent: '36.0pt' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>a. Entrance Requirements:&nbsp;</span></strong></p>
                <p style={{ marginRight: '0cm', marginLeft: '70.9pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%', textIndent: '-14.2pt' }}><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>1. B.Th. or Graduate from a recognized University and its equivalent (2 years).</span></p>
                <p style={{ marginRight: '0cm', marginLeft: '70.9pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%', textIndent: '-14.2pt' }}><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>2. The candidate has to pass the Entrance Examination conducted by the college in Advanced English, the Bible and the General Knowledge.</span></p>
                <p style={{ marginRight: '0cm', marginLeft: '70.9pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%', textIndent: '-14.2pt' }}><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>3. &nbsp; Satisfaction of the Admission Committee on the candidate’s Academic, Spiritual and Character credentials.</span></p>
                <p style={{ marginRight: '0cm', marginLeft: '72.0pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p> */}
                <div style={{ marginTop: '0cm', marginRight: '0cm', marginBottom: '8.0pt', marginLeft: '0cm', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif' }}>
                    <ol start={2} style={{ marginBottom: '0cm', listStyleType: 'lower-alpha', marginLeft: '44px' }}>
                        <li style={{ marginTop: '0cm', marginRight: '0cm', marginBottom: '8.0pt', marginLeft: '0cm', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif' }}><strong><span style={{ fontSize: '19px' }}>Graduation Requirements:</span></strong></li>
                    </ol>
                </div>
                <p style={{ marginRight: '0cm', marginLeft: '36.0pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></p>
                <ol style={{ listStyleType: 'decimal' }}>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>For Two years of &nbsp;M. Min program, minimum 70 credits and pass in all subjects.&nbsp;</span></li>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Evidence of maturity in spiritual life and conduct.</span></li>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Satisfactory completion of the Practical Ministry requirements.</span></li>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Clear all the college fees.&nbsp;</span></li>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Attendance must be minimum 80%.&nbsp;</span></li>
                </ol>
                <p style={{ marginRight: '0cm', marginLeft: '72.0pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                <ol className="decimal_type" start={2} style={{ listStyleType: 'upper-alpha', marginLeft: '44px' }}>
                    <li><strong><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Academic Requirements:</span></strong></li>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>1. Medium of instruction is in English&nbsp;<br />&nbsp;2. Credit hours - 70<br />&nbsp;3. M.Min. students are required to write Assignments/ Reading Reports as decided by the teachers.<br />&nbsp;4. An assignment of practical ministry involvement.</span></li>
                </ol>
                <p style={{ marginRight: '0cm', marginLeft: '72.0pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                <ol start={3} style={{ listStyleType: 'upper-alpha', marginLeft: '60.900000000000006px' }}>
                    <li><strong><span style={{ fontSize: '19px' }}>Fees Structure:</span></strong></li>
                </ol>
                <ol style={{ listStyleType: 'decimal', marginLeft: '78.9px' }}>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Admission Fee&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;- &nbsp; &nbsp; 500/-</span></li>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Tuition Fee&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;- &nbsp; &nbsp; 20, 000/-</span></li>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Library Fee&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;- &nbsp; &nbsp; &nbsp; 1000/-</span></li>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Graduation Fee &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;- &nbsp; &nbsp; &nbsp; &nbsp; 500/-</span></li>
                </ol>
                <p style={{ marginRight: '0cm', marginLeft: '70.9pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></p>
                <div style={{ marginTop: '0cm', marginRight: '0cm', marginBottom: '8.0pt', marginLeft: '0cm', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif' }}>
                    <ol start={4} style={{ marginBottom: '0cm', listStyleType: 'upper-alpha', marginLeft: '44px' }}>
                        <li style={{ marginTop: '0cm', marginRight: '0cm', marginBottom: '8.0pt', marginLeft: '0cm', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif' }}><strong><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Curriculum:</span></strong></li>
                    </ol>
                </div>
                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%', textAlign: 'center' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%', textAlign: 'center' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>MASTER IN MINISTRY SUBJECTS</span></strong></p>
                <p style={{ marginRight: '0cm', marginLeft: '36.0pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%' }}><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif', color: 'red' }}>&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;FIRST YEAR</span></p>
                <table style={{ marginLeft: '26.7pt', borderCollapse: 'collapse', border: 'none' }}>
                    <tbody>
                        <tr>
                            <td style={{ width: '34pt', border: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></p>
                            </td>
                            <td style={{ width: '134.7pt', borderTop: '1pt solid windowtext', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderImage: 'initial', borderLeft: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><strong><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>1<sup>st</sup> Semester</span></strong></p>
                            </td>
                            <td style={{ width: '42.5pt', borderTop: '1pt solid windowtext', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderImage: 'initial', borderLeft: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><strong><span style={{ fontSize: '13px', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                            </td>
                            <td style={{ width: '35.45pt', borderTop: '1pt solid windowtext', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderImage: 'initial', borderLeft: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></p>
                            </td>
                            <td style={{ width: '5cm', borderTop: '1pt solid windowtext', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderImage: 'initial', borderLeft: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><strong><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>2<sup>nd</sup> Semester</span></strong></p>
                            </td>
                            <td style={{ width: '42.5pt', borderTop: '1pt solid windowtext', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderImage: 'initial', borderLeft: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><strong><span style={{ fontSize: '13px', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '34pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><strong><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>No.</span></strong></p>
                            </td>
                            <td style={{ width: '134.7pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><strong><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>Subject Name</span></strong></p>
                            </td>
                            <td style={{ width: '42.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><strong><span style={{ fontSize: '13px', fontFamily: '"Times New Roman",serif' }}>Credit Hour</span></strong></p>
                            </td>
                            <td style={{ width: '35.45pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><strong><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>No.</span></strong></p>
                            </td>
                            <td style={{ width: '5cm', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><strong><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>Subject Name</span></strong></p>
                            </td>
                            <td style={{ width: '42.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><strong><span style={{ fontSize: '13px', fontFamily: '"Times New Roman",serif' }}>Credit Hour</span></strong></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '34pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>1.</span></p>
                            </td>
                            <td style={{ width: '134.7pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Introduction to Bible</span></p>
                            </td>
                            <td style={{ width: '42.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '35.45pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>1.</span></p>
                            </td>
                            <td style={{ width: '5cm', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Church Planting &amp; Administration</span></p>
                            </td>
                            <td style={{ width: '42.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '34pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>2.</span></p>
                            </td>
                            <td style={{ width: '134.7pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Introduction to Mission</span></p>
                            </td>
                            <td style={{ width: '42.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '35.45pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>2.</span></p>
                            </td>
                            <td style={{ width: '5cm', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Romans and Galatians</span></p>
                            </td>
                            <td style={{ width: '42.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '34pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3.</span></p>
                            </td>
                            <td style={{ width: '134.7pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Hebrew Poetry &amp; Wisdom Literature</span></p>
                            </td>
                            <td style={{ width: '42.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '35.45pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3.</span></p>
                            </td>
                            <td style={{ width: '5cm', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Major World Religions</span></p>
                            </td>
                            <td style={{ width: '42.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '34pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>4.</span></p>
                            </td>
                            <td style={{ width: '134.7pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Christian Ethics</span></p>
                            </td>
                            <td style={{ width: '42.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '35.45pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>4.</span></p>
                            </td>
                            <td style={{ width: '5cm', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Hermeneutics</span></p>
                            </td>
                            <td style={{ width: '42.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '34pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>5.</span></p>
                            </td>
                            <td style={{ width: '134.7pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Acts of the Apostles</span></p>
                            </td>
                            <td style={{ width: '42.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '35.45pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>5.</span></p>
                            </td>
                            <td style={{ width: '5cm', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Synoptic Gospels</span></p>
                            </td>
                            <td style={{ width: '42.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '34pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>6.</span></p>
                            </td>
                            <td style={{ width: '134.7pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Cultural Anthropology</span></p>
                            </td>
                            <td style={{ width: '42.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '35.45pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>6.</span></p>
                            </td>
                            <td style={{ width: '5cm', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>MRSM</span></p>
                            </td>
                            <td style={{ width: '42.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%', textAlign: 'center' }}><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif', color: 'red' }}>&nbsp;</span></p>
                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%', textAlign: 'center' }}><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif', color: 'red' }}>SECOND YEAR</span></p>
                <table style={{ marginLeft: '26.7pt', borderCollapse: 'collapse', border: 'none' }}>
                    <tbody>
                        <tr>
                            <td style={{ width: '33.75pt', border: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>1.</span></p>
                            </td>
                            <td style={{ width: '134.7pt', borderTop: '1pt solid windowtext', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderImage: 'initial', borderLeft: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Theology I</span></p>
                            </td>
                            <td style={{ width: '42.5pt', borderTop: '1pt solid windowtext', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderImage: 'initial', borderLeft: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '35.45pt', borderTop: '1pt solid windowtext', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderImage: 'initial', borderLeft: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>1.</span></p>
                            </td>
                            <td style={{ width: '5cm', borderTop: '1pt solid windowtext', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderImage: 'initial', borderLeft: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Theology II</span></p>
                            </td>
                            <td style={{ width: '42.5pt', borderTop: '1pt solid windowtext', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderImage: 'initial', borderLeft: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '33.75pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>2.</span></p>
                            </td>
                            <td style={{ width: '134.7pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Johannine Thought</span></p>
                            </td>
                            <td style={{ width: '42.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '35.45pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>2.</span></p>
                            </td>
                            <td style={{ width: '5cm', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Apologetics</span></p>
                            </td>
                            <td style={{ width: '42.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '33.75pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3.</span></p>
                            </td>
                            <td style={{ width: '134.7pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Pastoral Care and &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Counselling</span></p>
                            </td>
                            <td style={{ width: '42.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '35.45pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3.</span></p>
                            </td>
                            <td style={{ width: '5cm', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Spiritual Leadership</span></p>
                            </td>
                            <td style={{ width: '42.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '33.75pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>4.</span></p>
                            </td>
                            <td style={{ width: '134.7pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Prophetic Books</span></p>
                            </td>
                            <td style={{ width: '42.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '35.45pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>4.</span></p>
                            </td>
                            <td style={{ width: '5cm', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Pauline Thought</span></p>
                            </td>
                            <td style={{ width: '42.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '33.75pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>5.</span></p>
                            </td>
                            <td style={{ width: '134.7pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Pentateuch</span></p>
                            </td>
                            <td style={{ width: '42.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '35.45pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>5.</span></p>
                            </td>
                            <td style={{ width: '5cm', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Homiletics</span></p>
                            </td>
                            <td style={{ width: '42.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '33.75pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>6.</span></p>
                            </td>
                            <td style={{ width: '134.7pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Pentecostal Movement</span></p>
                            </td>
                            <td style={{ width: '42.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '35.45pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>6.</span></p>
                            </td>
                            <td style={{ width: '5cm', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Indian Church History</span></p>
                            </td>
                            <td style={{ width: '42.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '33.75pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>7.</span></p>
                            </td>
                            <td style={{ width: '134.7pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>History of Christianity&nbsp;</span></p>
                            </td>
                            <td style={{ width: '42.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '35.45pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>7.</span></p>
                            </td>
                            <td style={{ width: '5cm', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Contemporary</span></p>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Trends of Mission</span></p>
                            </td>
                            <td style={{ width: '42.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%' }}><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></p>
                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%' }}><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></p>
                <p style={{ marginRight: '0cm', marginLeft: '35.45pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%', textIndent: '-21.25pt' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                {/* <p style={{ marginRight: '0cm', marginLeft: '35.45pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%', textIndent: '-21.25pt' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                <p style={{ marginRight: '0cm', marginLeft: '35.45pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%', textIndent: '-21.25pt' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                <p style={{ marginRight: '0cm', marginLeft: '35.45pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%', textIndent: '-21.25pt' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                <p style={{ marginRight: '0cm', marginLeft: '35.45pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%', textIndent: '-21.25pt' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                <p style={{ marginRight: '0cm', marginLeft: '35.45pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%', textIndent: '-21.25pt' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                <p style={{ marginRight: '0cm', marginLeft: '35.45pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%', textIndent: '-21.25pt' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p> */}
                <p style={{ marginRight: '0cm', marginLeft: '35.45pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%', textIndent: '-21.25pt' }}><strong><u><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>B. BACHELOR IN MINISTRY (B. Min.)&nbsp;</span></u></strong></p>
                <ol start={1} style={{ listStyleType: 'lower-alpha' }}>
                    <li><strong><span style={{ fontSize: '19px' }}>Entrance Requirements:&nbsp;</span></strong></li>
                </ol>
                <ol style={{ listStyleType: 'decimal', marginLeft: '44px' }}>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Duration of Study- 3years.</span></li>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Medium- English/ Kannada/ Malayalam</span></li>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Qualification: SSLC, +2 pass or Dip. Th or its equivalent from recognize Board/Institution.</span></li>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>The candidate has to pass in the Entrance examination conducted by the college.</span></li>
                </ol>
                <p style={{ marginRight: '0cm', marginLeft: '54.0pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></p>
                <ol start={2} style={{ listStyleType: 'lower-alpha' }}>
                    <li><strong><span style={{ fontSize: '19px' }}>Graduation Requirements</span></strong><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>:</span></li>
                </ol>
                <ol style={{ listStyleType: 'decimal', marginLeft: '44px' }}>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>For 3 years of B.Min. program, minimum 90 credits and pass in all subjects.</span></li>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Evidence of maturity in spiritual life and conduct.&nbsp;</span></li>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Satisfactory completion of the Practical Ministry requirements.&nbsp;</span></li>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Student(s) who could not meet the above graduation requirements but has completed the course work can be given completion certificate on the recommendation of the faculty.</span></li>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Attendance must be minimum 80%.&nbsp;</span></li>
                </ol>
                <p style={{ marginRight: '0cm', marginLeft: '54.0pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></p>
                <ol start={3} style={{ listStyleType: 'lower-alpha' }}>
                    <li><strong><span style={{ fontSize: '19px' }}>Academic Requirements:</span></strong></li>
                </ol>
                <ol style={{ listStyleType: 'undefined', marginLeft: '44px' }}>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Medium of instruction is in English/ Kannada/Malayalam.&nbsp;</span></li>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Credit hours - 90 credits.</span></li>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>B.Min. students are required to write the assignments/ reading reports as decided by the teachers.</span></li>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>An assignment of practical ministry involvement.</span></li>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>The Classes will be held on Sunday evening 4PM -8PM</span></li>
                </ol>
                <p style={{ marginRight: '0cm', marginLeft: '54.0pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></p>
                <ol start={4} style={{ listStyleType: 'lower-alpha' }}>
                    <li><strong><span style={{ fontSize: '19px' }}>Fees Structure</span></strong></li>
                </ol>
                <ol style={{ listStyleType: 'decimal', marginLeft: '44px' }}>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Admission Fee &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;- 500/-</span></li>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Graduation Fee&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;- 500/-</span></li>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Tuition Fee&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;- 300/month</span></li>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Graduation Fee&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;- 500/-</span></li>
                </ol>
                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%' }}><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></p>
                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%' }}><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></p>
                {/* <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%' }}><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></p>
                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%' }}><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></p>
                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%' }}><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></p> */}
                <div style={{ marginTop: '0cm', marginRight: '0cm', marginBottom: '8.0pt', marginLeft: '0cm', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif' }}>
                    <ol start={5} style={{ marginBottom: '0cm', listStyleType: 'lower-alpha' }}>
                        <li style={{ marginTop: '0cm', marginRight: '0cm', marginBottom: '8.0pt', marginLeft: '0cm', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif' }}><strong><span style={{ fontSize: '19px' }}>Curriculum</span></strong></li>
                    </ol>
                </div>
                <p style={{ marginRight: '0cm', marginLeft: '90.0pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><strong><span style={{ fontSize: '21px', lineHeight: '107%', fontFamily: '"Times New Roman",serif', color: 'red' }}>&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;</span></strong><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif', color: 'black' }}>BACHELOR IN MINISTRY SUBJECTS</span></strong></p>
                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%', textAlign: 'center' }}><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif', color: 'red' }}>English/ Kannada/ Malayalam</span></p>
                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%', textAlign: 'center' }}><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif', color: 'red' }}>FIRST YEAR</span></p>
                <table style={{ marginLeft: '19.6pt', borderCollapse: 'collapse', border: 'none' }}>
                    <tbody>
                        <tr>
                            <td colSpan={6} style={{ width: '442.5pt', border: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '21px', fontFamily: '"Times New Roman",serif' }}>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; SEMESTER – 1 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; SEMESTER -2</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '63.5pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>No.</span></p>
                            </td>
                            <td style={{ width: '97.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><strong><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>Subject&nbsp;</span></strong></p>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><strong><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                            </td>
                            <td style={{ width: '63.35pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><strong><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>Credit Hr</span></strong></p>
                            </td>
                            <td style={{ width: '49.15pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><strong><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>No.</span></strong></p>
                            </td>
                            <td style={{ width: '91.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><strong><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>Subject&nbsp;</span></strong></p>
                            </td>
                            <td style={{ width: '77.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><strong><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>Credit Hr</span></strong></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '63.5pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>1.</span></p>
                            </td>
                            <td style={{ width: '97.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Life and ministry of Christ&nbsp;</span></p>
                            </td>
                            <td style={{ width: '63.35pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '49.15pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>1.</span></p>
                            </td>
                            <td style={{ width: '91.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Book of Acts</span></p>
                            </td>
                            <td style={{ width: '77.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '63.5pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>2.</span></p>
                            </td>
                            <td style={{ width: '97.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Bible survey</span></p>
                            </td>
                            <td style={{ width: '63.35pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '49.15pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>2.</span></p>
                            </td>
                            <td style={{ width: '91.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Pentecostal Movement</span></p>
                            </td>
                            <td style={{ width: '77.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '63.5pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3.</span></p>
                            </td>
                            <td style={{ width: '97.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Discipleship&nbsp;</span></p>
                            </td>
                            <td style={{ width: '63.35pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '49.15pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3.</span></p>
                            </td>
                            <td style={{ width: '91.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Introduction to Bible</span></p>
                            </td>
                            <td style={{ width: '77.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '63.5pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>4.</span></p>
                            </td>
                            <td style={{ width: '97.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Fundamental doctrine&nbsp;</span></p>
                            </td>
                            <td style={{ width: '63.35pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '49.15pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>4.</span></p>
                            </td>
                            <td style={{ width: '91.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Evangelism &amp; church Planting</span></p>
                            </td>
                            <td style={{ width: '77.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%', textAlign: 'center' }}><span style={{ fontSize: '21px', lineHeight: '107%', fontFamily: '"Times New Roman",serif', color: 'red' }}>&nbsp;</span></p>
                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%', textAlign: 'center' }}><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif', color: 'red' }}>SECOND YEAR</span><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span><span style={{ fontSize: '21px', lineHeight: '107%', fontFamily: '"Times New Roman",serif', color: 'red' }}>&nbsp;</span></p>
                <table style={{ marginLeft: '19.6pt', borderCollapse: 'collapse', border: 'none' }}>
                    <tbody>
                        <tr>
                            <td colSpan={6} style={{ width: '442.5pt', border: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '21px', fontFamily: '"Times New Roman",serif', color: 'red' }}>&nbsp; &nbsp; &nbsp;&nbsp;</span><span style={{ fontSize: '21px', fontFamily: '"Times New Roman",serif' }}>&nbsp; &nbsp; SEMESTER – 1 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; SEMESTER -2</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '63.65pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>No.</span></p>
                            </td>
                            <td style={{ width: '97.45pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>Subject&nbsp;</span></p>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>Name</span></p>
                            </td>
                            <td style={{ width: '63.35pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>Credit Hr</span></p>
                            </td>
                            <td style={{ width: '49.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>No.</span></p>
                            </td>
                            <td style={{ width: '99.1pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>Subject Name</span></p>
                            </td>
                            <td style={{ width: '69.7pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>Credit Hr</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '63.65pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>1.</span></p>
                            </td>
                            <td style={{ width: '97.45pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Bible characters</span></p>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>&nbsp;</span></p>
                            </td>
                            <td style={{ width: '63.35pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '49.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>1.</span></p>
                            </td>
                            <td style={{ width: '99.1pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Study of Psalms&nbsp;</span></p>
                            </td>
                            <td style={{ width: '69.7pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '63.65pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>2.</span></p>
                            </td>
                            <td style={{ width: '97.45pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Intro. to bible&nbsp;</span></p>
                            </td>
                            <td style={{ width: '63.35pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '49.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>2.</span></p>
                            </td>
                            <td style={{ width: '99.1pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Spiritual leadership</span></p>
                            </td>
                            <td style={{ width: '69.7pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '63.65pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3.</span></p>
                            </td>
                            <td style={{ width: '97.45pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Historical books&nbsp;</span></p>
                            </td>
                            <td style={{ width: '63.35pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '49.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>3.</span></p>
                            </td>
                            <td style={{ width: '99.1pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Christian education&nbsp;</span></p>
                            </td>
                            <td style={{ width: '69.7pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '63.65pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>4.</span></p>
                            </td>
                            <td style={{ width: '97.45pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Pastoral Epistles</span></p>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>&nbsp;</span></p>
                            </td>
                            <td style={{ width: '63.35pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '49.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>4.</span></p>
                            </td>
                            <td style={{ width: '99.1pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Eschatology</span></p>
                            </td>
                            <td style={{ width: '69.7pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '63.65pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>5.</span></p>
                            </td>
                            <td style={{ width: '97.45pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Homiletics&nbsp;</span></p>
                            </td>
                            <td style={{ width: '63.35pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '49.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>5.</span></p>
                            </td>
                            <td style={{ width: '99.1pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Missionary Heroes</span></p>
                            </td>
                            <td style={{ width: '69.7pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%' }}><span style={{ fontSize: '21px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></p>
                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%', textAlign: 'center' }}><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif', color: 'red' }}>THIRD YEAR</span><span style={{ fontSize: '21px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span></p>
                <table style={{ marginLeft: '18.9pt', borderCollapse: 'collapse', border: 'none' }}>
                    <tbody>
                        <tr>
                            <td colSpan={7} style={{ width: '443.2pt', border: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '21px', fontFamily: '"Times New Roman",serif' }}>&nbsp; &nbsp; &nbsp; &nbsp;SEMESTER – 1 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; SEMESTER -2</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ border: 'none', padding: '0cm 0cm 0cm 0cm' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%' }}>&nbsp;</p>
                            </td>
                            <td style={{ width: '63.7pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>No.</span></p>
                            </td>
                            <td style={{ width: '97.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>Subject&nbsp;</span></p>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>Name</span></p>
                            </td>
                            <td style={{ width: '49.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>Credit Hr</span></p>
                            </td>
                            <td style={{ width: '40.3pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>No.</span></p>
                            </td>
                            <td style={{ width: '137.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>Subject Name</span></p>
                            </td>
                            <td style={{ width: '53.7pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>Credit Hr</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ border: 'none', padding: '0cm 0cm 0cm 0cm' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%' }}>&nbsp;</p>
                            </td>
                            <td style={{ width: '63.7pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>1.</span></p>
                            </td>
                            <td style={{ width: '97.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif', color: 'black' }}>Major Religions</span></p>
                            </td>
                            <td style={{ width: '49.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '40.3pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>1.</span></p>
                            </td>
                            <td style={{ width: '137.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Indian Church History</span></p>
                            </td>
                            <td style={{ width: '53.7pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ border: 'none', padding: '0cm 0cm 0cm 0cm' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%' }}>&nbsp;</p>
                            </td>
                            <td style={{ width: '63.7pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>2.</span></p>
                            </td>
                            <td style={{ width: '97.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Church History</span></p>
                            </td>
                            <td style={{ width: '49.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '40.3pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>2.</span></p>
                            </td>
                            <td style={{ width: '137.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Christian ethics&nbsp;</span></p>
                            </td>
                            <td style={{ width: '53.7pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ border: 'none', padding: '0cm 0cm 0cm 0cm' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%' }}>&nbsp;</p>
                            </td>
                            <td style={{ width: '63.7pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3.</span></p>
                            </td>
                            <td style={{ width: '97.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif', color: 'black' }}>Ordinance of the Church&nbsp;</span></p>
                            </td>
                            <td style={{ width: '49.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '40.3pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>3.</span></p>
                            </td>
                            <td style={{ width: '137.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Pentateuch</span></p>
                            </td>
                            <td style={{ width: '53.7pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ border: 'none', padding: '0cm 0cm 0cm 0cm' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%' }}>&nbsp;</p>
                            </td>
                            <td style={{ width: '63.7pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>4.</span></p>
                            </td>
                            <td style={{ width: '97.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Pastoral care and counselling&nbsp;</span></p>
                            </td>
                            <td style={{ width: '49.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '40.3pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>4.</span></p>
                            </td>
                            <td style={{ width: '137.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Book of Hebrews</span></p>
                            </td>
                            <td style={{ width: '53.7pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ border: 'none', padding: '0cm 0cm 0cm 0cm' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%' }}>&nbsp;</p>
                            </td>
                            <td style={{ width: '63.7pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', height: '20.65pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>5.</span></p>
                            </td>
                            <td style={{ width: '97.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '20.65pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Intro. to mission&nbsp;</span></p>
                            </td>
                            <td style={{ width: '49.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '20.65pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '40.3pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '20.65pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>5.</span></p>
                            </td>
                            <td style={{ width: '137.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '20.65pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Pastoral theology &nbsp;</span></p>
                            </td>
                            <td style={{ width: '53.7pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '20.65pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ border: 'none', padding: '0cm 0cm 0cm 0cm' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%' }}>&nbsp;</p>
                            </td>
                            <td style={{ width: '63.7pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', height: '31pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>6.</span></p>
                            </td>
                            <td style={{ width: '97.55pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '31pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Synoptic Gospels</span></p>
                            </td>
                            <td style={{ width: '49.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '31pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '40.3pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '31pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>6.</span></p>
                            </td>
                            <td style={{ width: '137.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '31pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif', color: 'black' }}>Johnannine Literature&nbsp;</span></p>
                            </td>
                            <td style={{ width: '53.7pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', height: '31pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ border: 'none' }}><br /></td>
                            <td style={{ border: 'none' }}><br /></td>
                            <td style={{ border: 'none' }}><br /></td>
                            <td style={{ border: 'none' }}><br /></td>
                            <td style={{ border: 'none' }}><br /></td>
                            <td style={{ border: 'none' }}><br /></td>
                            <td style={{ border: 'none' }}><br /></td>
                        </tr>
                    </tbody>
                </table>
                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%' }}><strong><u><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>C. Diploma in Theology (Dip.Th.)</span></u></strong></p>
                <p style={{ marginRight: '0cm', marginLeft: '18.0pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>a. Entrance Requirements:&nbsp;</span></strong></p>
                <ol style={{ listStyleType: 'decimal', marginLeft: '32.55px' }}>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Duration of Study- 2 years.&nbsp;</span></li>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Medium- &nbsp;Kannada/ English/ Malayalam</span></li>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Qualification- SSLC Pass.</span></li>
                </ol>
                <p style={{ marginRight: '0cm', marginLeft: '42.55pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></p>
                <ol start={2} style={{ listStyleType: 'lower-alpha' }}>
                    <li><strong><span style={{ fontSize: '19px' }}>Graduation Requirements</span></strong><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>:</span></li>
                </ol>
                <ol style={{ listStyleType: 'decimal', marginLeft: '32.55px' }}>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Minimum 75 credits and pass in all the subjects.</span></li>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Evidence of maturity in spiritual life and conduct.</span></li>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Satisfactory completion of the Practical Ministry requirements.</span></li>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Attendance must be minimum 80 percent.</span></li>
                </ol>
                <p style={{ marginRight: '0cm', marginLeft: '42.55pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></p>
                <ol start={3} style={{ listStyleType: 'lower-alpha' }}>
                    <li><strong><span style={{ fontSize: '19px' }}>Academic Requirements:</span></strong></li>
                </ol>
                <ol style={{ listStyleType: 'decimal', marginLeft: '44px' }}>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Medium of instruction is in Kannada/ English/ Malayalam</span></li>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Credit hours -75 credits</span></li>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Dip.Th students are required to write the assignments/ reading report as decided by the teachers.</span></li>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>An assignment of practical ministry involvement.</span></li>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>The Classes will be held on Monday and Tuesday 7.00 pm – 9.00pm.</span></li>
                </ol>
                <p style={{ marginRight: '0cm', marginLeft: '54.0pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></p>
                <ol start={4} style={{ listStyleType: 'lower-alpha' }}>
                    <li><strong><span style={{ fontSize: '19px' }}>Fees Structure</span></strong></li>
                </ol>
                <ol style={{ listStyleType: 'decimal', marginLeft: '44px' }}>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Admission fee&nbsp; &nbsp;- 500 /-</span></li>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Library Fee &nbsp; &nbsp; &nbsp;&nbsp;- 500/-</span></li>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Tuition fee&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;- 200/month</span></li>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Graduation Fee&nbsp;- &nbsp; 500/-</span></li>
                </ol>
                <p style={{ marginRight: '0cm', marginLeft: '54.0pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></p>
                <p style={{ marginRight: '0cm', marginLeft: '36.0pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></p>
                {/* <p style={{ marginRight: '0cm', marginLeft: '36.0pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></p>
                <p style={{ marginRight: '0cm', marginLeft: '36.0pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></p>
                <p style={{ marginRight: '0cm', marginLeft: '36.0pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></p>
                <p style={{ marginRight: '0cm', marginLeft: '36.0pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></p>
                <p style={{ marginRight: '0cm', marginLeft: '36.0pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></p>
                <p style={{ marginRight: '0cm', marginLeft: '36.0pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></p>
                <p style={{ marginRight: '0cm', marginLeft: '36.0pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></p>
                <p style={{ marginRight: '0cm', marginLeft: '36.0pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></p>
                <p style={{ marginRight: '0cm', marginLeft: '36.0pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></p>
                <p style={{ marginRight: '0cm', marginLeft: '36.0pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></p>
                <p style={{ marginRight: '0cm', marginLeft: '36.0pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></p>
                <p style={{ marginRight: '0cm', marginLeft: '36.0pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></p> */}
                <div style={{ marginTop: '0cm', marginRight: '0cm', marginBottom: '8.0pt', marginLeft: '0cm', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif' }}>
                    <ol start={5} style={{ marginBottom: '0cm', listStyleType: 'lower-alpha' }}>
                        <li style={{ marginTop: '0cm', marginRight: '0cm', marginBottom: '8.0pt', marginLeft: '0cm', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif' }}><strong><span style={{ fontSize: '19px' }}>Curriculum</span></strong></li>
                    </ol>
                </div>
                <p style={{ marginRight: '0cm', marginLeft: '36.0pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></p>
                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%', textAlign: 'center' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif', color: 'black' }}>DIPLOMA IN THEOLOGY SUBJECTS&nbsp;</span></strong></p>
                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%', textAlign: 'center' }}><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif', color: 'red' }}>English/ Kannada</span></p>
                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%', textAlign: 'center' }}><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif', color: 'red' }}>FIRST YEAR&nbsp;</span></p>
                <table style={{ marginLeft: '19.6pt', borderCollapse: 'collapse', border: 'none' }}>
                    <tbody>
                        <tr>
                            <td style={{ width: '446.3pt', border: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '21px', fontFamily: '"Times New Roman",serif' }}>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; SEMESTER – 1 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; SEMESTER -2</span></p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p style={{ marginRight: '0cm', marginLeft: '14.2pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%' }}><span style={{ fontSize: '21px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></p>
                <table style={{ marginLeft: '19.6pt', borderCollapse: 'collapse', border: 'none' }}>
                    <tbody>
                        <tr>
                            <td style={{ width: '63.5pt', border: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>No.</span></p>
                            </td>
                            <td style={{ width: '97.75pt', borderTop: '1pt solid windowtext', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderImage: 'initial', borderLeft: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><strong><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>Subject&nbsp;</span></strong></p>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><strong><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                            </td>
                            <td style={{ width: '63.35pt', borderTop: '1pt solid windowtext', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderImage: 'initial', borderLeft: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><strong><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>Credit Hr</span></strong></p>
                            </td>
                            <td style={{ width: '49.15pt', borderTop: '1pt solid windowtext', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderImage: 'initial', borderLeft: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><strong><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>No.</span></strong></p>
                            </td>
                            <td style={{ width: '91.5pt', borderTop: '1pt solid windowtext', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderImage: 'initial', borderLeft: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><strong><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>Subject&nbsp;</span></strong></p>
                            </td>
                            <td style={{ width: '77.25pt', borderTop: '1pt solid windowtext', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderImage: 'initial', borderLeft: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><strong><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>Credit Hr</span></strong></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '63.5pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>1.</span></p>
                            </td>
                            <td style={{ width: '97.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Times New Roman",serif' }}>Life and ministry of Christ&nbsp;</span></p>
                            </td>
                            <td style={{ width: '63.35pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '49.15pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>1.</span></p>
                            </td>
                            <td style={{ width: '91.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Times New Roman",serif' }}>Book of Acts</span></p>
                            </td>
                            <td style={{ width: '77.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '63.5pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>2.</span></p>
                            </td>
                            <td style={{ width: '97.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Times New Roman",serif' }}>Bible survey</span></p>
                            </td>
                            <td style={{ width: '63.35pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '49.15pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>2.</span></p>
                            </td>
                            <td style={{ width: '91.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Times New Roman",serif' }}>Pentecostal Movement</span></p>
                            </td>
                            <td style={{ width: '77.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '63.5pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3.</span></p>
                            </td>
                            <td style={{ width: '97.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Times New Roman",serif' }}>Discipleship&nbsp;</span></p>
                            </td>
                            <td style={{ width: '63.35pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '49.15pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3.</span></p>
                            </td>
                            <td style={{ width: '91.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Times New Roman",serif' }}>Introduction to Bible</span></p>
                            </td>
                            <td style={{ width: '77.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '63.5pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>4.</span></p>
                            </td>
                            <td style={{ width: '97.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Times New Roman",serif' }}>Fundamental doctrine&nbsp;</span></p>
                            </td>
                            <td style={{ width: '63.35pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '49.15pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>4.</span></p>
                            </td>
                            <td style={{ width: '91.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Times New Roman",serif' }}>Evangelism &amp; church Planting</span></p>
                            </td>
                            <td style={{ width: '77.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%', textAlign: 'center' }}><strong><span style={{ fontSize: '21px', lineHeight: '107%', fontFamily: '"Times New Roman",serif', color: 'red' }}>&nbsp;</span></strong></p>
                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%', textAlign: 'center' }}><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif', color: 'red' }}>SECOND YEAR</span></p>
                <table style={{ marginLeft: '19.6pt', borderCollapse: 'collapse', border: 'none' }}>
                    <tbody>
                        <tr>
                            <td colSpan={6} style={{ width: '442.5pt', border: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '21px', fontFamily: '"Times New Roman",serif', color: 'red' }}>&nbsp; &nbsp; &nbsp;&nbsp;</span><span style={{ fontSize: '21px', fontFamily: '"Times New Roman",serif' }}>&nbsp; &nbsp; SEMESTER – 1 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; SEMESTER -2</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '63.65pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>No.</span></p>
                            </td>
                            <td style={{ width: '97.45pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>Subject&nbsp;</span></p>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>Name</span></p>
                            </td>
                            <td style={{ width: '63.35pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>Credit Hr</span></p>
                            </td>
                            <td style={{ width: '49.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>No.</span></p>
                            </td>
                            <td style={{ width: '91.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>Subject Name</span></p>
                            </td>
                            <td style={{ width: '77.3pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>Credit Hr</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '63.65pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>1.</span></p>
                            </td>
                            <td style={{ width: '97.45pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Bible characters</span></p>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>&nbsp;</span></p>
                            </td>
                            <td style={{ width: '63.35pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '49.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>1.</span></p>
                            </td>
                            <td style={{ width: '91.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Study of Psalms&nbsp;</span></p>
                            </td>
                            <td style={{ width: '77.3pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '63.65pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>2.</span></p>
                            </td>
                            <td style={{ width: '97.45pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Intro. to bible&nbsp;</span></p>
                            </td>
                            <td style={{ width: '63.35pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '49.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>2.</span></p>
                            </td>
                            <td style={{ width: '91.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Spiritual leadership</span></p>
                            </td>
                            <td style={{ width: '77.3pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '63.65pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3.</span></p>
                            </td>
                            <td style={{ width: '97.45pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Historical books&nbsp;</span></p>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>&nbsp;</span></p>
                            </td>
                            <td style={{ width: '63.35pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '49.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>3.</span></p>
                            </td>
                            <td style={{ width: '91.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Christian education&nbsp;</span></p>
                            </td>
                            <td style={{ width: '77.3pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '63.65pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></p>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>4.</span></p>
                            </td>
                            <td style={{ width: '97.45pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Pastoral Epistles &nbsp;</span></p>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>&nbsp;</span></p>
                            </td>
                            <td style={{ width: '63.35pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '49.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>4.</span></p>
                            </td>
                            <td style={{ width: '91.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Eschatology</span></p>
                            </td>
                            <td style={{ width: '77.3pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '63.65pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>5.</span></p>
                            </td>
                            <td style={{ width: '97.45pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Homiletics&nbsp;</span></p>
                            </td>
                            <td style={{ width: '63.35pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '49.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>5.</span></p>
                            </td>
                            <td style={{ width: '91.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>Missionary Heroes</span></p>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Arial Narrow",sans-serif' }}>&nbsp;</span></p>
                            </td>
                            <td style={{ width: '77.3pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                <p style={{ marginRight: '0cm', marginLeft: '54.0pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '6.0pt', marginBottom: '0cm', lineHeight: '115%' }}><span style={{ fontSize: '19px', lineHeight: '115%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></p>
                {/* <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p> */}

                <div style={{ marginTop: '0cm', marginRight: '0cm', marginBottom: '8.0pt', marginLeft: '0cm', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif' }}>
                    <ol start={4} style={{ marginBottom: '0cm', listStyleType: 'upper-alpha' }}>
                        <li style={{ marginTop: '0cm', marginRight: '0cm', marginBottom: '8.0pt', marginLeft: '0cm', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif' }}><strong><u><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Certificate in Theology (C.Th.)&nbsp;</span></u></strong></li>
                    </ol>
                </div>
                <p style={{ marginRight: '0cm', marginLeft: '36.0pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><strong><u><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}><span style={{ textDecoration: 'none' }}>&nbsp;</span></span></u></strong></p>
                <ol start={1} style={{ listStyleType: 'lower-alpha', marginLeft: '25.450000000000003px' }}>
                    <li><strong><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Entrance Requirements:&nbsp;</span></strong></li>
                </ol>
                <ol style={{ listStyleType: 'decimal', marginLeft: '39.65px' }}>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Duration of Study- 1 year</span></li>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Medium- &nbsp;Kannada/ &nbsp; Malayalam/ English</span></li>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Qualification- &nbsp;SSLC</span></li>
                </ol>
                <p style={{ marginRight: '0cm', marginLeft: '49.65pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                <ol start={2} style={{ listStyleType: 'lower-alpha', marginLeft: '25.450000000000003px' }}>
                    <li><strong><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Graduation Requirements</span></strong><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>:</span></li>
                </ol>
                <ol style={{ listStyleType: 'decimal', marginLeft: '43.45px' }}>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Minimum 45 credits and pass in all the subjects.</span></li>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Evidence of maturity in spiritual life and conduct.&nbsp;</span></li>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Satisfactory completion of the Practical Ministry requirements.</span></li>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Attendance must be minimum 80 percent.</span></li>
                </ol>
                <p style={{ marginRight: '0cm', marginLeft: '53.45pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                <ol start={3} style={{ listStyleType: 'lower-alpha', marginLeft: '25.450000000000003px' }}>
                    <li><strong><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Academic Requirements:</span></strong></li>
                </ol>
                <ol style={{ listStyleType: 'decimal', marginLeft: '43.45px' }}>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Medium of instruction is in Kannada/ Malayalam/ English</span></li>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Credit hours - 45 credits</span></li>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>C.Th. students are required to write an assignment as decided by the teachers.</span></li>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>An assignment of practical ministry involvement.</span></li>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Classes will be held on Sunday evening 4 – 8 pm.</span></li>
                </ol>
                <p style={{ marginRight: '0cm', marginLeft: '53.45pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                <ol start={4} style={{ listStyleType: 'lower-alpha', marginLeft: '25.450000000000003px' }}>
                    <li><strong><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Fees Structure</span></strong></li>
                </ol>
                <ol style={{ listStyleType: 'decimal', marginLeft: '43.45px' }}>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Admission Fee&nbsp;&nbsp;- 250 /-</span></li>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Tuition Fee&nbsp; &nbsp; &nbsp; &nbsp;- 200/month</span></li>
                    <li><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Graduation Fee&nbsp;- 500/-</span></li>
                </ol>
                <p style={{ marginRight: '0cm', marginLeft: '35.45pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: '107%' }}><strong><span style={{ fontSize: '19px', lineHeight: '107%', fontFamily: '"Times New Roman",serif' }}>&nbsp; &nbsp; &nbsp;&nbsp;</span></strong></p>
                <div style={{ marginTop: '0cm', marginRight: '0cm', marginBottom: '8.0pt', marginLeft: '0cm', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif' }}>
                    <ol start={5} style={{ marginBottom: '0cm', listStyleType: 'lower-alpha', marginLeft: '25.450000000000003px' }}>
                        <li style={{ marginTop: '0cm', marginRight: '0cm', marginBottom: '8.0pt', marginLeft: '0cm', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif' }}><strong><span style={{ lineHeight: '107%', fontFamily: '"Times New Roman",serif', fontSize: '19px' }}>Curriculum</span></strong></li>
                    </ol>
                </div>
                <p style={{ marginRight: '0cm', marginLeft: '36.0pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', margin: '0cm', textAlign: 'center' }}><strong><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif', color: 'red' }}>&nbsp;</span></strong></p>
                <p style={{ marginRight: '0cm', marginLeft: '36.0pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal', margin: '0cm', textAlign: 'center' }}><strong><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif', color: 'black' }}>CERTIFICATE IN THEOLOGY SUBJECTS&nbsp;</span></strong></p>
                <br></br>
                <p style={{ marginRight: '0cm', marginLeft: '36.0pt', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: 'normal', margin: '0cm', textAlign: 'center' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif', color: 'red' }}>English/ Kannada/ Malayalam</span></p>
                <br></br>
                <table style={{ marginLeft: '19.6pt', borderCollapse: 'collapse', border: 'none' }}>
                    <tbody>
                        <tr>
                            <td colSpan={6} style={{ width: '442.5pt', border: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '21px', fontFamily: '"Times New Roman",serif' }}>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; SEMESTER – 1 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; SEMESTER -2</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '63.5pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>No.</span></p>
                            </td>
                            <td style={{ width: '97.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><strong><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>Subject&nbsp;</span></strong></p>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><strong><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>&nbsp;</span></strong></p>
                            </td>
                            <td style={{ width: '63.35pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><strong><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>Credit Hr</span></strong></p>
                            </td>
                            <td style={{ width: '49.15pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><strong><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>No.</span></strong></p>
                            </td>
                            <td style={{ width: '91.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><strong><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>Subject&nbsp;</span></strong></p>
                            </td>
                            <td style={{ width: '77.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><strong><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>Credit Hr</span></strong></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '63.5pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>1.</span></p>
                            </td>
                            <td style={{ width: '97.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Times New Roman",serif' }}>Life and ministry of Christ&nbsp;</span></p>
                            </td>
                            <td style={{ width: '63.35pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '49.15pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>1.</span></p>
                            </td>
                            <td style={{ width: '91.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Times New Roman",serif' }}>Book of Acts</span></p>
                            </td>
                            <td style={{ width: '77.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '63.5pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>2.</span></p>
                            </td>
                            <td style={{ width: '97.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Times New Roman",serif' }}>Bible survey</span></p>
                            </td>
                            <td style={{ width: '63.35pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '49.15pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>2.</span></p>
                            </td>
                            <td style={{ width: '91.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Times New Roman",serif' }}>Pentecostal Movement</span></p>
                            </td>
                            <td style={{ width: '77.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '63.5pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3.</span></p>
                            </td>
                            <td style={{ width: '97.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Times New Roman",serif' }}>Discipleship&nbsp;</span></p>
                            </td>
                            <td style={{ width: '63.35pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '49.15pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3.</span></p>
                            </td>
                            <td style={{ width: '91.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Times New Roman",serif' }}>Introduction to Bible</span></p>
                            </td>
                            <td style={{ width: '77.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '63.5pt', borderRight: '1pt solid windowtext', borderBottom: '1pt solid windowtext', borderLeft: '1pt solid windowtext', borderImage: 'initial', borderTop: 'none', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>4.</span></p>
                            </td>
                            <td style={{ width: '97.75pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Times New Roman",serif' }}>Fundamental doctrine&nbsp;</span></p>
                            </td>
                            <td style={{ width: '63.35pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                            <td style={{ width: '49.15pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>4.</span></p>
                            </td>
                            <td style={{ width: '91.5pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '16px', fontFamily: '"Times New Roman",serif' }}>Evangelism &amp; church Planting</span></p>
                            </td>
                            <td style={{ width: '77.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: '1pt solid windowtext', borderRight: '1pt solid windowtext', padding: '0cm 5.4pt', verticalAlign: 'top' }}>
                                <p style={{ marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '0cm', lineHeight: 'normal' }}><span style={{ fontSize: '19px', fontFamily: '"Times New Roman",serif' }}>3</span></p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Footer />
        </>
    )
}
