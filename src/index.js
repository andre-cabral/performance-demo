import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Lazyload from './Lazyload';
import LazyloadHtml from './LazyloadHtml';
import Optimized from './Optimized';
//import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/lazy" element={<Lazyload />} />
      <Route path="/lazy-html" element={<LazyloadHtml />} />
      <Route path="/optimized" element={<Optimized />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
