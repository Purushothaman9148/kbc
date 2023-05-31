import React from 'react'
import Box from '@mui/material/Box';
// import Ipclogo from '../Assets/images/Ipclogo.JPG';

export default function StudentsTestmony() {
    return (
        <>
            <div className='studnets-main-continer'>
                <Box className='stduent-box-container'
                    sx={{
                        width: 400,
                        height: 350,
                        backgroundColor: '#596864',
                        '&:hover': {
                            backgroundColor: 'dark',
                            opacity: [0.9, 0.8, 0.7]

                        },
                    }}
                >
                    <h4 className='vissionheader'>Vision</h4>
                    <p className='vision'>
                        The Vision of the KBC as to train men and women of God to the unreached in the south india and plant churches in Taluk/Village level.
                    </p>
                </Box>
                <Box className='stduent-box-container'
                    sx={{
                        width: 400,
                        height: 350,
                        backgroundColor: '#df845e',
                        '&:hover': {
                            backgroundColor: 'maroon',
                            opacity: [0.9, 0.8, 0.7],
                        },
                    }}
                >
                    <h4 className='vissionheader'>Mission</h4>
                    <p className='vision'>
                        The Mission of the KBC is to teach the Word of God and train dedicated Christian Workers to preach the Gospel effectively and make disciples.
                    </p>
                </Box>
                <Box className='stduent-box-container'
                    sx={{
                        width: 400,
                        height: 350,
                        backgroundColor: '#596864',
                        '&:hover': {
                            backgroundColor: 'dark',
                            opacity: [0.9, 0.8, 0.7],
                        },
                    }}
                >
                    <h4 className='vissionheader'>Passion</h4>
                    <p className='vision'>
                        Karnataka Bible College provices students with various streams
                        to pursue their theological education. Programs accredited by
                        Asian Thelogical Association (ATA).
                    </p>
                </Box>
            </div>
        </>
    )
}
