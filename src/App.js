import React from 'react'
import {Routes, Route, Link} from "react-router-dom";
import {IconStyle} from './assets/iconfont/iconfont';
import {GlobalStyle} from './styles'
import Home from '../application/Home';
import Recommend from '../application/Recommend';
import Singers from '../application/Singers';
import Rank from '../application/Rank';

function App() {
  return (
    <div className='App'>
      <GlobalStyle></GlobalStyle>
      <IconStyle></IconStyle>
      <h1>welcome to react router!</h1>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<Rank />} />
        <Route path='about' element={<Recommend />} />
        <Route path='about' element={<Singers />} />
      </Routes>
    </div>
  )
}

export default App;