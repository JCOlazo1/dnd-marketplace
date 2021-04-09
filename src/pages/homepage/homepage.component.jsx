import React, { useState } from 'react'
import Directory from '../../components/directory/directory.components'
import Register from '../../components/register/register'

import './homepage.styles.scss'

const Homepage = () => {
  return (
    <>
      <Register />
      <Directory />
    </>
  )
}

export default Homepage;
