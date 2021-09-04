import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
 card:{
     width:'300px',
     boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px',
     padding:'1rem',
     margin:'1rem',
     borderRadius:'5px',
     textAlign:'left',
     '& > p':{
         margin:'0'
     }
 },
 moneyDiv:{
     width:'100%',
     display:'flex',
     flexDirection:'row-reverse',
     marginTop:'1.5rem'
 },
 money:{
     fontSize:'1.6rem',
     fontWeight:'bold',
     color:'#32CD32'
 },
 heading:{
     margin:'.3rem 0'
 }
     
      }));

const EarningCard = ({jobName, clientName, timings, salary, location}) => {
    const classes = useStyles();
    return ( <div className={classes.card}>
        <h2 className={classes.heading}><strong>{jobName}</strong></h2>
        <p>{clientName}, <strong>{location}</strong></p>
        <p>{timings}</p>
        <div className={classes.moneyDiv}>
            <div className={classes.money}>{salary} Rs</div>
        </div>
    </div> );
}
 
export default EarningCard;