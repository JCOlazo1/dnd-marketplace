import React, { useState, useEffect } from 'react'

import ItemDropdown from '../../components/item-dropdown/item-dropdown'
import OFFENCE_SPELLS_DATA from '../../store-items-data/spellstore-data.json'

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
        <div className="cart-list">{/* <Cart /> */}</div>
        <div className="dropdown">
          <ItemDropdown 
            items={mapOffenceSpells}
            label='name'
            value={value}
            onChange={val => setValue(val)}
          />
        </div>
        <h2 className='description'>
          Description:
        </h2>
        <p className='description-text'>
          { !isEmpty(value) && value.description }
        </p>
        <h2 className='price'>Price:</h2>
        <p className='price-text'>
          {value.price}{!isEmpty(value) && "G"}
        </p>
      </div>
      {/* <Quantity /> */}
      {/* <TotalTab /> */}
    </div>
  )
}

export default OffenceSpells