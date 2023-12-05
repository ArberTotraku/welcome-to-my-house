import React from 'react'
import { SignUp } from './SignUp'

const Login = () => {



  return (
    <div>
        
<h3>Do you have an account?</h3>

<input type="text" placeholder='Username' />
<input type="password" placeholder='Password'/>

<button onClick={SignUp}>Create an account here</button>

    </div>
  )
}

export default Login