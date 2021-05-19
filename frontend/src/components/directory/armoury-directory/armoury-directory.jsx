import React from 'react'
import ArmouryWeapons from '../../../pages/armoury/armoury-weapons'
import ArmouryArmour from '../../../pages/armoury/armoury-armour'

import { useRouteMatch, Route, Link, Switch } from 'react-router-dom'

const ArmouryDirectory = () => {
  const { path, url } = useRouteMatch();

  return (
    <div className='route'>
      <h1 className='greeting'>Weapons and Armours, yours fer a price</h1>
      <ul className='sections'>
        <li>
          <Link to={`${url}/weapons`}>Weapons</Link>
        </li>
        <li>
          <Link to={`${url}/armour`}>Armour</Link>
        </li>
      </ul>
      <hr />

      <Switch>
        <Route path={`${path}/weapons`} component={ArmouryWeapons} />
        <Route path={`${path}/armour`} component={ArmouryArmour}/>
      </Switch>
      
    </div>
  )
}

export default ArmouryDirectory

