import React from 'react'
import Router from './routes'
import {IconStyle} from './assets/iconfont/iconfont';
import {GlobalStyle} from './styles'

function App() {

  return (
    <div className='App'>
      <GlobalStyle></GlobalStyle>
      <IconStyle></IconStyle>
      <Router/>
    </div>
  )
}

export default App;
