import React from 'react'
import {withRouter} from 'react-router-dom'
import './menu-item.styles.scss'

const MenuItem = ({ title, size, imageUrl, linkUrl, match, history}) => {
  return (
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}> {/* THE POWER TO CLICK LINKS!!! */}
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

export default withRouter(MenuItem)

/* TODO:
  - 'size' comes from setSections of 'directory' -- if larg, size is fitted to be bigger

*/
