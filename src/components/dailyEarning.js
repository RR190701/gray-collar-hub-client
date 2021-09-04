import React,{useState, useEffect} from 'react';
import EarningCard from './earningCard';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './navbar';
import wallet from './../utils/wallet.png';
import Loader from "react-loader-spinner";
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
    loader:{
        margin:'8rem auto'
            },
  div:{

textAlign:'center',

'& > p':{
    fontSize:'2.3rem',
    '& strong':{
        color:"#FF4F5B"
      }
}
  },
  allCards:{
      width:'65%',
      margin:'0 auto',
      display:'flex',
      justifyContent:'center',
      flexWrap:'wrap'
  },
  total:{
      width:'60%',
      display:'flex',
      margin:'0 auto',
      textAlign:'left',
      marginBottom:'2rem',
      alignItems:'center',
      '& > img' :{
          width:'80px'
      }
  },
  walletMoney:{
      textAlign:'center',
     
      alignItems:'center',
      marginLeft:'1rem',
      '& > p':{
          margin:0,
          fontSize:'1.8rem',
          color:'#008000',
      }
  }
      }));

const DailyEarning = () => {
    const classes = useStyles();
    const [loader, setLoader]=useState(true)
    const [jobs, setJobs]=useState([]);
    const [total, setTotal] =useState(0);


    useEffect(() => {
        const fetchData = async () => {
      
        
        
      
            try {
        
        //  console.log(Url)
              const { data } = await axios.get(`https://pure-caverns-24063.herokuapp.com/api/apply/allApplications/${localStorage.getItem("userId")}`);
              console.log(data);

              let l =[];

              data.AllApplication?.forEach(({jobName,clientName,status, date,location, jobId}) => {
                  const appDate = new Date(date);

                  if(status=== 'hired'){
                    l.push({
                        jobName,
                        clientName,
                        status,
                        date:`${appDate.getDate()}/${appDate.getMonth()}/${appDate.getFullYear()}`,
                        location,
                        jobId
                    })

                  }

              })
              setJobs( prevSate => {
                return [...prevSate, ...l]})
                setLoader(false);
              console.log(l)
       
            
            } catch (error) {
              console.log(error.response.data.error);
            }
          };
          fetchData();
        },[]);

    return ( <div className={classes.div}>
        <Navbar></Navbar>
        <p><strong>Daily earning</strong> goals</p>
        {
            loader?(
                <div className={classes.loaderDIV}>
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
                          <div className={classes.total}>
            <img src ={wallet} alt="wallet"></img>
            <div className={classes.walletMoney}>

            <p>1200</p>
            <strong>Total (Rs)</strong>
            </div>
        </div>
        <div className={classes.allCards}>
            {
                jobs.map(({jobName, clientName, salary, location})=>(
                    <EarningCard jobName={jobName}
                    clientName={clientName}
                    timings="2:00PM - 8:00PM"
                    salary="400"
                    location={location}></EarningCard>
                ))
            }
    
        </div>

                    </div>
            )
        }
  
    </div> );
}
 
export default DailyEarning;