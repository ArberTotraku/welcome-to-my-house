import React from 'react'

export const SignUp = () => {
  return (
    <div>
        
        <h3>Create an account</h3>
      <p>Username:</p><input type="username" placeholder='Write your username' />
      <p>Password:</p><input type="password" placeholder='Write your password' />
      <p>Date of birth:</p><input type="date" placeholder='Your birthday' />
      <button>Create an account</button>

    </div>
  )
}
