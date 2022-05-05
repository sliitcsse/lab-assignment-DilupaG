import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {UsersHome, CreateProfile, TradersHome, AddItem, EditItem, AddPromotion, ViewPromotions, CustomerList, CustomerHome } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UsersHome/>}/>
        <Route path="/createProfile" element={<CreateProfile/>}/>
        <Route path="/tradersHome" element={<TradersHome/>}/>
        <Route path="/addItem" element={<AddItem/>}/>
        <Route path="/editItem/:id/:name/:count/:price/:category/:promotion" element={<EditItem/>}/>
        <Route path="/promoteItem/:id/:name/:count/:price/:category/:promotion" element={<AddPromotion/>}/>
        <Route path="/viewPromotion" element={<ViewPromotions/>}/>
        <Route path="/customerList" element={<CustomerList/>}/>
        <Route path='/customersHome' element={<CustomerHome/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
