import React, { useState, useContext } from 'react'
import { GoldContext } from '../../App'

import ArmouryDirectory from '../../components/directory/armoury-directory/armoury-directory'

import './armoury.styles.scss'

const ArmouryFront = () => {
  const { gold, setGold } = useContext(GoldContext);
  return (
      <div className='overview'>
        <h3>Gold: {gold}G</h3>
        <ArmouryDirectory />
      </div>    
  )
}

export default ArmouryFront;
