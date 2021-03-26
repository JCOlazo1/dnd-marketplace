import React, { useState, useEffect, useRef } from 'react'

const ItemDropdown = ({ 
  items, // options = items in my case
  label,
  prompt, 
  value, 
  onChange 
}) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("")
  const ref = useRef(null);

  useEffect(() => {
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [])


  const close = (e) => {
    setOpen(e && e.target === ref.current)
  }

  const filter = (options) => {
    return options.filter(
      (option) => 
        option[label].toLowerCase().indexOf(query.toLowerCase()) > -1)
  }

  const displayValue = () => {
    if(query.length > 0) return query;
    if(value) return value[label];
    return "";
  }

  return (
    <div className='dropdown'>
      <div className="control" onClick={() => setOpen(prev => !prev)}> {/* TOGGLE EFFECT */}
        <div className="selected-value" >
          <input 
            type='text' 
            ref={ref}
            placeholder={value ? value[label] : prompt}
            value={displayValue}
            onChange={e => {
              setQuery(e.target.value)
              onChange(null)
            }}
            onClick={() => setOpen(prev => !prev)}
          />
        </div>
        <div className={`arrow ${open ? "open" : null}`} /> {/* using ternary operators to change the property of 'className' */}
      </div>
      <div className={`options ${open ? "open" : null}`}>
        {
          filter(items).map((option) => (
          <div 
            key={option.id} 
            className={`option ${value === option ? "selected" : null}`}
            onClick={() => {
              setQuery("");
              onChange(option);
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