import React, { useState, useEffect, useRef } from 'react'

const ItemDropdown = ({ 
  items, // options = items in my case
  label,
  prompt, 
  value, 
  onChange 
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // useEffect for auto-closing dropdown when clicking outside dropdown
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
        <div className="selected-value" >
          <input  
            ref={ref}
            placeholder={value ? value[label] : prompt}
            onClick={() => setOpen(prev => !prev)}
          />
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

// TODO:
/*
    - Toggle or select between different categories of category
    - ie: Armoury: [weapons][armour] --> find out how to select each one
    - maybe 'store sections' --> at the armoury store front, choosing 'weapons' takes you to 'weapons' page

*/

