import Homepage from './pages/homepage/homepage.component'
import GeneralStore from './pages/general store/general-store'
import ArmouryFront from './pages/armoury/armoury-front'
import Apothecary from './pages/apothecary/apothecary'
import SpellStore from './pages/spellstore/spellstore'

import './App.styles.scss'

import React, { useState, useEffect, createContext } from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import axios from 'axios'

export const GoldContext = createContext();
export const UsernameContext = createContext();
export const ThiefContext = createContext();
export const StealingCountContext = createContext();


function App() {
  const [gold, setGold] = useState(0);
  const [username, setUsername] = useState("");
  const [isThief, setIsThief] = useState(false);
  const [stealingCount, setStealingCount] = useState(0);
  
  // SHOWING BACKEND MESSAGE TO FRONTEND:
  // // API state:
  // const [apiMessage, setApiMessage] = useState({apiResponse: ""})

  // // Call API:
  // const callAPI = () => {
  //   fetch('https://localhost:9000/testAPI')
  //     .then(res => res.text())
  //     .then(res => setApiMessage([{apiResponse: res}]))
  // }

  // // useEffect for API:
  // useEffect(() => {
  //   callAPI();
  // }, [])

  return (
    // Lots of Providers:
  <GoldContext.Provider value={{gold, setGold}}>
  <UsernameContext.Provider value={{username, setUsername}}>
  <ThiefContext.Provider value={{isThief, setIsThief}}>
  <StealingCountContext.Provider value={{stealingCount, setStealingCount}}>

    <BrowserRouter>
      <div className='App'>
        {/* <p>{apiMessage}</p> */}
        {/* Homepage */}
          <Route 
            exact
            path='/'
            component={Homepage}
          />
        {/* General Store */}
          <Route 
            path='/generalstore'
            component={GeneralStore}
          />
        {/* Armoury */}
          <Route 
            path='/armoury'
            component={ArmouryFront}
          />
        {/* Apothecary */}
          <Route 
            path='/apothecary'
            component={Apothecary}
          />
        {/* Spell Store */}
          <Route 
            path='/spellstore'
            component={SpellStore}
          />
      </div>
    </BrowserRouter>

  </StealingCountContext.Provider>
  </ThiefContext.Provider>
  </UsernameContext.Provider>
  </GoldContext.Provider>
  );
}

export default App;

// JC's macbook was here
