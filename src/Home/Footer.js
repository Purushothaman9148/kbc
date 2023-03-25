import React from 'react'
import Ipclogo from '../Assets/images/Ipclogo1.png'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Button from '@mui/material/Button';

export default function Footer() {
    const mediaColor = {
        backgroundColor: '#ffffff'
    }
    return (
        <>
            <div className='footer-container'>
                <div className='footer-address'>
                    <h3 className='footer-header'>
                        <div className='footer-logo'>
                            <img src={Ipclogo} alt='College Logo' height={100} width={100} />
                            <p className='footer-logo-header'>IPC Karnataka State Head Quarters</p>
                        </div>
                    </h3>
                    <p><b>Karnataka Bible College</b><br />
                        IPC Karnataka State Headquarters,
                        Horamavu Agara,
                        Bengaluru,
                        Karnataka 560043
                        India
                    </p>
                    <p>Phone : <span className='footer-header'>080 2844 4477</span></p>
                    <p>Email : <span className='footer-header'>kbcipcks@gmail.com</span></p>
                </div>
                <div className='footer-terms'>
                    <h3 className='footer-header'>Follow us on Media</h3>
                    <List>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar style={mediaColor}>
                                    <Button color='primary' ><FacebookIcon /></Button>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="facebook" />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar style={mediaColor}>
                                    <Button color="secondary"><InstagramIcon /></Button>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Instagram" />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar style={mediaColor}>
                                    <Button color="error"><YouTubeIcon /></Button>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="YouTube" />
                        </ListItem>
                    </List>
                </div>
                <div className='footer-link'>
                    <h3 className='footer-header'>Quick Links</h3>
                    <List>
                        <ListItem>
                            <ListItemText primary="Home" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="About Us" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Faculty" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Contact Us" />
                        </ListItem>
                    </List>
                </div>
            </div>
            <div className='footer-rights-container'>
                <p>
                    &#169; 2023 Copyright <span className='footer-rights-name'><b>Karnataka Bible College</b></span> All Rights Reserved.
                </p>
            </div>
        </>
    )
}
