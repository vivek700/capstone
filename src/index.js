import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ContextProvider } from './ContextProvider';


let container = document.getElementById('root')
let root = createRoot(container)
root.render(
    <ContextProvider>
         <Router>
            <App />
        </Router>
    </ContextProvider>
       
)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

