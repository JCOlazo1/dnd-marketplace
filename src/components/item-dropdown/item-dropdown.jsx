import React, { useState, useEffect } from 'react'
import axios from 'axios'

import GENERAL_STORE_DATA from '../../store-items-data/general-store-data.json'
import APOTHECARY_DATA from '../../store-items-data/apothecary-data.json'
import ARMOURY_DATA from '../../store-items-data/armoury-data.json'

const ItemDropdown = () => {

  const getData = () => {
    console.log(GENERAL_STORE_DATA)
  }

  return (
    <div className='dropdown'>
      <button onClick={getData}>Test</button>
    </div>
  )
}

export default ItemDropdown

// This holds specific data based on the store clicked
// General Store: consumables, adventure needs(rope, rations), etc.
// Armoury: armour, weapons, shields, etc.
// Might need REDUX to hold a store and then use a switch based on which
// store was selected so it knows which data to pull from

// Or have ItemDropdown accept a 'category' parameter so it knows which
// data to display