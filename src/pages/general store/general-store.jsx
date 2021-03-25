import React from 'react'

import ItemDropdown from '../../components/item-dropdown/item-dropdown'

import './general-store.scss'

const GeneralStore = () => {
  return (
    <div className='overview'>
      <h1>General Store</h1>
      <div className='options'>
        <div className='cart-list'>
          {/* <Cart /> */}
        </div>
          <ItemDropdown />
          {/* <Quantity /> */}
          {/* <TotalTab /> */}
      </div>
  
    </div>
  )
}

export default GeneralStore
