import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes,
  Route, } from "react-router-dom";
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Beranda from './private/Beranda';
import StepOne from './private/StepOne';
import StepTwo from './private/StepTwo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Beranda/>
      <App /> */}
      <Routes>
      <Route path="/" element={<Beranda />} />
      <Route path="stepone" element={<StepOne />} />
      <Route path="steptwo" element={<StepTwo />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
