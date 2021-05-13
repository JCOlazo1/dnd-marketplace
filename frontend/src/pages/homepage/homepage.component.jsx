import React, { useContext } from 'react'
import { UsernameContext } from '../../App'
import Directory from '../../components/directory/directory.components'
import Register from '../../components/register/register'

import './homepage.styles.scss'

const Homepage = () => {
  const { username } = useContext(UsernameContext); 

  return (
    <>
      <Register />
      { username === "" ? null : <Directory /> }
      {console.log(username)}
    </>
  )
}

export default Homepage;
