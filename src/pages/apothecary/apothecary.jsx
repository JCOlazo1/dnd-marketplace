import React, { useState, useContext } from 'react'
import { GoldContext } from '../../App'

import ItemDropdown from '../../components/item-dropdown/item-dropdown'
import APOTHECARY_DATA from '../../store-items-data/apothecary-data.json'

import Cart from '../../components/cart/cart'

import './apothecary.styles.scss'

const Apothecary = () => {
  // useState variables
  const [value, setValue] = useState([]); // Stores the value of selected item from dropdown

  const isEmpty = (obj) => {
    return Object.keys(obj).length === 0;
  }

  return (
    <div className='overview'>
      <h1>Apothecary </h1>
      <div className="options">
          <div className='dropdown-description-price'>
            <ItemDropdown
              items={APOTHECARY_DATA}
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
          <div className='cart'>
            <Cart items={value} />
          </div>
      </div>
    </div>
    
  )
}

export default Apothecary
