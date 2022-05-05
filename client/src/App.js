import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {UsersHome, CreateProfile} from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UsersHome/>}/>
        <Route path="/createProfile" element={<CreateProfile/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
