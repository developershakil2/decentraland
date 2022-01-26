import React from 'react';
import {Routes , Route } from 'react-router-dom';
import Homebg from './component/HomeBg';

function App() {
  return (
    <Routes>
      <Route path='*' element={<Homebg/>}/>


    </Routes>
  
  );
}

export default App;
