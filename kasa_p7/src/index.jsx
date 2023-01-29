// Création du routeur de navigation = route racine
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from "./pages/About";
import Home from "./pages/Home";
import Header from "./components/Header"
import Error from "./pages/Error"
import Footer from "./components/Footer"
import  './styles/GlobalStyle.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <React.StrictMode>
          <Router>
            <Header />
           <Switch>
                <Route exact path="/">
                    <Home />
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
      </React.StrictMode>
    )