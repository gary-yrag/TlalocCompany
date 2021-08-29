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
import imgg6 from './imggs/img24082021.png';
import imgg7 from './imggs/img25082021.png';
import imgg8 from './imggs/img26082021.png';
import imgg9 from './imggs/img27082021.png';
import imgg10 from './imggs/img28082021.png';

//import {BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

function App() {
  return (
    <Provider store={store}>
      <div>
      <div className="ta10">        
        <div className="ta10center">
          <div className="ta2">          
          Luisa, La extraño, me gustas y me encantas asi como cuando todo mi amor por ti se convirtió en una locura.
          <br/>
          A pesar del tiempo y la distancia Mi amor por Usted siempre es sincero, te amo muchisimo asi como cuando Usted me hacia dibujos.
          </div>
          <div className="ta10imagen">
            <img src={imgg10} className="ta10imagen" alt="MI SADA" height="200px" width="200px"></img>
          </div>
          <div className="ta2">
          Mi niña preciosa. Espero se encuentre muy bien y que su dia haya sido muy bonito asi como Usted, 
      te amo, gracias por leer estos mensajes espero le gusten por que los hago con mucho cariño.
        
          <br/>
          Tu Eres como mi agua y fuego de mi vida para respirar y vivir, estas en cada parte de mi corazon y cerebro, 
          por que a cada momento me pregunto que hará Luisa, donde estará, como estará, Asi como mi vida la extraña, mis abrazos la extrañan, mis labios la extrañan, el Gary te extraña y vive triste por que Usted no esta.
         TE AMO SARA DE MI VIDA.<br/>          
          <span>28/08/2021</span>
          </div>         
        </div>       
      </div>

      <div className="ta9 nomostrar">
        
        <div className="center">
          <div className="ta2">          
       Un dia menos sin Usted a mi lado, solo para decirle que la amo, te amo te amo mas que siempre, 
       te extraño muchoooote, espero le este yendo muy bien en su vida y sus cosas, recuerde que siempre estare para Ti.
      Besiiiiiiiiiiiiiiitos, besssssiiiiitos. Te amo amor.
          </div>
          <div className="imgg2">
            <img src={imgg9} className="imgg2" alt="MI SADA"></img>
          </div>
          <div className="ta2">
        Y como no extrañarla si esta en todo mi ser.
          <br/>
         Cuidate mi muñeca preciosa, hermosa de mi vida.<br/>          
          <span>27/08/2021</span>
          </div>         
        </div>       
      </div>



      <div className="nomostrar">
        
        <div className="center">
          <div className="ta">          
        MI SARA, TE AMO MI AMOR, en todo lo que he hecho siempre a estado Usted en mi imaginacion y mi vida, La he esperado firmemente, todo este tiempo 
        para ver si podiamos ser algo mas que amor. Mi amor por Usted no va a cambiar si no con la muerte.
          </div>
          <div className="imgg2">
            <img src={imgg8} className="imgg2" alt="AMOR"></img>
          </div>
          <div className="ta">
          Siempre la voy a amar como Usted es, por que sé cuando estamos juntos podemos compartir muchas cosas. 
          Lo que Necesito en mi vida eres Tu. Solamente Tu, por que eres el licor de mi amor y pasion, por la vida. Te amo hasta en la lejania.
          <br/>
          Aunque los recuerdos me abruman la vida, al saber que no esta Usted a mi lado. 
          Te amo, te amo. Te amo y la extraño, Muchisimo.<br/>          
          <span>26/08/2021</span>
          </div>         
        </div>       
      </div>



      <div className="nomostrar">
        
        <div className="center">
          <div className="ta">          
        Quien te ama, no te olvida, yo te agradezco por los momentos que pasamos juntos, 
        y por los pensamientos que tal ves tenia Usted con yo,  
        para mi no es facil todo esto de estar asi. 
        Yo todavia me acuerdo de sus sonrisas.
        Te ammooooooooooo Luisa
          </div>
          <div className="imgg2">
            <img src={imgg7} className="imgg2" alt="SARA"></img>
          </div>
          <div className="ta">
          Sabes solo el tiempo te dira quien yo soy, y todo lo que he llorado por tí. Te quiero mucho, te amo muchisimo.
          <br/>Para Sara
          <br/>
          <span>25/08/2021</span>
          </div>         
        </div>       
      </div>


      <div className="ta6 nomostrar">
        
        <div className="center">
          <div className="ta">          
          Te amooooooooooo Luisa Fernanda, Mujer hermosa, preciosa de mi vida; todo lo que me imagino con Usted solamente es la vida 
          </div>
          <div className="imgg2">
            <img src={imgg6} className="imgg2" alt="SARA"></img>
          </div>
          <div className="ta">
          Siempre La he esperado, con mi sinseridad y con todo el amor que siento, Te amo Sara siempre
          <br/>
          <span>24/08/2021</span>
          </div>         
        </div>       
      </div>

      <div className="nomostrar">
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
