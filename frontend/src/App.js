import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navigationbar from './components/Navigationbar';
import Home from './pages/Home';
import AddCitizen from './pages/AddCitizenPage';
import AddChildren from './pages/AddChildrenPage';
import ShowChildren from './pages/ShowChildrenPage';
import UpdateCitizen from './pages/UpdateCitizenPage';
import DeleteCitizen from './pages/DeleteCitizenPage';

function App() {
  return (
    <BrowserRouter>
      <Navigationbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/add-citizen' element={<AddCitizen />} />
        <Route exact path='/add-children' element={<AddChildren />} />
        <Route exact path='/show-children/:id' element={<ShowChildren />} />
        <Route exact path='/update-citizen/:id' element={<UpdateCitizen />} />
        <Route exact path='/delete-citizen/:id' element={<DeleteCitizen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
