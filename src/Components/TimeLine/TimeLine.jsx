import React from "react";
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { FaAngleDown } from "react-icons/fa";

const BodyTimeLine = styled.div`
background-color:black;
width:100vw;
height: 100vh;
`


const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '6px 16px',
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
}));

export default function MyTimeline() {
    const classes = useStyles();

    return (
        <div class="animate__animated animate__fadeInUp">
            <BodyTimeLine>

                <Timeline align="alternate">
                    <TimelineItem>
                        <TimelineOppositeContent>
                            <Typography variant="body2" color="textSecondary">

                            </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot>
                                <FaAngleDown />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation={3} className={classes.paper}>
                                <Typography variant="h6" component="h1">
                                    2020- 2021
                            </Typography>
                                <Typography> Web / Win application programming and development course, at the Tech-Career Technology Training Center.
                                <br />
                                Technical course:
                                Server side: C#, Asp.Net, Nodejs OOP, API Using Express
                                Client side: HTML, CSS, JavaScript, React, TypeScript, Bootstrap, Nodejs


                            </Typography>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent>
                            <Typography variant="body2" color="textSecondary">

                            </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color="primary">
                                <FaAngleDown />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation={3} className={classes.paper}>
                                <Typography variant="h6" component="h1">
                                    Code
              </Typography>
                                <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam libero temporibus quasi quas, omnis atque iste, itaque eveniet incidunt amet minima aliquam. Nemo magnam esse.</Typography>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color="primary" variant="outlined">
                                <FaAngleDown />
                            </TimelineDot>
                            <TimelineConnector className={classes.secondaryTail} />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation={3} className={classes.paper}>
                                <Typography variant="h6" component="h1">
                                    Sleep
              </Typography>
                                <Typography>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi cumque, a, tenetur odit quod adipisci perferendis sint aspernatur culpa veniam aliquam, saepe voluptatem. Delectus debitis aspernatur minus beatae tempore est.Consectetur aliquam quas pariatur suscipit vel, eos rem beatae! Nihil sed quas ex, facere ipsa hic, aliquam velit voluptate eum veritatis, assumenda earum error tenetur fugit pariatur corporis voluptates saepe!</Typography>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color="secondary">
                                <FaAngleDown />
                            </TimelineDot>
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation={3} className={classes.paper}>
                                <Typography variant="h6" component="h1">
                                    Repeat
              </Typography>
                                <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam deserunt optio doloremque omnis esse vitae ducimus illo asperiores fuga, ea inventore animi ipsa iste reprehenderit ut facere, hic aperiam nobis.</Typography>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </BodyTimeLine>
        </div>
    );
}
