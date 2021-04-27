import NavBar from './NavBar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//import Create from './Create';
import ProjectDetails from './ProjectDetails';

  
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/project/:id">
              <ProjectDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
//<Route path="/create">
  //            <Create />
    //        </Route>