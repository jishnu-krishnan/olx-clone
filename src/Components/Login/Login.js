import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {FirebaseContext} from '../../firebase/context'
import Logo from '../../olx-logo.png';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassowrd] = useState('')
  const {firebase} = useContext(FirebaseContext)
  const history = useHistory()
  const loginSubmit=(e)=>{
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      history.push('/')
      //alert('Logged In')
    }).catch(error=>{
      alert(error.message)
    })
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={loginSubmit}>
          <label htmlFor="email">Email</label>
          <br />
          <input value={email} onChange={(e)=>setEmail(e.target.value)} className="input" type="email" id="email" name="email" />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input value={password} onChange={(e)=>setPassowrd(e.target.value)} className="input" type="password" id="password" name="password" />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a>Signup</a>
      </div>
    </div>
  );
}

export default Login;
