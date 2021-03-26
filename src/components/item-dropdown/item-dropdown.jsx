import React, { useState, useEffect, useRef } from 'react'

const ItemDropdown = ({ 
  items, 
  label,
  prompt, 
  value, 
  onChange 
}) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState()
  const ref = useRef(null);

  // This 
  useEffect(() => {
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [])


  const close = (e) => {
    setOpen(e && e.target === ref.current)
  }

  return (
    <div className='dropdown'>
      <div className="control" onClick={() => setOpen(prev => !prev)}> {/* TOGGLE EFFECT */}
        <div className="selected-value" ref={ref} >
          {value ? value[label] : prompt}
        </div>
        <div className={`arrow ${open ? "open" : null}`} /> {/* using ternary operators to change the property of 'className' */}
      </div>
      <div className={`options ${open ? "open" : null}`}>
        {
          items.map((option) => (
          <div 
            key={option.id} 
            className={`option ${value === option ? "selected" : null}`}
            onClick={() => {
              onChange(option)
              setOpen(false);
            }}
          >
            {option[label]}
          </div>))
        }
      </div>
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