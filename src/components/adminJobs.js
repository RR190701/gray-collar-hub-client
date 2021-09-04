import React ,{useState, useEffect} from "react";
import Loader from "react-loader-spinner";
import { makeStyles } from '@material-ui/core/styles';
import { DataGrid,
  filterGridStateSelector,
  GridToolbarContainer,
  GridToolbarExport, } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import AddIcon from '@material-ui/icons/Add';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import LinearProgress from '@material-ui/core/LinearProgress';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

//columns
const columns = [
    { field: 'id', 
    headerName: 'Job Id', 
    width: 160 },
    {
      field: 'clientId',
      headerName: 'Client Id',
      width: 150,
      editable: true,
    },
    {
      field: 'clientName',
      headerName: 'Client name',
      width: 150,
      editable: true,
    },
    {
        field: 'jobName',
        headerName: 'Job name',
        width: 150,
        editable: true,
      },
      {
        field: 'timings',
        headerName: 'Timings',
        width: 150,
        editable: true,
      },
      {
        field: 'gender',
        headerName: 'Gender',
        width: 150,
        editable: true,
      },
      {
        field: 'shift',
        headerName: 'Shift',
        width: 150,
        editable: true,
      },
      {
        field: 'aadhar',
        headerName: 'Aadhar Card',
        width: 150,
        editable: true,
      },
      {
        field: 'vehicle',
        headerName: 'Vehicle',
        width: 150,
        editable: true,
      },
    {
      field: 'salary',
      headerName: 'Salary',
      width: 170,
      editable: true,
    },

  ];
  
//style
const useStyles = makeStyles((theme) => ({
loader:{
    margin:'9rem auto'
},

allJobs:{
    textAlign:'left',
    '& > button':{
        backgroundColor:'yellow',
        textTransform:"none",
        color:'black',
        marginBottom:'1rem',

        '&:hover':{
            backgroundColor:'yellow',
        }
    }
},
modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin:'auto'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '.5px solid #000',
    borderRadius:'5px',
    width:'60%',
    boxShadow: theme.shadows[5],
    paddingBottom: theme.spacing(4, 2),
    textAlign:'center',
    '& > p':{
     fontSize:'2rem',
     margin:'1.4rem 0 0 0',
     '& > strong':{
         color:'#FF4F5B'
     }

    }

  },
  form:{
      display:'flex',
      justifyContent:'space-between',
      width:'100%',
      flexWrap:'wrap',
      padding:'1rem',
      boxSizing:'border-box',
    '& > *':{
        margin:'1rem',
        width:'28%',
        
    }
  },
  addButton:{
    backgroundColor:'yellow',
    textTransform:"none",
    color:'black',
    width:'200px',
    margin:'1rem auto 1.3rem',

    '&:hover':{
        backgroundColor:'yellow',
    }
  },
  bigLength:{
    width:'62%'
  }
  }));


