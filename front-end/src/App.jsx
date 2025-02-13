import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WebLayout from './layout/WebLayout';
import Add from './pages/Add';
import Update from './pages/Update';
import Delete from './pages/Delete';
import Get from './pages/Get';

export const App = () => {
  return (
    <div className='h-screen w-screen overflow-x-hidden overflow-y-auto'>
      <BrowserRouter>
        <Routes>
          <Route element={<WebLayout />}>
            <Route path='/' element={<Add />} />
            <Route path='/update' element={<Update />} />
            <Route path='/get' element={<Get />} />
            <Route path='/delete' element={<Delete />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
