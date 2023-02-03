import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { ItsTricky } from './ItsTricky';
import 'semantic-ui-css/semantic.min.css'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ItsTricky />
  </BrowserRouter>
  
);


