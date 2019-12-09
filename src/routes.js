import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import { SnackbarProvider } from 'notistack';

const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/SignUp'))
const Auction = lazy(() => import('./pages/Auction'))
const UserInfo = lazy(() => import('./pages/UserInfo'))
const RegAuction = lazy(() => import('./pages/RegAuction'))
const Transaction = lazy(() => import('./pages/Transactions'))


const App = () => (
  <SnackbarProvider maxSnack={3}>
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path='/auction/:id' component={Auction} />
          <Route path='/userinfo' component={UserInfo} />
          <Route path='/regauction' component={RegAuction} />
          <Route path='/transactions' component={Transaction} />
        </Switch>
      </Suspense>
    </Router>
  </SnackbarProvider>

);


export default App;