import React, { useState, useContext } from 'react'
import { GoldContext } from '../../App'

import ItemDropdown from '../../components/item-dropdown/item-dropdown'
import GENERAL_STORE_DATA from '../../store-items-data/general-store-data.json'

import Cart from '../../components/cart/cart'


import './general-store.styles.scss'

const GeneralStore = () => {
  // useContext variables
  const { gold, setGold } = useContext(GoldContext);

  // useState variables
  const [value, setValue] = useState([]);

  const isEmpty = (obj) => {
    return Object.keys(obj).length === 0;
  }

  return (
    <div className='overview'>
      <h1>General Store</h1>
      <h3>Gold: {gold}G</h3>
      <div className='options'>
        <div className='cart-list'>
        </div>
          <div className='dropdown'>
            <ItemDropdown 
              items={GENERAL_STORE_DATA} 
              label='name'
              value={value}
              onChange={val => setValue(val)}
            />
          </div>
          <div className='cart'>
            <Cart 
              items={value}
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
      </div>
    </div>
  )
}

export default GeneralStore
