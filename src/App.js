import React from 'react'
import './App.css';
import { MainComponents } from './MainComponents'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './components/GlobalStyle/GlobalStyle';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <BrowserRouter>
    <GlobalStyle/>
    <MainComponents/>
  
    </BrowserRouter>
  )
}

export default App