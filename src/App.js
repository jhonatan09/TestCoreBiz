import React, {useState, useEffect} from 'react';
import Header from './components/Header'
import Main from './components/Products'
import Footer from './components/Footer'
import {DataContextProvider} from './components/store/Context'
import './styling/Style.scss'


function App() {

  




  return (
    <div className="App">
      <DataContextProvider>
        <Header />
        <Main />
        <Footer />
      </DataContextProvider>
    </div>
  )
}

export default App;
