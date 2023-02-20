// Importation des éléments
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from "../Header"
import About from "../../pages/About";
import Home from "../../pages/Home";
import Error from "../../pages/Error"
import Logement from "../../pages/Logement"
import Footer from "../Footer"


// Création des routes
function Roads (){
    return(
        <div>
           <Router>
            <Header />
           <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/Logement/:idLogement">
                  <Logement/>
                </Route>
                <Route path="/About">
                    <About />
                </Route>
                <Route>
                    <Error />
                </Route>
            </Switch>
          <Footer />
        </Router>
        </div>
    );
}

export default Roads; 
