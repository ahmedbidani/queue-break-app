import * as React from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import SignIn from "./containers/guest/sign-in/SignIn";


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
                <SignIn />
            </Route>
            <Route path="*">
                <NoMatch />
            </Route>
        </Switch>
    </Router>
);