import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import './assets/css/custom.scss'
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/js/bootstrap'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>
    <App />
    </BrowserRouter>
);


