import * as React from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import Home from "./containers/protected/home/Home";


function NoMatch() {
    let location = useLocation();
  
    return (
      <div>
        <h3>
          No match for <code>{location.pathname}</code>
        </h3>
      </div>
    );
  }

export default (): React.ReactElement => (
    <Router >
        <Switch>
            <Route path="/" >
                <Home />
            </Route>
            <Route path="*">
                <NoMatch />
            </Route>
        </Switch>
    </Router>
);