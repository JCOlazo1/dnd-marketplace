import React, { useState, useEffect } from 'react'

import ItemDropdown from '../../components/item-dropdown/item-dropdown'
import SUPPORT_SPELLS_DATA from '../../store-items-data/spellstore-data.json'
import Cart from '../../components/cart/cart'

import './spellstore.styles.scss'

const SupportSpells = () => {
  const [mapSupportSpells, setMapSupportSpells] = useState([]);
  const [value, setValue] = useState([]);

  const isEmpty = (obj) => {
    return Object.keys(obj).length === 0;
  }

  useEffect(() => {
    setMapSupportSpells(SUPPORT_SPELLS_DATA.spellstore.support_spells)
  }, [])

  return (
    <div className='overview'>
      <h1 className="header">SUPPORT SPELLS</h1>
      <div className="options">

        <div className="dropdown-description-price">
          <ItemDropdown 
            items={mapSupportSpells}
            label='name'
            value={value}
            onChange={val => setValue(val)}
          />
          <h2 className='description'>DESCRIPTION:</h2>
            <p className='description-text'>
              { !isEmpty(value) && value.description }
            </p>
          <h2 className='price'>Price:</h2>
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

export default SupportSpells
