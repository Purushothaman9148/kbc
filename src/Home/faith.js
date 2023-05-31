import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

const card = (
    <React.Fragment>
        <CardContent>
            <Typography sx={{ fontSize: 14, color: 'gold', fontWeight: 400 }} color="text.secondary" gutterBottom>
                THE SCRIPTURES
            </Typography>
            {/* <Typography variant="h5" component="div">
                be{bull}nev{bull}o{bull}lent
            </Typography> */}
            {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
            </Typography> */}
            <Typography variant="body2">
                We believe the Scriptures (66 Books) of the Old Testament and the New Testament are the Word of God and are verbally inspired of God and inerrant in the original writings. We believe that this inspiration extends equally and fully to all parts of the Scriptures, and that they are the supreme and final authority in faith and life.
                <br />
                {/* {'"a benevolent smile"'} */}
            </Typography>
        </CardContent>
        {/* <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions> */}
    </React.Fragment>
);
const card1 = (
    <React.Fragment>
        <CardContent>
            <Typography sx={{ fontSize: 14, color: 'maroon', fontWeight: 400 }} color="text.secondary" gutterBottom>
                THE GOD HEAD
            </Typography>

            <Typography variant="body2">
                We believe in one God eternally existing in three persons: the Father, the Son, and the Holy Spirit, each having precisely the same nature, attributes, and perfections.
                <br />
            </Typography>
        </CardContent>

    </React.Fragment>
);

const card2 = (
    <React.Fragment>
        <CardContent>
            <Typography sx={{ fontSize: 14, color: 'green', fontWeight: 400 }} color="text.secondary" gutterBottom>
                JESUS CHRIST – HIS PERSON AND HIS WORK
            </Typography>

            <Typography variant="body2">
                We believe that the Lord Jesus Christ is fully God and fully man. He was eternally begotten of the Father, conceived by the Holy Spirit, and born of the Virgin Mary. We believe that Jesus Christ died for the sins of the whole world as the substitutionary sacrifice, that His crucified body was raised from the dead, and that He ascended into heaven to appear before the Father as our High Priest, Advocate, and Mediator.
                <br />
            </Typography>
        </CardContent>

    </React.Fragment>
);
const card3 = (
    <React.Fragment>
        <CardContent>
            <Typography sx={{ fontSize: 14, color: 'blue', fontWeight: 400 }} color="text.secondary" gutterBottom>
                THE HOLY SPIRIT
            </Typography>

            <Typography variant="body2">
                We believe that the Holy Spirit is the person possessed of all the distinctively divine attributed who illuminates, re generates, baptises, seals and set apart believers to a holy life and empowers with various gifts for a charismatic ministry as in the apostolical age.
                <br />
            </Typography>
        </CardContent>

    </React.Fragment>
);
const card4 = (
    <React.Fragment>
        <CardContent>
            <Typography sx={{ fontSize: 14, color: 'red', fontWeight: 400 }} color="text.secondary" gutterBottom>
                HUMANITY
            </Typography>

            <Typography variant="body2">
                We believe God created humanity, male and female, reflecting the image and likeness of God. Each person’s biological sex has been sovereignly appointed by God and is an irreversible aspect of his or her nature. The first human, Adam, sinned and thereby incurred the judgment of both physical death and spiritual death which is eternal separation from God. Therefore, all human beings, with the exception of Christ Jesus, are born with a fallen nature, are accountable for their sin, and need to be born again.
                <br />
            </Typography>
        </CardContent>

    </React.Fragment>
);
const card5 = (
    <React.Fragment>
        <CardContent>
            <Typography sx={{ fontSize: 14, color: 'voilet', fontWeight: 400 }} color="text.secondary" gutterBottom>
                SALVATION
            </Typography>

            <Typography variant="body2">
                We believe that salvation was provided for everyone in the whole world and was accomplished solely by the finished work of Christ shedding His blood upon the cross, and no work on the part of any person can merit this salvation. Whoever believes solely in the finished work of Jesus Christ receives the new birth, becomes a partaker of the divine nature, and thus becomes a child of God, once for all, forever.
                <br />
            </Typography>
        </CardContent>

    </React.Fragment>
);
const card6 = (
    <React.Fragment>
        <CardContent>
            <Typography sx={{ fontSize: 14, color: 'orange', fontWeight: 400 }} color="text.secondary" gutterBottom>
                THE CHURCH
            </Typography>

            <Typography variant="body2">
                We believe the Church universal began at Pentecost with the baptism of the Holy Spirit and consists of all those who believe on the Lord Jesus Christ. Christ is the Head of the Church, called His Body. The local church is a body of believers in Christ who are joined together under scriptural leadership for the worship of God, for edification through the Word of God, for prayer, for fellowship, for the proclamation of the Gospel, and for observance of the ordinances of baptism and the Lord’s Supper.
                <br />
            </Typography>
        </CardContent>

    </React.Fragment>
);
const card7 = (
    <React.Fragment>
        <CardContent>
            <Typography sx={{ fontSize: 14, color: 'indigo', fontWeight: 400 }} color="text.secondary" gutterBottom>
                A SEPERATED LIFE
            </Typography>

            <Typography variant="body2">
                We believe in the separation of believers from sin, sinner’s false doctrines and all kind of worship contrary to the Word of God.
                <br />
            </Typography>
        </CardContent>

    </React.Fragment>
);
const card8 = (
    <React.Fragment>
        <CardContent>
            <Typography sx={{ fontSize: 14, color: 'gold', fontWeight: 400 }} color="text.secondary" gutterBottom>
                THE FUTURE
            </Typography>

            <Typography variant="body2">
                We believe in the imminent return of Jesus Christ to rapture the Church Age saints and the visible return of Jesus Christ with His saints for His millennial reign on earth. We believe in the bodily resurrection of the just and unjust, in the reward and everlasting conscious blessedness of the just, and in the judgment and everlasting conscious punishment of the lost.
                <br />
            </Typography>
        </CardContent>

    </React.Fragment>
);