const AllJobs = ({history}) => {
const classes = useStyles();
const [loader, setLoader] =useState(true); 
const [adding, setAdding] = useState(false);
const [open, setOpen] = React.useState(false);
const [clientId, setClientId] = useState("");
const [clientName, setClientName] = useState("");
const [jobName, setJobName] = useState("");
const [timings, setTimings] =useState("");
const [gender, setGender] =useState("");
const [shift, setShift]=useState("");
const [JobID, setJobID] = useState("");
const [error, setError] = useState("");
const [location, setlocation] = useState("");
const [salary, setSalary] =useState("");
// const [rows, setRows] = useState(
 

       
     
    
    

  const [rows, setRows] = useState([]);

  let l = []  
  useEffect(() => {
    
    const fetchData = async () => {
        try {
    
    
          const { data } = await axios.get(`https://pure-caverns-24063.herokuapp.com/api/Jobs/allJobs`);
        
           
        
          data.allJobs?.forEach((element, i) => {
            l.push({
              id: i+1,
              clientId: element.clientId, clientName:element.clientName, jobName:element.jobName, 
              timings: element.shift, gender: element.gender,shift:element.shift,  vehicle:'two-weeler',
              aadhar: true,salary:element.salary
            })
          })
          setRows( prevSate => {
            return [...prevSate, ...l]})

          setLoader(false)
          console.log(l)
        
        } catch (error) {
          console.log(error.response.data.error);
        }
      };
      fetchData();
    },[history]);

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
      "https://pure-caverns-24063.herokuapp.com/api/Jobs/registerJob",
      { 
            clientId,
      clientName,
    jobName,
    timings,
    gender,
    shift,
    salary,
    JobID,
    status: "active",
    location
      },
      config
    );

    setRows( prevSate => {
      return [...prevSate, 
      {id: rows.length+1,    
       clientId,
      clientName,
      jobName,
      timings,
      gender,
      shift,
      salary}
      ]});

    handleClose();
     setAdding(false);
    toast.success("Job Saved Sucessfully!")
  } catch (error) {
   
      setTimeout(() => {
        setError("");
      }, 5000);
    

  }
}
  



const handleEditRowsModelChange = React.useCallback((model) => {

  const row =  Object.keys(model)-'0';
  const cell = {...model[`${row}`]}
  const fieldArray = Object.keys(cell);
  const field = Object.keys(cell)[0];
  const value = {...cell[`${field}`]};

  console.log(row);

console.log(fieldArray[0],value["value"]);


}, []);



const handleOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};


return(
    
    <div>
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
        <div className={classes.allJobs}>
         <ToastContainer />       
        <Button
        variant="contained"
        color="secondary"
        type="button" 
        onClick={handleOpen}
        className={classes.button}
        startIcon={<AddIcon />}
      >
        Add new job
      </Button>
      <div style={{ height: 450, width: '100%' }}>
                <DataGrid
                  rows={rows}
                  columns={columns}
                  pageSize={5}
                  onEditRowsModelChange={handleEditRowsModelChange}
                  disableSelectionOnClick      
                  components={{
                    Toolbar: CustomToolbar,
                  }}
                />
              </div>
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
      {
        adding?<LinearProgress color="secondary" />:null
      }      
      
              <p>Add <strong>New Job</strong></p>
          <form className={classes.form} Validate onSubmit={handleSubmit} autoComplete="off">
  <TextField  size="small" id="clientId" value={clientId} onChange={(e)=>setClientId(e.target.value)} label="Client Id" variant="outlined" />
  <TextField size="small" id="clientName" value={clientName} onChange={(e) => setClientName(e.target.value)} label="Client Name" variant="outlined" />
  <TextField  size="small" id="timings" value={timings} onChange={(e) => setTimings(e.target.value)} label="Timings" variant="outlined" />
  <TextField  size="small"
   id="jobName" value={jobName} onChange={(e) =>setJobName(e.target.value)} label="Job Name" variant="outlined" />
  <TextField  size="small" id="gender" value={gender} onChange={(e) => setGender(e.target.value)} label="Gender" variant="outlined" />
  <TextField  size="small" id="shift" value={shift} onChange={(e)=>setShift(e.target.value)} label="Shift" variant="outlined" />
  <TextField  size="small" id="jobID" value={JobID} onChange={(e)=>setJobID(e.target.value)} label="JOBID" variant="outlined" />
  <TextField  size="small" id="location" value={location} onChange={(e)=>setlocation(e.target.value)} label="location" variant="outlined" />
  <TextField  size="small" id="salary" value={salary} onChange={(e)=>setSalary(e.target.value)} label="Salary" variant="outlined" />
  <Button
        variant="contained"
        type="submit" 
        className={classes.addButton}
        startIcon={<AddIcon />}
        
      >
        Add new job
      </Button>
</form>

          </div>
        </Fade>
      </Modal>

              </div>
            )
        }
    </div>
);

            
}
 
export default AllJobs;