import React,{useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ApplicationCard from './ApplicationCard';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Apps from './../utils/No appication.svg';
import Navbar from './navbar';
import Loader from "react-loader-spinner";

const useStyles = makeStyles((theme) => ({
  loaderDIV:{
width:'100%'
  },
  loader:{
    margin:'8rem auto'
        },
        info:{
          fontSize: '2.3rem'
              },
myApp:{
    width:'100%',
    textAlign:'center',
    '& > p':{
        fontSize:'2rem',
        margin:'1rem 0',
        '& > strong':{
          color:"#18A558"
        }
    }
},
app:{
    backgroundColor:'#EEEEEE',
    border:'4px solid 	#E5E5E5',
    width:'70%',
    margin:'1rem auto',
    padding:'2rem',
    borderRadius:'5px',
    display:'flex',
    flexWrap:'wrap',
    justifyContent:'space-between',
    maxHeight:'500px',
    boxSizing:'border-box',
    overflow:'scroll',
},
message:{
  width:'100%',
  '& > p':{
    fontSize:'1.8rem',
    margin:0,
    '& > strong':{
      color:"#18A558"
    }
  }
},
noApply:{
  width:'40%',
  margin:'2rem 0'
},
 
  }));
   const data1 = [];
const MyApplication = () => {
    const [data, setData] =useState([])
    const classes = useStyles();
    const [loader, setLoader]=useState(true)
    useEffect(() => {
        const fetchData = async () => {
      
        
        
      
            try {
        
        //  console.log(Url)
              const { data } = await axios.get(`https://pure-caverns-24063.herokuapp.com/api/apply/allApplications/${localStorage.getItem("userId")}`);
              console.log(data);

              let l =[];

              data.AllApplication?.forEach(({jobName,clientName,status, date,location, jobId}) => {
                  const appDate = new Date(date);
                l.push({
                    jobName,
                    clientName,
                    status,
                    date:`${appDate.getDate()}/${appDate.getMonth()}/${appDate.getFullYear()}`,
                    location,
                    jobId
                })
              })
              setData( prevSate => {
                return [...prevSate, ...l]})
                setLoader(false);
              console.log(l)
       
            
            } catch (error) {
              console.log(error.response.data.error);
            }
          };
          fetchData();
        },[]);

    return ( <div className={classes.myApp}>
        <Navbar></Navbar>
        <p  data-aos="fade-up">My <strong>Applications</strong></p>
            {
                
                loader?(
                  <div className={classes.loaderDIV}>
                  <Loader
                  className={classes.loader}
                   type='TailSpin'
                   color="#18A558"
                   height={80}
                   width={80}
                 />
                 </div>
              ): data.length !== 0?(

               <div  className={classes.app} >
                 {
                                   data.map(({jobName, clientName, location, status, date, jobId}) =>(
                                    <ApplicationCard jobName={jobName}
                                    clientName={clientName}
                                    location={location}
                                    status={status}
                                    date={date}
                                    jobId={jobId}></ApplicationCard>  ))

                 }
            </div>
              ):(
                <div>
                    <Grid container justifyContent="center" alignItems="center" direction="row">
          <Grid item xs={12} sm={6}>
                  <div className={classes.message} data-aos="fade-up">
                    <p>Apply for the <strong>jobs</strong> and check</p>
                    <p>your <strong>applications</strong> status here
                      </p>
                    </div>
                  </Grid>
                  <Grid  xs={12} sm={6} className={classes.right}>
 <img src={Apps} alt="no-applications"  className={classes.noApply} data-aos="fade-up"></img>
 </Grid>
 </Grid>
                </div>
              )
              

            }
          
    </div> );
}
 
export default MyApplication;