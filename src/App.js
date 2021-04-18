import Homepage from './pages/homepage/homepage.component'
import GeneralStore from './pages/general store/general-store'
import ArmouryFront from './pages/armoury/armoury-front'
import Apothecary from './pages/apothecary/apothecary'
import SpellStore from './pages/spellstore/spellstore'

import './App.styles.scss'

import React, { useState, createContext } from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

export const GoldContext = createContext();
export const UserContext = createContext();

function App() {
  const [gold, setGold] = useState(0);
  const [user, setUser] = useState([{
    user: '',
    gold: 0, 
    isLogged: false,
    isThief: false
  }])

  return (
    // Lots of Providers:
  <GoldContext.Provider value={{gold, setGold}}>
  <UserContext.Provider value={{user, setUser}}>


    <BrowserRouter>
      <div className='App'>
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



  </UserContext.Provider>
  </GoldContext.Provider>


    
    
  );
}

export default App;

// JC's macbook was here
