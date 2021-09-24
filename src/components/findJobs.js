import React ,{useState, useEffect} from "react";
import JobCard from './jobCard';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Loader from "react-loader-spinner";
import axios from 'axios';
import Navbar from "./navbar";
import Footer from "./footer";
const useStyles = makeStyles((theme) => ({

    loader:{
margin:'8rem auto'
    },
    container: {
        width:'100%',
        textAlign:"center",
 },
 heading:{
     fontSize:'2.3rem',
     '& strong':{
      color:"#18A558"
     },

 },
 jobs:{
    backgroundColor:'#EEEEEE',
    border:'4px solid 	#E5E5E5',
    width:'60%',
    margin:'1rem auto 5rem',
    padding:'2rem',
    borderRadius:'5px',
    display:'flex',
    flexWrap:'wrap',
    justifyContent:'space-between',
    maxHeight:'500px',
    boxSizing:'border-box',
    overflow:'scroll'
},
filter:{
    width:'60%',
    margin:'1rem auto',
    display:'flex',
    flexWrap:'wrap'
},
button:{
    marginRight:'1rem',
    textTransform:'none'
},
select:{
  backgroundColor:"#40E0D0",
    marginRight:'1rem',
    textTransform:'none',
    fontWeight:'bold',
    '&:hover':{
      backgroundColor:"#00BFFF",
    }
},
count:{
  width:'60%',
  margin:'0 auto',
  textAlign:'left',
  fontSize:'1.5rem',
  fontWeight:'bold',
  '& > strong':{
    color:"#18A558"
  }
}

  }));

