import './App.css';
import React from 'react'
import Header from './components/Header/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../src/pages/Home'
import Footer from './components/Footer/Footer'
import SignIn from './pages/SignIn'
import Product from './pages/Product'
import ShopCategory from './pages/ShopCategory';
import kid_banner from './components/Assets/banner_kids.png'
import men_banner from './components/Assets/banner_mens.png'
import women_banner from './components/Assets/banner_women.png'
import Cart from './pages/Cart';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header />
  
    <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/kids'element={<ShopCategory banner ={kid_banner} category="kid"/>}/>
      <Route path='/men'element={<ShopCategory banner ={men_banner} category="men"/>}/>
      <Route path='/women'element={<ShopCategory banner ={women_banner} category="women"/>}/>
      <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
      <Route path='/cart'element={<Cart/>}/> 
      <Route path='/signIn'element={<SignIn/>}/> 
    </Routes> 

    <Footer/>
   
    </BrowserRouter>
    </>
    )
}

export default App