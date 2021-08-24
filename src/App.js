import './App.css';

import {Provider} from 'react-redux'
import store from "./store";

import Company from "./Component/Company"
import CompanyList from "./Component/CompanyList"


import imgg from './G.png';
import imgg2 from './imggs/img20082021.png';
import imgg3 from './imggs/img21082021.png'; 
import imgg4 from './imggs/img22082021.png';
import imgg5 from './imggs/img23082021.png';


//import {BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

function App() {
  return (
    <Provider store={store}>
      <div>

      <div className="ta5">
        <div className="ta">          
         TE AMO, ME AMAS ME AMAS ME AMAS ME AMAS ????????????????????????????, 
        </div>
        <div className="imgg2">
          <img src={imgg5} className="imgg2" alt="SARA"></img>
        </div>
        <div className="ta">TE VEO LEJOOOOOOOOOOOOOOOOOOOOOOOOOOOOS, YA NO TE VEO, CUANDO ME MUERA ESTARAS AHY SIEMPRE</div>
        <h1>23/08/2021</h1>
      </div>


      <div className="nomostrar">
        <div className="ta3">          
         NO ME HE OLVIDO DE TI, LAS COSITAS QUE HAGO TAL VEZ SON POCO, PERO SI ES DE TU AGRADO SOLO DISFRUTA LA IMAGEN Y SONRIELE POR QUE TODO LO QUE HE VIVIDO CON USD PARA MI LO HA SIDO TODO, Y CUANDO ESTE BIEN VIEJITA Y YO YA NO ESTE TE VAS A REIR, DE LAS TONTERIAS QUE HACIA POR TI 
        </div>
        <div className="imgg2">
          <img src={imgg4} className="imgg2" alt="SADA"></img>
        </div>
        <div className="ta3">TE AMO, MUCHOOOOOOOOOOOOOOOOOOOOOOOTE, ASI COMO CUANDO TE ENAMORAS POR PRIEMRA VEZ</div>
        <h1>22/08/2021</h1>
      </div>

      <div className="nomostrar">
        <div className="ta3">          
         ANDABA HACIENDO CORAZONES, BONITAAAAAAAAAAAAAAAAAAAAAA
        </div>
        <div className="imgg2">
          <img src={imgg3} className="imgg2" alt="SADA"></img>
        </div>
        <div className="ta3">TE AMOOOOOOOOOOOOO BRAVA</div>
        <h1>21/08/2021</h1>
      </div>

      

      <div className="nomostrar">
        <div className="ta2">          
          BESITOOOOOOOOOOS, BESOOOOOOOOOOOOOOOTES BISCOCHO HERMOSA
        </div>
        <div className="imgg2">
          <img src={imgg2} className="imgg2" alt="SADA"></img>
        </div>
        <div className="ta2">TE EXTAÑO COMO NUNCA</div>
        <h1>20/08/2021</h1>
      </div>

      <div className="nomostrar">
        <div className="ta">
          <h1>19/08/2021</h1>
          TE AMO MUCHO MUCHO MUCHO MUCHO. PERDONEME POR NO HABLAR, NOO ME DEJE EN EL MUNDO
        </div>
        <div className="imgg2">
          <img src={imgg} className="imgg2" alt="AMOR"></img>
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
