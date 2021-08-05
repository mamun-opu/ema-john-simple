import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import Review from './Components/Review/Review';
import Error from './Components/Error/Error';
import Productdetails from './Components/Productdetails/Productdetails';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Shipment from './Components/Shipment/Shipment';
import Login from './Components/Login/Login';
import { createContext } from 'react';
import { useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';


export const userContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <userContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      
      <Router>
      <Header></Header>
        <Switch>
          <Route exact path = '/'>
            <Shop></Shop>
          </Route>
          <Route path = '/shop'>
            <Shop></Shop>
          </Route>
          <Route path = '/review'>
            <Review></Review>
          </Route>
          <Route path = '/inventory'>
          <Review></Review>
          </Route>
          <Route path = '/product/:productKey'>
            <Productdetails></Productdetails>
          </Route>
          <PrivateRoute path = '/shipment'>
            <Shipment></Shipment>
          </PrivateRoute>
          <Route path = '/login'>
            <Login></Login>
          </Route>
          <Route path = '/*'>
            <Error></Error>
          </Route>

        </Switch>
      </Router>

    </userContext.Provider>
  );
}

export default App;