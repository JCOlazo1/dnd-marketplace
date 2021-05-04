import React, { useState, useEffect, useContext } from 'react'
import { UsernameContext } from '../../App'
import MenuItem from '../menu-items/menu-item.component'

import './directory.styles.scss'

const Directory = () => {
  // Accessing useContext properties:
  const { username } = useContext(UsernameContext);

  // useState variables
  const [sections, setSections] = useState([{ title: '', imageUrl: '', id: '', linkUrl: '' }]);

  useEffect(() => {
    setSections([
      {
        title: 'General Store',
        imageUrl: 'https://www.kinfolk.com/wp-content/uploads/2016/10/Kinfolk_Vol14_Peckham_11.jpg',
        id: 1,
        linkUrl: 'generalstore'
      },  
      {
        title: 'Armoury',
        imageUrl: 'https://i.pinimg.com/originals/3e/0f/9b/3e0f9bf18d9bcc424a1256880badd51d.jpg',
        id: 2,
        linkUrl: 'armoury'
      },  
      {
        title: 'Apothecary',
        imageUrl: 'https://static.planetminecraft.com/files/image/minecraft/project/2020/607/13405543_l.jpg',
        id: 3,
        size: 'large',
        linkUrl: 'apothecary'
      },  
      {
        title: 'Spell Store',
        imageUrl: 'https://i.pinimg.com/236x/b5/8b/0f/b58b0f5122ecd8b728005e15be90378a--anime-scenery-fantasy-inspiration.jpg',
        id: 4,
        linkUrl: 'spellstore'
      }
    ])
  }, [])

  return (
    <div className='directory-menu'>
      <>
        <h1>{`WELCOME TO THE MARKETPLACE, ${username}!`}</h1>
        {
          sections.map(({ id, ...otherStuff }) => (
            <MenuItem 
              key={id}
              {...otherStuff}
            />
          ))
        }
      </>
    </div>
  )
}

export default Directory

// https://www.dnd5eapi.co/api/spells/acid-arrow/
