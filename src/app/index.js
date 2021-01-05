import React, {Component} from 'react';
import { render } from 'react-dom';

import App from './App';
import Login from '../app/Login/login';


render(<Login/>, document.getElementById('app'));



// ReactDOM.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>,
//     document.getElementById('app')
//   );