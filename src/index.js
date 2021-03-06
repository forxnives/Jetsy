import React from 'react';
import ReactDOM from 'react-dom';
import './sass/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'


import {store, persistor} from './redux/store';



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <BrowserRouter>
        {/* <ScrollToTop> */}

          <PersistGate persistor={persistor}  >
              <App />
          </PersistGate>


        {/* </ScrollToTop> */}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
