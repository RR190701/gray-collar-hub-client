import React, {useState} from 'react';
import Lottie from 'react-lottie';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import * as animationData from './../utils/deliveryMan.json';
import * as dayNight from './../utils/day-night.json'
import * as lessC from './../utils/lessCoin.json';
import * as moreC from './../utils/moreCoin.json'
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import call from './../utils/call.svg'
import CircularProgress from '@material-ui/core/CircularProgress';
import { ToastContainer, toast } from 'react-toastify';
import Navbar from './navbar';
import Paper from '@material-ui/core/Paper';
import submitCard from './../utils/submitCard.png';
import interview from './../utils/interview.png';
import job from './../utils/job.png';
import work from "./../utils/work.png";
import application from "./../utils/application.svg";
import arrow from './../utils/right-arrow.png';
import time from './../utils/clock.png';
import coins from './../utils/coins.png';
import money from './../utils/money-bag.png'
import * as packageDeliver from './../utils/pakage_deliver.json';
import * as foodDeliver from './../utils/food_delivery.json'
import * as cab from './../utils/cab.json'
import collar from './../utils/collar.png'
import teamwork from './../utils/teamwork.png'
import FooterPagePro from './footer';
import Footer from './footer';
import Application from './application';
import timeTrack from './../utils/time-tracking.png'
import deliveryWomen from './../utils/delivery-woman.png'
import earning from './../utils/earning.png'
import findJob from './../utils/find.png';
import User from './../utils/user.png';



