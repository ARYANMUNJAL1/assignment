import React from 'react'
import './signup.css'
const Signup = () => {
  return (
    <div>
       <div className='container'>
       <h1>Sign up!</h1>
       <div className='inner'>
       <form method='post' action='/Home'>
        <div className='username'>
        <label for="username">username</label><br></br>
        <input type="text" id='username'  className='user'></input><br></br>
       </div>
        <div className='email'>
        <label for="email">Email address</label><br></br>
        <input type="email" id='email' placeholder='abcd@gmail.com' className='user'></input><br></br>
       </div>
       <div className='password'>
        <label for="password">password</label><br></br>
        <input type="password" id='password' className='pass' maxLength='8'></input>
        </div>
        <button className='button'>Sign up</button>
       </form>
       </div>
    </div>

    </div>
  )
}

export default Signup
