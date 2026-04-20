import React from 'react'
import './Login.css'

function LoginPage() {
  return (
    <div className='container'>
      <h1>Hi there!</h1>
      <p>Sign in to continue</p>
      <button onClick={() => {
        window.location.href = "http://localhost:3000/auth/github";
      }}>
        Login with github
      </button>
    </div>
  )
}

export default LoginPage
