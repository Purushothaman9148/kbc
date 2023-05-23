import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { height } from '@mui/system';
import Iframe from 'react-iframe'

export default function NewsEvents() {
    const containerHeight = {
        height: '420px',
        width: '800px',
    }
    return (
        <>
            <div className='news-event-container'>
                <div className='news-event-content'>
                    <div className='news-update'>
                        <h2 className='news-header'>News & Updates</h2>
                        <div className='news-youtube'  >
                            <Iframe height='315' width='420' src="https://www.youtube-nocookie.com/embed/fwqpmcGEh4A?start=70" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></Iframe>
                        </div>
                        <div className='news-content-details'>
                            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                                <ListItem>
                                    <ListItemText primary="IPC Karnataka Bible College | 28th Graduation service" secondary="21st May 2022 at 10am" />
                                </ListItem>
                            </List>
                        </div>
                    </div>
                    <div className='upcoming-events'>
                        <h2 className='news-header'>Upcoming Events</h2>
                        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <MenuBookIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="New Admission Started for the " secondary="2023 - 2024" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <SchoolIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Classes starting from 2nd Week of June" secondary="2023 - 2024" />
                            </ListItem>

                        </List>
                    </div>
                </div>
            </div>
        </>
    )
}
