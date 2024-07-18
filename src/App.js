
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navigation/Navbar';
import Home from './Components/Pages/Home';
import Create_hv from './Components/Pages/Create_hv';
import Login from './Components/Pages/Login';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/Create_hv' component={Create_hv}/>
          <Route path='/Login' component={Login}/>
        </Switch>
      </Router>
      
    </div>
  );
};

export default App;
