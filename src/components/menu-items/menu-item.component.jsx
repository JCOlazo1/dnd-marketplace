import React from 'react'

import './menu-item.styles.scss'

const MenuItem = ({ title, size, imageUrl}) => {
  return (
    <div className={`${size} menu-item`}>
      <div 
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP HERE</span>
      </div>
    </div>
  )}

export default MenuItem

/* TODO:
  - 'size' comes from setSections of 'directory' -- if larg, size is fitted to be bigger

*/
