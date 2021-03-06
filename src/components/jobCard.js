import React ,{useState, useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import swiggy from './../utils/swiggy-logo.png';
import zamato from './../utils/zamato-logo.png';
import flipkart from './../utils/flipkart.png';
import login from './../utils/Login.svg';
import Button from '@material-ui/core/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {Link} from 'react-router-dom';
import Application from './application';
import ola from './../utils/ola.jpg';
import uber from './../utils/uber.png';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({

    jobCard:{
        width:"48%",
        padding:'.6rem',
        boxSizing:"border-box",
        margin:'0.5rem 0'
    },
    jobInfo:{
        display:"flex"
    },
    jobName:{
lineHeight:"3px",
boxSizing:"border-box",
margin:"0.5rem 1rem"
    },
    apply:{
      backgroundColor:"#40E0D0",
        color:"#000",
        padding:'.3rem',
        textTransform:"none",
        fontSize:'.8rem',
              
      '&:hover': {
        backgroundColor:"#00BFFF",
        color:"#000"
        },

    },

    buttonDiv:{
display:'flex',
justifyContent:'space-between',

'& p':{
   
    margin:'.5rem 0 0 0',
    fontSize:'.9rem'
    
}
    },
    
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin:'auto',
      },
      paper: {
        backgroundColor: theme.palette.background.paper,
        border: '.5px solid #000',
        borderRadius:'5px',
        width:'65%',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2),
      },
      icon:{
        borderRadius:'5pc',
        boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px'
      },
      modalHeading:{
        textAlign:'center',
        color:'black',
        '& > strong':{
          color:"#18A558"
        }

      },
      modalBody:{
        padding:'1rem 1rem 1rem 2rem'
      },
      loginImg:{
        width:'90%',
        margin:'2rem 0'

      }
  }));

const JobCard = (props) => {
  const [openinfo, setOpeninfo] = React.useState(false);
    const classes = useStyles();
    // const [JobId, setJobId] = useState();
    // setJobId(props.JobId)
const [open, setOpen] = React.useState(false);

const handleOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};
const handleInfoClickOpen = () => {
  setOpeninfo(true);
};

const handleInfoClose = () => {
  setOpeninfo(false);

};
const Body = () => {
  return (
    <div className={classes.modalBody}>
      
        <DialogTitle className={classes.modalHeading} id="alert-dialog-title">
          
          Want to <strong>apply</strong> to this job?
        </DialogTitle>
        <DialogContent>
        <Grid container justifyContent="center" alignItems="center" direction="row">
          <Grid item xs={5}>
        <img src={login} alt="login" className={classes.loginImg} width="90%" ></img>
        </Grid><Grid item xs={7}>
          <p>Please login or signup into your account using our simple OTP authentication.</p>
            
          </Grid>
          </Grid>
        </DialogContent>
      
        <DialogActions>
        {/* <Button className={classes.apply}  variant="contained" color="secondary" onClick={handleInfoClose}>Close</Button> */}
        <Link style={{textDecoration: 'none'}} to="/auth">
          <Button className={classes.apply} variant="contained" color="primary">Login</Button>
         </Link>
        </DialogActions>

    </div>
  );
}

const getIcon = () =>{
if(props.clientName.toLowerCase() === 'flipkart'){
return flipkart;
}
else if(props.clientName.toLowerCase() === 'swiggy'){
  return swiggy;
}
else if(props.clientName.toLowerCase() === 'ola'){
  return ola;
}
else if(props.clientName.toLowerCase() === 'uber'){
  return uber;
}
else {
  return zamato;
}}
console.log(props.JobId)

    return (  <Paper elevation={3} className={classes.jobCard} >

<div className={classes.jobInfo}>
<img src={getIcon()} className={classes.icon} width="45" height ="45" alt="icon" ></img>
<div className={classes.jobName}>
    <strong> <Link style={{textDecoration: 'none', color: 'black'}} to={`/findJobs/${props.JobId}`}>{props.jobName}</Link></strong>
    <p>{props.clientName}, {props.location}</p>
</div>
</div>

<div className={classes.buttonDiv}>
<p>
    Earning : <strong>{props.salary} Rs/hour</strong>
</p>
{localStorage.getItem("authToken") ? (
<Button className={classes.apply} variant="contained" color="primary" onClick={handleOpen}>
        Apply now
       
      </Button>
):(
<Button className={classes.apply} variant="contained" color="primary" onClick={handleInfoClickOpen}>
        Apply now
        <Dialog
        open={openinfo}
        onClose={handleInfoClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Body />
        </Dialog>
      </Button>
)}
<Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
<Application jobId ={props.JobId}
                clientName = {props.clientName}
                jobName = {props.jobName}
                location = {props.location}></Application>
          </div>
        </Fade>
</Modal>
</div>


    </Paper> );
}
 
export default JobCard;