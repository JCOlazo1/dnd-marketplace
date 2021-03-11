import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MenuItem from '../menu-items/menu-item.component'

const Directory = () => {
  const [sections, setSections] = useState([{ title: '', imageUrl: '', id: '', linkUrl: '' }]);
  const url = 'https://www.dnd5eapi.co/api/spells/acid-arrow/';

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
        linkUrl: 'potions'
      },  
      {
        title: 'Spell Store',
        imageUrl: 'https://i.pinimg.com/236x/b5/8b/0f/b58b0f5122ecd8b728005e15be90378a--anime-scenery-fantasy-inspiration.jpg',
        id: 4,
        linkUrl: 'magic'
      }
    ])
  }, [])

  const getData = async () => {
    const res = await axios.get(url);
    console.log(res.data);
  }
  

  return (
    <div className='directory-menu'>
      {
        sections.map(({ id, ...otherStuff }) => (
          <MenuItem 
            key={id}
            {...otherStuff}
          />
        ))
      }
      {console.log(sections)}
      {console.log("end of sections")}
      <button onClick={getData}>Fetch</button>
    </div>
  )
}

export default Directory

// https://www.dnd5eapi.co/api/spells/acid-arrow/
