import React from 'react'

import SupportSpells from '../../../pages/spellstore/spellstore-support'
import OffenceSpells from '../../../pages/spellstore/spellstore-offence'

import { useRouteMatch, Route, Link, Switch } from 'react-router-dom'

const SpellStoreDirectory = () => {
  const { path, url } = useRouteMatch();

  return (
    <div className='route'>
      <h1 className='greeting'>Spells to help or help hurt!</h1>
      <ul className='sections'>
        <li>
          <Link to={`${url}/offence`}>Offence</Link>
        </li>
        <li>
          <Link to={`${url}/support`}>Support</Link>
        </li>
      </ul>
      <hr />

      <Switch>
        <Route path={`${path}/offence`} component={OffenceSpells} />
        <Route path={`${path}/support`} component={SupportSpells} />
      </Switch>

    </div>
  )
}

export default SpellStoreDirectory