const Findjobs = ({history}) => {
  const [Data, setData] = useState([]);
  const [Url, seturl] = useState(`AllDeliveryJobs`);
  const [count, setCount] = useState(0)
 
  useEffect(() => {
    const fetchData = async () => {
  
    
    
  
        try {
    
    //  console.log(Url)
          const { data } = await axios.get(`https://pure-caverns-24063.herokuapp.com/api/Jobs/`+Url);
          setData(data);
          if(data.alldeliveryJobs){
            setCount(data.alldeliveryJobs.length)
          }
          if(data.alldrivingJobs){
            setCount(data.alldrivingJobs.length)
          }
          if(data.allFemaleJobs){
            setCount(data.allFemaleJobs.length)
          }
          if(data.alldelhiJobs){
            setCount(data.alldelhiJobs.length)
          }
          if(data.allMumbaiJobs){
            setCount(data.allMumbaiJobs.length)
          }

          console.log(Data)
          setLoader(false)
        
        } catch (error) {
          console.log(error.response.data.error);
        }
      };
      fetchData();
    },[history]);
console.log(Data.alldeliveryJobs)
    const classes = useStyles();
    const [select, setSelect] = useState("delivery");
const [loader, setLoader] =useState(true);
    
    const filterDelivery = () =>{
      setLoader(true)
      seturl(`AllDeliveryJobs`)
       setSelect("delivery");
    }
const filterDriving = () =>{

  setLoader(true)
  seturl(`AllDrivingJobs`)
  setSelect("driving");
  
  


    }
    const filterfemale = () =>{

      setLoader(true)
      seturl(`allfemaleJobs`)
      setSelect("female");
      
      
    
    
        }
 const filterMumbai= () =>{
  setLoader(true)
  seturl(`MumbaiJobs`)
    setSelect("Mumbai");
    }
const filterDelhi = () =>{
  setLoader(true)
  seturl(`DelhiJobs`)
    setSelect("Delhi");
            }    

      
                 
            //   let filterFord = () => {
            //     const fordAutos = Data.allJobs.filter( (job) => job.gender.includes("female"));
            //     // const fordAutos = autoData.filter( (auto) => auto.title.includes("Ford"));
        
            //     setData({ job: fordAutos });
            //     console.log(Data)
            // }   
            useEffect(() => {
              const fetchData = async () => {    
            
                  try {
              
              //  console.log(Url)
                    const { data } = await axios.get(`https://pure-caverns-24063.herokuapp.com/api/Jobs/`+Url);
                    setData(data)
                    if(data.alldeliveryJobs){
                      setCount(data.alldeliveryJobs.length)
                    }
                    if(data.alldrivingJobs){
                      setCount(data.alldrivingJobs.length)
                    }
                    if(data.allFemaleJobs){
                      setCount(data.allFemaleJobs.length)
                    }
                    setLoader(false)
                  
                  } catch (error) {
                    console.log(error.response.data.error);
                  }
                };
                fetchData();
              },[Url]);
        
    return (<div style={{overflowX: 'hidden'}} className={classes.container}>
      <Navbar></Navbar>
        <p className={classes.heading}  data-aos="fade-up">
            Find jobs at 
            <strong> any location</strong>
        </p>
        {
          <p className={classes.count}>(<strong>{count}</strong>) active jobs</p>
        }
     
        <div className={classes.filter}>
        <Button
        variant="contained"
        className={(select === "delivery")?classes.select:classes.button }
        onClick={filterDelivery}
      >
        Delivery Jobs
      </Button>
      {/* <Button
        variant="contained"
        className={(select === "mumbai")?classes.select:classes.button }
        onClick={filterMumbai}
      >
      Mumbai
      </Button> */}
      <Button
        variant="contained"
        className={(select === "driving")?classes.select:classes.button }
        onClick={filterDriving}
      >
        Driving jobs
      </Button>
      <Button
        variant="contained"
        className={(select === "female")?classes.select:classes.button }
        onClick={filterfemale}
      >
        Female jobs
      </Button>
      {/* <Button
        variant="contained"
        className={(select === "delhi")?classes.select:classes.button }
        onClick={filterDelhi}
      >
        Delhi
      </Button> */}
        </div>
        {
          <p className={classes.count}>Trending active jobs</p>
        }
            <div className={classes.filter}>
  
      <Button
        variant="contained"
        className={(select === "Delhi")?classes.select:classes.button }
        onClick={filterDelhi}
      >
        Delhi
      </Button>
      <Button
        variant="contained"
        className={(select === "Mumbai")?classes.select:classes.button }
        onClick={filterMumbai}
      >
        Mumbai
      </Button>
        </div>
        {
            loader?(
                <div>
                <Loader
                className={classes.loader}
                 type='TailSpin'
                 color="#18A558"
                 height={80}
                 width={80}
               />
               </div>
            ):
           
            <div  className={classes.jobs} >{ Url === `AllDeliveryJobs` ? ( 
             Data.alldeliveryJobs?.map((jobs, i) => (
            <JobCard
            key={i}
            clientId = {jobs.clientId}
            clientName = {jobs.clientName}
            gender = {jobs.gender}
            jobName = {jobs.jobName}
            location = {jobs.location}
            salary = {jobs.salary}
            shift = {jobs.shift}
            JobId = {jobs.JobID}
            />
      ))
            ): Url === `MumbaiJobs`? (
              Data.allMumbaiJobs?.map((jobs, i) => (
                <JobCard
                key={i}
                clientId = {jobs.clientId}
                clientName = {jobs.clientName}
                gender = {jobs.gender}
                jobName = {jobs.jobName}
                location = {jobs.location}
                salary = {jobs.salary}
                shift = {jobs.shift} 
                JobId = {jobs.JobID}
                />
          ))
            ):Url === `DelhiJobs`? (
              Data.alldelhiJobs?.map((jobs, i) => (
                <JobCard
                key={i}
                clientId = {jobs.clientId}
                clientName = {jobs.clientName}
                gender = {jobs.gender}
                jobName = {jobs.jobName}
                location = {jobs.location}
                salary = {jobs.salary}
                shift = {jobs.shift} 
                JobId = {jobs.JobID}
                />
          ))
            ):Url === `allfemaleJobs`? (
              Data.allFemaleJobs?.map((jobs, i) => (
                <JobCard
                key={i}
                clientId = {jobs.clientId}
                clientName = {jobs.clientName}
                gender = {jobs.gender}
                jobName = {jobs.jobName}
                location = {jobs.location}
                salary = {jobs.salary}
                shift = {jobs.shift} 
                JobId = {jobs.JobID}
                />
          ))
            ):Url === `AllDrivingJobs`? (
              Data.alldrivingJobs?.map((jobs, i) => (
                <JobCard
                key={i}
                clientId = {jobs.clientId}
                clientName = {jobs.clientName}
                gender = {jobs.gender}
                jobName = {jobs.jobName}
                location = {jobs.location}
                salary = {jobs.salary}
                shift = {jobs.shift} 
                JobId = {jobs.JobID}
                />
          ))
            ):(null)
        }
            </div>
          
}
      
<Footer/>

    </div>  );
}
 
export default Findjobs;