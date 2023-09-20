import React from 'react'
import './login.css'
const Login = () => {
  return (
    <div className='container'>
       <h1>Log in!</h1>
       <div className='inner'>
       <form method='post' action='/navbar'>
        <div className='username'>
        <label for="username">Email address</label><br></br>
        <input type="email" id='username' placeholder='abcd@gmail.com' className='user'></input><br></br>
       </div>
       <div className='password'>
        <label for="password">password</label><br></br>
        <input type="password" id='password' className='pass' maxLength='8'></input>
        </div>
        <button className='button'>Log in</button>
       </form>
       </div>
    </div>
  )
}

export default Login
