import React from "react"
import Nav from "./Nav";
import Home from "./Home";
import Search from "./Search";
import {HashRouter as Router, Switch, Route} from "react-router-dom"

function App() {


  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route path="/home" exact component={Home}/>
          <Route path="/search" exact component={Search}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
