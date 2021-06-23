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


function App() {
  return (
    <div className="App">
      
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
          <Route path = '/product/:productKey'>
            <Productdetails></Productdetails>
          </Route>
          <Route path = '/*'>
            <Error></Error>
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;