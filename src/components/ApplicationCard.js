import React ,{useState, useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import axios from 'axios';
import icon from './../utils/checked.png';
import { green } from "@material-ui/core/colors";


const useStyles = makeStyles((theme) => ({

    jobCard:{
        width:"48%",
        boxSizing:"border-box",
        margin:'0.5rem 0',
        padding:'1rem'
    },
    details:{
        backgroundColor:"#fefe22",
        color:"#000",
        padding:'.3rem',
        textTransform:"none",
        fontSize:'.8rem',
              
      '&:hover': {
        backgroundColor:"yellow",
        color:"#000"
        },

    },
    info:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center'
    },
    data:{
        textAlign:'left',
        '& > p':{
            margin:'0'
        }

    },
    buttom:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        margin:'1rem 0 0 0'
    },
    hired:{
        backgroundColor:'#D0F0C0',
        border:'#00A86B solid 1px',
        padding:'.3rem .5rem .5rem',
        borderRadius:'5pc',
        width:'65px',
        fontSize:'0.8rem'
    },
    rejected:{
        backgroundColor:'#ff7a7a',
        border:'#940000 solid 1px',
        padding:'.3rem .5rem .5rem',
        borderRadius:'5pc',
        width:'65px',
        fontSize:'0.8rem'
    },
    applied:{
        backgroundColor:'#b0e0e6',
        border:'#00ced1 solid 1px',
        padding:'.3rem .5rem .5rem',
        borderRadius:'5pc',
        width:'65px',
        fontSize:'0.8rem'
    },
    link: {
        textDecoration: 'none',
        color: 'black'
      },
  }));

const ApplicationCard = ({jobName, clientName, location, status, date, street, jobId}) => {
    const classes = useStyles();
    
    

    return ( 
        <Paper elevation={3} className={classes.jobCard} >
            <div className={classes.info}>  
            <div className={classes.data}>
            <p><strong>{jobName}</strong></p>
            <p><strong>{clientName}</strong>,{street} {location}</p>
            <p>Applied on - <strong>{date}</strong></p>
                </div>          

<img src={icon}  height="50" alt ="done"></img>
            </div>
            <div className={classes.buttom}>
                <div className={classes[`${status}`]}>{status}</div>
                <Button className={classes.details} variant="contained">
                <Link className={classes.link} to={`/findJobs/${jobId}`} >Job details</Link>
      </Button>
            </div>
        </Paper>
     );
}
 
export default ApplicationCard;