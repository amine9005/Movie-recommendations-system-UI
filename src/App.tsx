// import React from 'react';
import './App.scss';
import {  Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './components/Home/Home';

function App() {
  return (
    <>
        <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home/>}></Route>
        </Route>
        </Routes>
    </>
  );
}

export default App;