export default function Faith() {
    return (
        <>
            <div className='studnets-main-content' style={{ 'padding': '50px' }}>
                <h4 style={{ textShadow: '2px 2px 3px #000000' }}>Creedal Statement of Faith</h4>
                <div className='studnets-main-continers'>
                    <Box sx={{ width: 275, minWidth: 275 }}>
                        <Card variant="outlined" sx={{
                            width: 275, minWidth: 275,
                            height: 350,
                            backgroundColor: '#fff',
                            '&:hover': {
                                backgroundColor: 'dark',
                                opacity: [0.9, 0.8, 0.7]

                            },

                        }}>{card}</Card>

                    </Box>
                    <Box sx={{ width: 275, minWidth: 275 }}>
                        <Card variant="outlined" sx={{
                            width: 275, minWidth: 275,
                            height: 350,
                            backgroundColor: '#fff',
                            '&:hover': {
                                backgroundColor: 'dark',
                                opacity: [0.9, 0.8, 0.7]

                            },
                        }}>{card1}</Card>
                    </Box>
                    <Box sx={{ width: 275, minWidth: 275 }}>
                        <Card variant="outlined" sx={{
                            width: 275, minWidth: 275,
                            height: 350,
                            backgroundColor: '#fff',
                            '&:hover': {
                                backgroundColor: 'dark',
                                opacity: [0.9, 0.8, 0.7]

                            },
                        }}>{card2}</Card>
                    </Box>
                    <Box sx={{ width: 275, minWidth: 275 }}>
                        <Card variant="outlined" sx={{
                            width: 275, minWidth: 275,
                            height: 350,
                            backgroundColor: '#fff',
                            '&:hover': {
                                backgroundColor: 'dark',
                                opacity: [0.9, 0.8, 0.7]

                            },
                        }}>{card3}</Card>
                    </Box>
                    <Box sx={{ width: 275, minWidth: 275 }}>
                        <Card variant="outlined" sx={{
                            width: 275, minWidth: 275,
                            height: 350,
                            backgroundColor: '#fff',
                            '&:hover': {
                                backgroundColor: 'dark',
                                opacity: [0.9, 0.8, 0.7]

                            },
                        }}>{card4}</Card>
                    </Box>
                    <Box sx={{ width: 275, minWidth: 275 }}>
                        <Card variant="outlined" sx={{
                            width: 275, minWidth: 275,
                            height: 350,
                            backgroundColor: '#fff',
                            '&:hover': {
                                backgroundColor: 'dark',
                                opacity: [0.9, 0.8, 0.7]

                            },
                        }}>{card5}</Card>
                    </Box>
                    <Box sx={{ width: 275, minWidth: 275 }}>
                        <Card variant="outlined" sx={{
                            width: 275, minWidth: 275,
                            height: 350,
                            backgroundColor: '#fff',
                            '&:hover': {
                                backgroundColor: 'dark',
                                opacity: [0.9, 0.8, 0.7]

                            },
                        }}>{card6}</Card>
                    </Box>
                    <Box sx={{ width: 275, minWidth: 275 }}>
                        <Card variant="outlined" sx={{
                            width: 275, minWidth: 275,
                            height: 350,
                            backgroundColor: '#fff',
                            '&:hover': {
                                backgroundColor: 'dark',
                                opacity: [0.9, 0.8, 0.7]

                            },
                        }}>{card7}</Card>
                    </Box>
                    <Box sx={{ width: 275, minWidth: 275 }}>
                        <Card variant="outlined" sx={{
                            width: 275, minWidth: 275,
                            height: 350,
                            backgroundColor: '#fff',
                            '&:hover': {
                                backgroundColor: 'dark',
                                opacity: [0.9, 0.8, 0.7]

                            },
                        }}>{card8}</Card>
                    </Box>
                </div>
            </div>
        </>
    )
}
