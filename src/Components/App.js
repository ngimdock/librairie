import '../css/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Welcome from './Welcome';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import ErrorPage from './ErrorPage';

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