const useStyles = makeStyles((theme) => ({
    home_div: {
        textAlign:"center",
        overflowX: 'hidden'

    },
link: {
  textDecoration: 'none',
  color: 'black'
},
tr: {
color: '#FF4F5B',
fontSize: '2rem'
},
p: {
  
  fontSize: '1.3rem'
  },
r: {
  fontSize: '2.5rem',
margin:".5rem 0",
fontWeight:'normal',
'& strong':{
  color:"#18A558"
}
  },
track: {
width: '50%',
},
cont: {
  marginTop:'2.5rem',
  padding: '1.5rem',
  backgroundColor:'#d0f0c0',
  },
    home_heading:{
        fontSize:"2.5rem",
        margin:"2rem 0 0rem",
        '& strong':{
          color:"#18A558"
        }
    },
    pros:{
      margin:"0 0 1rem",
      '& strong':{
        color:"#18A558"
      }

    },
    prosCard:{  
      padding: '2rem 1.5rem',
      width:'80%',
      borderRadius:'10px',
      margin:'1rem auto',
      boxSizing:"borderBox",
    backgroundColor:'#d0f0c0',
    textAlign:'center',
    '& h1':{
      marginBottom:0,
      marginTop:'1.5rem',
      fontSize:'1.5rem'
    },
    '& p':{
      marginTop:0,
      fontSize:'1.1rem'
    }

    },
    find_jobs:{
        margin:"2rem 0 3rem",
        backgroundColor:"#40E0D0",
        color:"#000",
        textTransform:"none",
        marginLeft:'1rem',
              
      '&:hover': {
        backgroundColor:"#00BFFF",
        color:"#000"
        },
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
      width:'55%',
      boxShadow: theme.shadows[5],
      paddingBottom: theme.spacing(4, 2),
      display:'flex',
    },
    info:{
      width:'50%',
      padding:'2rem',
      display:'flex',
      flexWrap:'wrap',
      justifyContent:'center',
      '& > p':{
        fontSize:"1rem",
        textAlign:'center',
        margin:0,
        '& strong':{
          color:"#18A558"
        }
      }

    },
    form:{
      width:'50%',
      display:'flex',
      padding:'3rem 2rem',
      boxSizing:'border-box',
      flexWrap:'wrap',
      justifyContent:'center',
      '& > *':{
        width:'200px',
        margin:'0.5rem'
        
        
      }
    },
    cardsDiv:{
      backgroundColor:'#90EE90',
      padding:'1rem 0 3rem',
      '& > p':{
        fontSize:'2rem',
        marginBottom:'3rem',
        '& > strong':{
          color:'#00BFFF'
        }
      }
    },
    cards:{
      width:'100%',
      display:'flex',
      justifyContent:'space-evenly'
    },
    card:{
      padding:'2rem 1rem',
      width:'25%',
      '& > img':{
        width:'80%'
      },
      '& > p':{
        fontSize:'1.4rem',
        margin:'.5rem 0 0 0',
        '& > strong':{
          color:'#18A558'
        }
      }
    },
    earn:{
      width:'45%',
      margin:'0 auto',
      display:'flex',
      '& > *':{
        margin:'1rem',
        width:'60px'
      }
    },
    down:{
      paddingBottom:'2rem',
      '& > h1':{
fontSize:'2.5rem',
marginTop:'3rem',
fontWeight:'normal',
'& > strong':{
  color:'#18A558'
}
      },
      '& > h2':{
fontWeight:'normal',
width:'80%',
margin:'1.5rem auto 1.5rem'
      },
      '& > p':{
        fontSize:'1.5rem',
        fontWeight:'bold',
        color:"#18A558"
      }
    },
    infoCard:{
    width:'80%',
    margin:'2rem auto',
    backgroundColor:'#fff',
    borderRadius:'5px',
    padding:'2rem ',
    '& h1':{
      color:"#18A558",
      fontSize:'1.7rem',
      fontWeight:'normal'
    },
    '& p':{
      fontSize:'1.3rem'
    },
    '& strong':{
      color:"#40E0D0"
    }
    },
    hub:{
      width:'300px',
      margin:'2rem 0'
    },
    moneyCard:{
      width:'90%',
      margin:'0 auto',
      alignItems:'center',
      '& h1':{
        fontSize:'1.5rem',
        color:"#18A558"
      }
 },
 diff:{
   border:'cream solid 1px',
   backgroundColor:'#fffdd0',
   padding:'1rem 1.5rem .5rem' ,
   borderRadius:'5px',
   width:'90%',
   margin:'0 auto',
   display:'flex',
   justifyContent:'space-between',
   '& p':{
     width:'80%',
     fontWeight:'600'
   }

 }
  }));

  const DayNight = {
    loop: true,
    autoplay: true, 
    animationData: dayNight.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const foodDelivery = {
    loop: true,
    autoplay: true, 
    animationData: foodDeliver.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const packageDelivery = {
    loop: true,
    autoplay: true, 
    animationData: packageDeliver.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const cabDriver = {
    loop: true,
    autoplay: true, 
    animationData: cab.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const lessCoin = {
    loop: true,
    autoplay: true, 
    animationData: lessC.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const moreCoin = {
    loop: true,
    autoplay: true, 
    animationData: moreC.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

const Home = () => {
  const [error, setError] = useState("");
 const classes = useStyles();
 const [open, setOpen] = React.useState(false);
 const [name, setName] = useState("");
 const [org, setOrg] = useState("");
 const [phone, setPhone] =useState("");
 const [adding, setAdding] = useState(false);
 
const handleOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};

const handleSubmit = async (e) =>{
  setAdding(true);
  e.preventDefault();
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const { data } = await axios.post(
      "https://pure-caverns-24063.herokuapp.com/api/client/registerClient",
      {
        clientId: '512323', name, org,phone, status: 'active'

       
      },
      config
    );
    handleClose();
    setAdding(false)
    toast.success("Saved Sucessfully!")
  } catch (error) {
  //   popError(error.response.data.error);
    // setError(error.response.data.error);
   
      setTimeout(() => {
        setError("");
      }, 5000);
    

  }
}
    return ( <div className={classes.home_div}>
      <Navbar></Navbar>
       <ToastContainer />   
        <p className={classes.home_heading} data-aos ="slide-up">
            Earn <strong> hourly</strong>, where ever and when ever you want!
        </p>
<img data-aos ="zoom-in" className ={classes.hub} src={teamwork} alt="grey-collar-hub"></img>

        {/* classification center */}
  <Grid container justifyContent="center" alignItems="center" className={classes.classification}>
<Grid item direction="row" xs={12}>
  <h1 data-aos="slide-up" className={classes.pros}>What do we have <strong>for you</strong> ?</h1>
</Grid>
<Grid item direction="row" xs={12}>
  <img data-aos="zoom-in" src={collar} height="90" alt="collar"></img>
</Grid>
<Grid container justifyContent="center" alignItems="center">
  <Grid container justifyContent="center" alignItems="center" direction="row">

<Grid item xs={12} sm={4}>
 <div className={classes.prosCard} data-aos="flip-left">
 <div>
        <Lottie options={packageDelivery}
     
              height={200}
              width={250}
              isStopped={false}
              isPaused={false}/>

        </div>
        <h1>Packages Delivery</h1>
        <p>Deliver packages at the door steps</p>
 </div>
</Grid>
<Grid item xs={12} sm={4}>
  <div className={classes.prosCard} data-aos="flip-left">
  <div>
        <Lottie options={foodDelivery}
     
              height={200}
              width={250}
              isStopped={false}
              isPaused={false}/>

        </div>
        <h1>Food Delivery</h1>
        <p>Deliver food orders to nearby locations</p>
    </div>
</Grid>
<Grid item xs={12} sm={4}>
<div className={classes.prosCard} data-aos="flip-left">
<div >
        <Lottie options={cabDriver}
     
              height={200}
              width={250}
              isStopped={false}
              isPaused={false}/>

        </div>
        <h1>Cab Driver</h1>
        <p>Work as a online cab driver</p>
    </div>
</Grid>
  </Grid>

</Grid>
      </Grid>
      {/* end to classification center */}


<Button className={classes.find_jobs} variant="contained" color="primary">
        <Link className={classes.link} to="/findJobs" >Lets find jobs</Link>
      </Button>
      
      <Button className={classes.find_jobs} variant="contained" color="primary"
      
      onClick={handleOpen}>
        Hire workers
      </Button>

{/* three steps */}
  <Grid container justifyContent="center" alignItems="center" className={classes.cardsDiv}>
  <p>With everything so easy, start your <strong>new job </strong>today</p>
<Grid container justifyContent="center" alignItems="center" direction="row">
<Grid item xs={12}  sm={2}>
</Grid>

<Grid item xs={12}  sm={4}>
<img src={findJob} height="" alt="work"  data-aos="zoom-in-right"></img>
</Grid>
<Grid item xs={12}  sm={4}>
  <div className={classes.infoCard} data-aos="zoom-in-left">
    <h1>Find <strong>jobs</strong> easily</h1>
<p>Find and filter jobs very easily at your closest location with your desirable shift and many more </p>
    </div>
</Grid>
<Grid item xs={12} sm={2}>
</Grid>
  </Grid>
  
  <Grid container justifyContent="center" alignItems="center" direction="row">
  <Grid item xs={12} sm={2}>
</Grid>
<Grid item xs={12} sm={4}>
<div className={classes.infoCard} data-aos="zoom-in-right">
    <h1>Complete your <strong>profile</strong> </h1>
<p>Applying to a job is never been this easy just omplete your profile and submit applications in one click</p>
    </div>
</Grid>
<Grid item xs ={12} sm={4}>
<img src={User} height="" alt="work" data-aos="zoom-in-left"></img>
</Grid>
<Grid item xs={12} sm={2}>
</Grid>
  </Grid> 

  <Grid container justifyContent="center" alignItems="center" direction="row">
  <Grid item xs={12} sm={2}>
</Grid>
<Grid item xs={12} sm={4}>
<img src={job} height="" alt="work"  data-aos="zoom-in-right"></img>
</Grid>
<Grid item xs={12} sm={4}>
  <div className={classes.infoCard} data-aos="zoom-in-left">
    <h1>Work for <strong>multiple</strong> companies</h1>
<p>Start working for multiple company at a time and earn more</p>
    </div>
</Grid>
<Grid item xs={12} sm={2}>
</Grid>
  </Grid>
</Grid>
{/* end of three steps */}

      <div className={classes.down}>
        <h1>Work <strong>Day</strong> and <strong>Night</strong>, plan your own shift</h1>
        <div data-aos ="zoom-in-up">
        <Lottie options={DayNight}
     
              height={270}
              width={420}
              isStopped={false}
              isPaused={false}/>

        </div>
        <h2 data-aos ="fade-up">Its time to be smart and earn more, join us and work for more than one company at a time. Less waiting times and higher earnings.
        Utilize that free time to earn a little more, selects jobs and work for all of them, don't be a normal delivery guy be smart work with multiple big companies to maximize your earnings.

        </h2>
      </div>
      

<Grid container justifyContent="center" alignItems="center">
<Grid container justifyContent="center" alignItems="center" direction="row">
<Grid item xs={12}  sm={2}>
</Grid>
<Grid item xs={12}  sm={4}>
<div className={classes.moneyCard}>
        <Lottie options={lessCoin}
              //  style={{marginTop:'5rem'}}
              height={250}
              width={250}
              isStopped={false}
              isPaused={false}/>
              <h1>With Other Company</h1>
              <div  className={classes.diff} data-aos="slide-up">
                <img src={time} height ="60" alt="job"></img>
                <p>
                  You waste you time while waiting for your next shift
                </p>
                </div>
</div>
</Grid>
<Grid item xs={12}  sm={4}>
<div className={classes.moneyCard}>
        <Lottie options={moreCoin}
     
              height={250}
              width={250}
              isStopped={false}
              isPaused={false}/>
               <h1>With Grey Collar Hub</h1>
               <div className={classes.diff}  data-aos="slide-up">
                <img src={work} alt="job"></img>
                <p>
                  You work with multiple comapnies, plan your own shifts and earn more
                </p>
                </div>
</div>
</Grid>
<Grid item xs={12} sm={2}>
</Grid>
  </Grid>
</Grid>


      <Grid container justifyContent="center" alignItems="center" className={classes.cont}>
<Grid item direction="row" xs={12}>
  <h1 className={classes.r}>What's <strong>more</strong> ?</h1>

</Grid>
<Grid container justifyContent="center" alignItems="center">
  <Grid container justifyContent="center" alignItems="center" direction="row">

<Grid item sm={6}>
<img src={timeTrack} height="" alt="work"  data-aos="zoom-in-right"></img>
</Grid>
<Grid item sm={6}>
  <div className={classes.infoCard} data-aos="flip-up"> 
    <h1>Stay updated about your <strong>applications</strong></h1>
    <p>Keep a track of your applications and stay updated with your hiring status, weather you get hired or regected we keep you informed.</p>
    </div>
</Grid>
  </Grid>

  <Grid container justifyContent="center" alignItems="center" direction="row">

<Grid item sm={6}>
<div className={classes.infoCard} data-aos="flip-up">
    <h1>Keep track of your <strong>daily earning</strong> goals</h1>
<p>Meet up to your daily earning goals as we keep that track for you, look for the shifts you have work for today and earn hourly</p>
    </div>
</Grid>
<Grid item sm={6}>
<img src={earning} height="" alt="work" data-aos="zoom-in-left"></img>
</Grid>
  </Grid>

  <Grid container justifyContent="center" alignItems="center" direction="row">

<Grid item sm={6}>
<img src={deliveryWomen} height="" alt="work"  data-aos="zoom-in-right"></img>
</Grid>
<Grid item sm={6}>
  <div className={classes.infoCard} data-aos="flip-up">
    <h1>Delivery jobs for <strong>women</strong></h1>
<p>Work as a delivery women, find safe jobs easily in your area and select the timing shifts you are comfortable with</p>
    </div>
</Grid>
  </Grid>

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
        <div className={classes.paper}>
          <div className={classes.info}>
           
<img src={call} data-aos="zoom-out" width="80%" height=" 80%" alt="admin"></img>

<p>Our team will <strong>contact you</strong>, at the earliest</p>
          </div>
          <form className={classes.form} Validate onSubmit={handleSubmit} autoComplete="off">
  <TextField  size="small" id="clientId" value={name} onChange={(e)=>setName(e.target.value)} label="Name" variant="outlined" />
  <TextField size="small" id="clientName" value={org} onChange={(e) => setOrg(e.target.value)} label="Organisation" variant="outlined" />
  <TextField  size="small" id="timings" value={phone} onChange={(e) => setPhone(e.target.value)} label="Phone" variant="outlined" />
<Button
        variant="contained"
        type="submit" 
        className={classes.find_jobs}
        
        
      >
        Submit
      </Button>
      {
        adding?
        <CircularProgress color="primary" />:null
      } 
</form>

          </div>
        </Fade>
      </Modal>
    </div> );
}
 
export default Home;