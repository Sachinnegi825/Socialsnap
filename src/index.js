import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { Provider } from 'react-redux';
import store from './utils/store';
import { RouterProvider } from 'react-router-dom';
import appRouter from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
     <RouterProvider router={appRouter}/>
    </Provider>
   
  </React.StrictMode>
);

