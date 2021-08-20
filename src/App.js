import './App.css';

import {Provider} from 'react-redux'
import store from "./store";

import Company from "./Component/Company"
import CompanyList from "./Component/CompanyList"

import imgg from './G.png';

//import {BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

function App() {
  return (
    <Provider store={store}>
      <div>
      <div >
      <div className="ta">TE AMO MUCHO MUCHO MUCHO MUCHO. PERDONEME POR NO HABLAR, NOO ME DEJE EN EL MUNDO</div>
        <div className="imgg2">
          <img src={imgg} className="imgg2"></img>
        </div>
        <div className="ta">TE AMO</div>
      </div>
      <div className="App">
        <Router>

          <div>
          <ul>
              <li>
                <Link to="homes">Sara </Link>
              </li>
              <li>
                <Link to="lists">Gary </Link>
              </li>
            </ul>



          </div>

          <Switch>
            <Route exact path="/home" component={Company}></Route>  
            <Route exact path="/list" component={CompanyList}></Route>
          </Switch>          
        </Router>
      </div>
      </div>

     

    </Provider>
  );
}

export default App;
