import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import 'react-calendar/dist/Calendar.css';
import 'react-toastify/dist/ReactToastify.min.css';
import App from './app/layout/App';
import './app/layout/style.css';
import { store, StoreContext } from './app/stores/store';
import {createBrowserHistory} from 'history'; 

export const history = createBrowserHistory();

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <Router history={history}>
      <App />
    </Router>
   </StoreContext.Provider>,
  document.getElementById('root')
);
