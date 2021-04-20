import React, { useState, useEffect } from 'react'

import ItemDropdown from '../../components/item-dropdown/item-dropdown'
import ARMOURY_WEAPON_DATA from '../../store-items-data/armoury-data.json'
import Cart from '../../components/cart/cart'

import './armoury-sections.styles.scss'

const ArmouryWeapons = () => {
  const [value, setValue] = useState([]);
  const [mapWeapons, setMapWeapons] = useState([]);

  useEffect(() => {
    setMapWeapons(ARMOURY_WEAPON_DATA.armoury.weapons);
  }, [])

  const isEmpty = (obj) => {
    return Object.keys(obj).length === 0;
  }

  return (
    <div className='overview'>
      <h1 className='header'>Weapons</h1>
      <div className="options">
        <div className="dropdownCartDiv">
        <div className="dropdown">
          <ItemDropdown 
            items={mapWeapons}
            label='name'
            value={value}
            onChange={val => setValue(val)}
          />
          </div>
          <Cart items={value} />
        </div>
      <h2 className='description'>
        Description:
        <p className='description-text'>
          {!isEmpty(value) && value.description}
        </p>
      </h2>
      <h2 className='price'>
        Price:
        <p className='price-text'>
          {value.price}{!isEmpty(value) && "G"}
        </p>
      </h2>
      </div>
      {/* <Quantity /> */}
      {/* <TotalTab /> */}
      
    </div>
  )
}

export default ArmouryWeapons


