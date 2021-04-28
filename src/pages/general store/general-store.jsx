import React, { useState } from 'react'

import ItemDropdown from '../../components/item-dropdown/item-dropdown'
import GENERAL_STORE_DATA from '../../store-items-data/general-store-data.json'

import Cart from '../../components/cart/cart'


import './general-store.styles.scss'

const GeneralStore = () => {
  // useState variables
  const [value, setValue] = useState([]);


  const isEmpty = (obj) => {
    return Object.keys(obj).length === 0;
  }

  return (
    <div className='overview'>
      <h1>General Store</h1>
      <div className='options'>
          <div className='dropdown-description-price'>
            <ItemDropdown 
              items={GENERAL_STORE_DATA} 
              label='name'
              value={value}
              onChange={val => setValue(val)}
            />
            <h2 className='description-header'>
              Description:
              <p className='description-text'>
                {!isEmpty(value) && value.description}
              </p>
              <h2 className='title-header'>
                Price:
                <p className='price-text'>
                  {value.price}{!isEmpty(value) && "G"}
                </p>
              </h2>
            </h2> 
          </div>

          <div className='cart'>
            <Cart 
              items={value}
            />
          </div>

            
      </div>
    </div>
  )
}

export default GeneralStore
