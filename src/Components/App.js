
import { AuthProvider } from "../Contexts/AuthContext";
import Container from '@material-ui/core/Container'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute"

import Signup from "./Signup";
import Dashboard from "./Dashboard";
import Login from "./Login";
import UpdateProfile from "./UpdateProfile";
import ForgotPassword from "./ForgotPassword";
import Navbar from "./Navbar";

function App() {
  return (
    
    <Container>
      
        <Router>
        <AuthProvider>
        <Navbar />
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
            </AuthProvider>
        </Router>
        
      
    </Container>
    
  );
}

export default App;
