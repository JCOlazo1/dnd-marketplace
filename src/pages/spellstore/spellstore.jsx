import React, { useState, useContext } from 'react'
import { GoldContext } from '../../App'

 import SpellstoreDirectory from '../../components/directory/spellstore-directory/spellstore-directory'

import './spellstore.styles.scss'

const SpellStoreFront = () => {
  const { gold, setGold } = useContext(GoldContext);
  return (
    <div className='overview'>
      <h3>Gold: {gold}G</h3>
      <SpellstoreDirectory />
    </div>
  )
}

export default SpellStoreFront
