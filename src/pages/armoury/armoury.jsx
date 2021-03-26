import React, { useState }  from 'react'

import ItemDropdown from '../../components/item-dropdown/item-dropdown'
import ARMOURY_DATA from '../../store-items-data/armoury-data.json'

import './armoury.styles.scss'

const Armoury = () => {
  const [value, setValue] = useState([]);

  const isEmpty = (obj) => {
    return Object.keys(obj).length === 0;
  }

  return (
    <div className='overview'>
      <h1>Armoury</h1>
      <div className="options">
        <div className="cart-list">
          {/* <Cart /> */}
        </div>
        <div className="dropdown">
          <ItemDropdown 
            items={ARMOURY_DATA}
            label='name'
            value={value}
            onChange={val => setValue(val)}
          />
        </div>
        <h2 className='description'>
          Descrption:
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

export default Armoury
