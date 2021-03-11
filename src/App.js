import Homepage from './pages/homepage/homepage.component'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import './App.styles.scss'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <h1 className='header'>WELCOME TO THE MARKETPLACE</h1>
          <Route 
            exact
            path='/'
            component={Homepage}
          />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
