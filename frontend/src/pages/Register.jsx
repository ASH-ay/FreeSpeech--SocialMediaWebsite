import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'


const Register = () => {
  const [userData, setUserData] =useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })
  const [error, setError] = useState('')
  const navigate = useNavigate

  const changeInputhandler = (e) => {
    setUserData(prevState => {
      return {...prevState, [e.target.name]: e.target.value}
    })
  }
  const registerUser = async (e) => {
    e.preventDefault()
    setError('')
    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/users/register`, userData)
      const newUser = await response.data;
      console.log(newUser);
      if (!newUser) {
        setError("User Not Registered! Try again.")      
      }
      
    } catch (err) {
      setError(err.response.data.message)
    }
  }

  return(
    <section className="register">
      <div className="container">
        <h2>Sign Up</h2>
        <form className="form register__form" onSubmit={registerUser}>
          { error && <p className="form__error-message">{error}</p> }
          <input type="text" placeholder='Full Name' name='name' value={userData.name} onChange={changeInputhandler} autoFocus/>
          <input type="text" placeholder='Email' name='email' value={userData.email} onChange={changeInputhandler} autoFocus/>
          <input type="password" placeholder='Password' name='password' value={userData.password} onChange={changeInputhandler} autoFocus/>
          <input type="password" placeholder='Confirm Password' name='password2' value={userData.password2} onChange={changeInputhandler} autoFocus/>
          <button type="submit" className='btn primary'>Register</button>
        </form>
        <small>Are you already a member? <Link to="/login">Sign in</Link> </small>
      </div>
    </section>
  )
}

export default Register