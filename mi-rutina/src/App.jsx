// import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {NavBar} from './components/NavBar';

function App() {

  return (
    <header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBar />} />
        </Routes>
      </BrowserRouter>
    </header>
  )
}

export default App
