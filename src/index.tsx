import 'reflect-metadata'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ServiceContainer } from 'react-service-locator';
import SingleCard from "./components/card";
import GridSystem from "./components/gridSystem";
import "bootstrap/dist/css/bootstrap.min.css";



ReactDOM.render(
  <ServiceContainer>
      {/*<ContentBoxComponent/>*/}
      <App/>
      {/*<GridSystem/>*/}
  </ServiceContainer>

  , document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
