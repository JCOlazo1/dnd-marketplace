import React, { useState } from 'react'

import ItemDropdown from '../../components/item-dropdown/item-dropdown'
import GENERAL_STORE_DATA from '../../store-items-data/general-store-data.json'

import './general-store.scss'

const GeneralStore = () => {
  const [value, setValue] = useState(null)

  return (
    <div className='overview'>
      <h1>General Store</h1>
      <div className='options'>
        <div className='cart-list'>
          {/* <Cart /> */}
        </div>
          <div style={{ width: 200}}>
            <ItemDropdown 
              items={GENERAL_STORE_DATA} 
              prompt='Whatcha Buyin?'
              label='name'
              value={value}
              onChange={val => setValue(val)}
            />
          </div>
          {/* <Quantity /> */}
          {/* <TotalTab /> */}
      </div>
  
    </div>
  )
}

export default GeneralStore
