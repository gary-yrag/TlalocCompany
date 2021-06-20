import './App.css';

import {Provider} from 'react-redux'
import store from "./store";

import Company from "./Component/Company"
import CompanyList from "./Component/CompanyList"

//import {BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>

          <div>
            <ul>
              <li>
                <Link to="home">Home</Link>
              </li>
              <li>
                <Link to="list">Companys</Link>
              </li>
            </ul>
          </div>

          <Switch>
            <Route exact path="/home" component={Company}></Route>  
            <Route exact path="/list" component={CompanyList}></Route>
          </Switch>          
        </Router>
      </div>

    </Provider>
  );
}

export default App;
