import React from "react";
import { BrowserRouter as Router , Switch, Route} from "react-router-dom";
import Home from "./Pages";
import SigninPage from "./Pages";
import AppStyles from "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/signin" component={SigninPage} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
