import Homepage from './pages/homepage/homepage.component'
import GeneralStore from './pages/general store/general-store'
import ArmouryFront from './pages/armoury/armoury-front'
import Apothecary from './pages/apothecary/apothecary'
import SpellStore from './pages/spellstore/spellstore'
import { Route, BrowserRouter } from 'react-router-dom'


import './App.styles.scss'

function App() {
  return (
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
    
  );
}

export default App;
