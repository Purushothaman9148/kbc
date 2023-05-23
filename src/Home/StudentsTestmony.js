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
                        Our Vision is to equip, mould and train the young disciples for servant leadership
                        and encourage them to work in the mission field of Karnataka.
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
                        We have taken students to witness the Lord.
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
