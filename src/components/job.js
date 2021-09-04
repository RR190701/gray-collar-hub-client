import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Girl from './../utils/deliveryGirl.svg';
import axios from 'axios';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Button from '@material-ui/core/Button';
import Application from './application';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Navbar from './navbar';
import Loader from 'react-loader-spinner';
import Footer from './footer';

const useStyles = makeStyles((theme) => ({
  loader:{
    marginTop:'10rem'
        },
    root: {
      flexGrow: 1,
      overflowX: 'hidden',
      textAlign:'center',
      '& > h1':{
        color:"#FF4F5B",
        margin:'1.5rem 0 0 0',
      },
      '& > p':{
          fontSize:'1.3rem',
          margin:'1rem 0 ',
          padding:'0'

      }
    },
    paper: {
      padding: theme.spacing(3,2),
      textAlign: 'center',
    },
    girl:{
        width:'70%' ,
    },
    heading: {
        fontSize: '1.1rem',
        color:"#FF4F5B",
        fontWeight:'bold'
      },

    aCard:{
  boxShadow:'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
    },
    listItem:{
        display:'flex',
        alignItems:'center',
        '& > svg':{
            fontSize:'small',
            marginRight:'1rem'
        },
        '& > p':{
            margin:0
        }
    },
    highlight:{
        width:'70%',
        margin:'1rem auto',
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'space-between',
        textAlign:'left',

    },
    box:{
        width: '40%',
        margin:'.5rem 1rem',
        '& > strong':{
            color:"#FF4F5B"

        },
        '& > p':{
            margin:'0',

        }
    },
    apply:{
        margin:"2rem 0",
        backgroundColor:"#fefe22",
        color:"#000",
        textTransform:"none",
        marginLeft:'auto',
              
      '&:hover': {
        backgroundColor:"yellow",
        },
    },
    
    
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin:'auto',
    },
    formpaper: {
      backgroundColor: theme.palette.background.paper,
      border: '.5px solid #000',
      borderRadius:'5px',
      width:'65%',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2),
    },
  }));


const Job = ({match, history}) => {
  const [ta, setta] = useState();
  const [clientName, setClientName] = useState("");
  const [shift, setShift] = useState("");
  const [location, setlocation] = useState("");
  const [loader, setLoader] =useState(true);
  const [gender , setGender] =useState("")


  useEffect(() => {


    const fetchJobDetails = async() => {



      //fetching data
      try{

        const { data } = await axios.get(`https://pure-caverns-24063.herokuapp.com/api/Jobs/jobDetails/${match.params.jobId}`)
      
       setta(data.job.jobName)
       setlocation(data.job.location)
       setShift(data.job.shift)
       setClientName(data.job.clientName)
       setGender(data.job.gender)
       setLoader(false)
}

      catch(error){
     console.log("error ki ma");
      }
    }


    fetchJobDetails();

  },[]);

    const classes = useStyles();  
    const [open, setOpen] = React.useState(false);

const handleOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};
    const [expanded, setExpanded] = React.useState('panel1');
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);

    };
    return (<div className={classes.root}>
      <Navbar></Navbar>
      {
        loader?(
          <div>
          <Loader
          className={classes.loader}
           type='TailSpin'
           color="#FF4F5B"
           height={80}
           width={80}
         />
         </div>
        ):(
          <div>
          <h1>{ta}</h1>
          <p><strong>{clientName}</strong>, DL road, {location}</p>
          <Grid container spacing={0}>
          <Grid item xs={12} sm ={6} className={classes.paper}>
              <img src ={Girl} className={classes.girl} alt="girl"></img>
              <div className={classes.highlight}> 
                  <div className={classes.box}>
                      <strong>Driving License</strong>
                      <p>required</p>
                  </div>
                  <div className={classes.box}>
                  <strong>Aadhar Card</strong>
                      <p>required</p>
                  </div>
                  <div className={classes.box}>
                  <strong>Gender</strong>
                      <p>{gender}</p>
                  </div>
                  <div className={classes.box}>
                  <strong>Two-wheeler</strong>
                      <p>required</p>
                  </div>
              </div>
          </Grid>
          <Grid item xs={12} sm ={6} className={classes.paper}>
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className={classes.aCard}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography className={classes.heading}>Job Description</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            <div className={classes.listItem}><FiberManualRecordIcon></FiberManualRecordIcon><p>Company, <strong>{clientName}</strong></p></div>
                <div className={classes.listItem}><FiberManualRecordIcon></FiberManualRecordIcon><p>Adress, <strong>DL, road {location}</strong></p></div>
                <div className={classes.listItem}><FiberManualRecordIcon></FiberManualRecordIcon><p><strong>Morning </strong>shift, <strong>{shift}</strong></p></div>
                <div className={classes.listItem}><FiberManualRecordIcon></FiberManualRecordIcon><p>Deliver products to customer</p></div>
                <div className={classes.listItem}><FiberManualRecordIcon></FiberManualRecordIcon><p>Collects payments and ensure timely delivery</p></div>
            
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className={classes.aCard}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography className={classes.heading}>Key Features</Typography>
  
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
                <div className={classes.listItem}><FiberManualRecordIcon></FiberManualRecordIcon><p>Daily earning, <strong>120 Rs/hour</strong></p></div>
                <div className={classes.listItem}><FiberManualRecordIcon></FiberManualRecordIcon><p>Flexible, <strong>working hours</strong></p></div>
                <div className={classes.listItem}><FiberManualRecordIcon></FiberManualRecordIcon><p><strong>paid</strong> training</p></div>
                <div className={classes.listItem}><FiberManualRecordIcon></FiberManualRecordIcon><p>T-shirts and gadgets</p></div>
                <div className={classes.listItem}><FiberManualRecordIcon></FiberManualRecordIcon><p>Zero onboarding fee</p></div>
            
            </Typography>
          </AccordionDetails>
        </Accordion>
        {localStorage.getItem("authToken") ? (
<Button className={classes.apply} variant="contained" color="primary" onClick={handleOpen}>
        Apply now
      </Button>
):(
<Button className={classes.apply} variant="contained" color="primary" disabled>
        Apply now
      </Button>
)}
          </Grid>
        </Grid>
        <Footer/>
        
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
            <div className={classes.formpaper}>
  <Application></Application>
            </div>
          </Fade>
  </Modal>
  </div>
        )
      }
 
    </div>  );
}
 
export default Job;