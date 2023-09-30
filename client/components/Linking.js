import Login from "./Login"
import Register from "./Register"
import { Router,Route,Routes } from 'react-router-native';

const Linking = () => {
  return (
    <Router>
        <Routes>
          <Route path='/'>
            <Login />
          </Route>
          <Route path="/signup">
            <Register/>
          </Route>
        </Routes>
    </Router>
  )
}

export default Linking
