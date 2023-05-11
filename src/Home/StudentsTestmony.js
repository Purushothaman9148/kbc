import React from 'react'
import Box from '@mui/material/Box';
import Ipclogo from '../Assets/images/Ipclogo.JPG';

export default function StudentsTestmony() {
    return (
        <>
            <div className='studnets-main-continer'>
                <Box className='stduent-box-container'
                    sx={{
                        width: 400,
                        height: 350,
                        backgroundColor: 'gold',
                        '&:hover': {
                            backgroundColor: 'gold',
                            opacity: [0.9, 0.8, 0.7]

                        },
                    }}
                >
                    <h4>Extension Programs</h4>
                    <p>
                        The aim of this program is to equip the believers with sound biblical
                        and theological knowledge so that they may become partners in God's mission.
                        The courses prepared will help the students to be scripturally and academically
                        sound, oriented towards ministry and empowered by the Holy Sprit.
                    </p>
                </Box>
                <Box className='stduent-box-container'
                    sx={{
                        width: 400,
                        height: 350,
                        backgroundColor: 'red',
                        '&:hover': {
                            backgroundColor: 'maroon',
                            opacity: [0.9, 0.8, 0.7],
                        },
                    }}
                >
                    <h4>Accredited Programs</h4>
                    <p>
                        Karnataka Bible College provices students with various streams
                        to pursue their theological education. Programs accredited by
                        Asian Thelogical Association (ATA).
                    </p>
                </Box>
                <Box className='stduent-box-container'
                    sx={{
                        width: 400,
                        height: 350,
                        backgroundColor: 'gold',
                        '&:hover': {
                            backgroundColor: 'gold',
                            opacity: [0.9, 0.8, 0.7],
                        },
                    }}
                >
                    <h4>Accredited Programs</h4>
                    <p>
                        Karnataka Bible College provices students with various streams
                        to pursue their theological education. Programs accredited by
                        Asian Thelogical Association (ATA).
                    </p>
                </Box>
            </div>
        </>
    )
}
