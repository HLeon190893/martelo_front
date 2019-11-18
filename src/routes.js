import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/SignUp'))

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home}/>
        {/* <Route exact path="/foo/:id" component={Home}/> */}
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={Signup}/>
      </Switch>
    </Suspense>
  </Router>
);


export default App;