
import '../css/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Welcome from './Welcome';
import Signup from './security/Signup';
import Login from './security/Login';
import Home from './home/Home';
import ResetPassword from './security/resetPassword'
import PrivacyPolicy from './engagement/privacyPolicy';
import TermsOfService from './engagement/termsOfService'
import ErrorPage from './other/ErrorPage';

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/signup">
            <Signup />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/resetpassword">
            <ResetPassword />
          </Route>

          <Route path="/privacypolicy">
            <PrivacyPolicy />
          </Route>

          <Route path="/termsofservice">
            <TermsOfService />
          </Route>


          <Route exact={true} path="/">
            <Welcome />
          </Route>

          <Route>
            <ErrorPage />
          </Route>

        </Switch>
    </Router>
  );
}

export default App;
