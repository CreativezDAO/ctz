import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { MoralisProvider } from "react-moralis";

const container = document.getElementById("root");
const root = createRoot(container);

const APP_ID = process.env.REACT_APP_MORALIS_APPLICATION_ID;
const SERVER_URL = process.env.REACT_APP_MORALIS_SERVER_URL;

root.render(
  <React.Fragment>
  <MoralisProvider serverUrl= {SERVER_URL} appId= {APP_ID}>
    <Provider store={store}>
      <App />
    </Provider>
  </MoralisProvider>
  </React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
