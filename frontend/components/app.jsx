import React from 'react';
import {Route, Switch} from 'react-router-dom';


const App = ({children}) => (
  <div>
    <h1>App</h1>
    <Switch>
      <Route exact path="/" component={LoginContainer} />
      <Route path='/feed' component={} />

    </Switch>
  </div>
)

export default App;