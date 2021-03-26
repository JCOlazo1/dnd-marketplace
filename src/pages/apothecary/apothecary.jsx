import React, { useState } from 'react'

import ItemDropdown from '../../components/item-dropdown/item-dropdown'
import APOTHECARY_DATA from '../../store-items-data/apothecary-data.json'

import './apothecary.styles.scss'

const Apothecary = () => {
  const [value, setValue] = useState([]);

  const isEmpty = (obj) => {
    return Object.keys(obj).length === 0;
  }

  return (
    <div className='overview'>
      <h1>Apothecary </h1>
      <div className="options">
        <div className="cart-list">
          {/* <Cart /> */}
        </div>
          <div className='dropdown'>
            <ItemDropdown
              items={APOTHECARY_DATA}
              label='name'
              value={value}
              onChange={val => setValue(val)}
            />
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
          {/* <Quantity /> */}
          {/* <TotalTab /> */}
      </div>
    </div>
    
  )
}

export default Apothecary
