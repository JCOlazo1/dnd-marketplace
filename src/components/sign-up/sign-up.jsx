import React from 'react'

import { GoogleLogin } from 'react-google-login'

import './sign-up.styles.scss'

const responseGoogle = (res) => {
  console.log(res);
}

const SignUp = () => {
  return (
    <div className='sign-up'>
      <GoogleLogin 
        clientId="693692470410-v37763tsp4fgauj3ouk9iiik7urmh5jc.apps.googleusercontent.com"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
    </div>
  )
}

export default SignUp

// requires:
// - custom button component
// - how to sign-in with google component(?)
