import React, { useState, useEffect } from 'react'

import ItemDropdown from '../../components/item-dropdown/item-dropdown'
import OFFENCE_SPELLS_DATA from '../../store-items-data/spellstore-data.json'
import Cart from '../../components/cart/cart'

import './spellstore.styles.scss'

const OffenceSpells = () => {
  const [mapOffenceSpells, setMapOffenceSpells] = useState([]);
  const [value, setValue] = useState([])

  const isEmpty = (obj) => {
    return Object.keys(obj).length === 0;
  }

  useEffect(() => {
    setMapOffenceSpells(OFFENCE_SPELLS_DATA.spellstore.offensive_spells)
  }, [])

  return (
    <div className='overview'>
      <h1 className="header">OFFENCE SPELLS</h1>
      <div className="options">
          <div className="dropdown-description-price">
            <ItemDropdown 
              items={mapOffenceSpells}
              label='name'
              value={value}
              onChange={val => setValue(val)}
            />
            <h2 className='description-header'>
              Description:
            </h2>
            <p className='description-text'>
              { !isEmpty(value) && value.description }
            </p>
            <h2 className='price-header'>Price:</h2>
            <p className='price-text'>
              {value.price}{!isEmpty(value) && "G"}
            </p>
          </div>
          <div className="cart">
            <Cart items={value} />
          </div>
      </div>
    </div>
  )
}

export default OffenceSpells
