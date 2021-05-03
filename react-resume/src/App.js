import NavBar from './NavBar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HiddenAdd from './HiddenAdd';
import ProjectDetails from './ProjectDetails';
import NotFound from './NotFound';
import Projects from './Projects';

  
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
            <Route path="/reactResume">
              <Home />
            </Route>
            <Route exact path="/reactResume/">
              <Home />
            </Route>
            <Route path="/HiddenAdd">
              <HiddenAdd />
            </Route>
            <Route path="/Projects">
              <Projects />
            </Route>
            <Route path="/blogs/:id">
              <ProjectDetails />
            </Route>
            <Route path="*"> 
              <NotFound />
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