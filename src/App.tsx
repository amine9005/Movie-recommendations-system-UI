// import React from 'react';
import './App.scss';
import {  Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomePage from './home/HomePage';

function App() {
  return (
    <>
        <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage/>}></Route>
        </Route>
        </Routes>
    </>
  );
}

export default App;
