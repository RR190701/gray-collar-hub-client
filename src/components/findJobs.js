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
         color:'#FF4F5B'
     },

 },
 jobs:{
    backgroundColor:'#EEEEEE',
    border:'4px solid 	#E5E5E5',
    width:'60%',
    margin:'1rem auto',
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
    backgroundColor:'yellow',
    marginRight:'1rem',
    textTransform:'none',
    fontWeight:'bold',
    '&:hover':{
        backgroundColor:'yellow'
    }
},
count:{
  width:'60%',
  margin:'0 auto',
  textAlign:'left',
  fontSize:'1.5rem',
  fontWeight:'bold',
  '& > strong':{
    color:"#FF4F5B"
  }
}

  }));

const Findjobs = ({history}) => {
  const [Data, setData] = useState([]);
  const [Url, seturl] = useState(`allJobs`);
  const [count, setCount] = useState(0)
 
  useEffect(() => {
    const fetchData = async () => {
  
    
    
  
        try {
    
    //  console.log(Url)
          const { data } = await axios.get(`https://pure-caverns-24063.herokuapp.com/api/Jobs/`+Url);
          setData(data);
          if(data.allJobs){
            setCount(data.allJobs.length)
          }
          if(data.allFemaleJobs){
            setCount(data.allFemaleJobs.length)
          }

          console.log(Data)
          setLoader(false)
        
        } catch (error) {
          console.log(error.response.data.error);
        }
      };
      fetchData();
    },[history]);
console.log(Data.allJobs)
    const classes = useStyles();
    const [select, setSelect] = useState("all");
const [loader, setLoader] =useState(true);
    
    const filterAll = () =>{
      setLoader(true)
      seturl(`allJobs`)
       setSelect("all");
    }
const filterWomen = () =>{

  setLoader(true)
  seturl(`allfemaleJobs`)
  setSelect("women");
  
  


    }
 const filterMumbai= () =>{
    setSelect("mumbai");
    }
const filterDelhi = () =>{
    setSelect("delhi");
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
                    if(data.allJobs){
                      setCount(data.allJobs.length)
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
        <p className={classes.heading}>
            Find jobs at 
            <strong> any location</strong>
        </p>
        {
          <p className={classes.count}>(<strong>{count}</strong>) active jobs</p>
        }
     
        <div className={classes.filter}>
        <Button
        variant="contained"
        className={(select === "all")?classes.select:classes.button }
        onClick={filterAll}
      >
        All
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
        className={(select === "women")?classes.select:classes.button }
        onClick={filterWomen}
    
      >
        Women jobs
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
            ):
           
            <div  className={classes.jobs} >{ Url === `allJobs` ? ( 
             Data.allJobs?.map((jobs, i) => (
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
            ):(
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
            )
        }
            </div>
          
}
      
<Footer/>

    </div>  );
}
 
export default Findjobs;