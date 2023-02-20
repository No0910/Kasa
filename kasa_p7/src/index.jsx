// Importation des éléments
import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './components/AppRouter';
import {BrowserRouter} from 'react-router-dom'
import  './styles/GlobalStyle.css'

// Options pour lier la page à la racine
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
    <AppRouter />
 </BrowserRouter>
);
