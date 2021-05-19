import React, { useState, useEffect } from 'react'

import ItemDropdown from '../../components/item-dropdown/item-dropdown'
import ARMOURY_ARMOUR_DATA from '../../store-items-data/armoury-data.json'
import Cart from '../../components/cart/cart'

import './armoury-sections.styles.scss'

const ArmouryArmour = () => {
  const [value, setValue] = useState([]);
  const [mapArmour, setMapArmour] = useState([]);

  useEffect(() => {
    setMapArmour(ARMOURY_ARMOUR_DATA.armoury.armour)
  }, [])

  const isEmpty = (obj) => {
    return Object.keys(obj).length === 0;
  }

  return (
    <div className='overview'>
      <h1 className='header'>Armour</h1>
      <div className="options">
          <div className="dropdown-description-price">
            <ItemDropdown 
              items={mapArmour}
              label='name'
              value={value}
              onChange={val => setValue(val)}
            />
            <h2 className='description-header'>
              Description:
              <p className='description-text'>
                {!isEmpty(value) && value.description}
              </p>
            </h2>
            <h2 className='price-header'>
              Price:
              <p className='price-text'>
                {value.price}{!isEmpty(value) && "G"}
              </p>
            </h2>
          </div>
          <div className="cart">
            <Cart items={value} />
          </div>
      </div>
    </div>
  )
}

export default ArmouryArmour
