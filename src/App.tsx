// import React from 'react';
import './App.scss';
import {  Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomePage from './home/HomePage';
import Watch from './components/Watch/Watch';

function App() {
  return (
    <>
        <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage/>}></Route>
          <Route path='/watch/:id' element={<Watch/>}></Route>
        </Route>
        </Routes>
    </>
  );
}

export default App;
