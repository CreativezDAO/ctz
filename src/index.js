import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { MoralisProvider } from "react-moralis";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.Fragment>
  <MoralisProvider serverUrl= "https://aucjuyyy6dxq.usemoralis.com:2053/server" appId="6p0DZwOvX1JWzR1NDlIu2gNa3U7fmgd34jowehDk">
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
