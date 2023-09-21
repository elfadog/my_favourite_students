import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import Dashboard from './Dashboard';
import Support from './Support';

const path = window.location.pathname

ReactDOM.render(
  <React.StrictMode>
    {path.indexOf('/Support') === -1? <Dashboard/> : < Support/>}
  </React.StrictMode>
);


export default function Routes() {
  return (
    <div>
      
    </div>
  )
}
