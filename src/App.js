import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/home';
import Findjobs from './components/findJobs';
import AdminLogin from './components/adminLogin';
import AdminDasboard from './components/adminDasboard';
import Job from './components/job';
import PrivateRoute from './components/routing/PrivateRoute'
import Sawolabs from './components/sawoAuth';
import Private from './components/routing/private'
import MyApplication from './components/myApplicatons';
import DailyEarning from './components/dailyEarning';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/findJobs" component ={Findjobs}></Route>
        <Route exact path="/adminLogin" component={AdminLogin}></Route>
        <PrivateRoute exact path ='/admin/dasboard' component={AdminDasboard}></PrivateRoute>
        <Route exact path="/findJobs/:jobId" component={Job}></Route>
        <Route exact path="/auth" component={Sawolabs}></Route>
        <Private exact path="/myApplications" component={MyApplication}></Private>
        <Private exact path ="/dailyEarning" component={DailyEarning}></Private>
      </Router>
    </div>
  );
}

export default App;
