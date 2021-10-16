
import './App.css';
import Try from './components/Try'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import VehicleSpeed from './components/VehicleSpeed';
import Attendance from './components/Attendance';
import PeopleCounter from './components/PeopleCounter';
function App() {
  return (
    <div className="App">
       <Router>
        <Route path="/" exact component={Try}/>
        <Route path="/speed" exact component={VehicleSpeed}/>
        <Route path="/attendance" exact component={Attendance}/>
        <Route path="/peoplecounter" exact component={PeopleCounter}/>
      </Router>
    
    </div>
  );
}

export default App;
