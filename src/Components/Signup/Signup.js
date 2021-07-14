import React, { useState, useContext } from 'react';
import { FirebaseContext } from '../../firebase/context';
import { useHistory } from 'react-router-dom';
import Logo from '../../olx-logo.png';
import './Signup.css';

export default function Signup() {
  const history =useHistory()
  const [username, setUsername] = useState('')
  const [phoneno, setPhoneno] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {firebase} = useContext(FirebaseContext)
  const formSubmit=(e)=>{
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(email,password).then(result=>{
      result.user.updateProfile({displayName:username}).then(()=>{
        firebase.firestore().collection('users').add({
          id:result.user.uid,
          username:username,
          phone:phoneno
        }).then(()=>{
          history.push('/login')
        })
      })
    })
  }
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={formSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input value={username} onChange={(e)=>setUsername(e.target.value)} className="input" type="text" id="fname" name="name"/>
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input value={email} onChange={(e)=>setEmail(e.target.value)} className="input" type="email" id="fname"name="email"/>
          <br />
          <label htmlFor="phone">Phone</label>
          <br />
          <input value={phoneno} onChange={(e)=>setPhoneno(e.target.value)} className="input" type="number" id="lname"name="phone"/>
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input value={password} onChange={(e)=>setPassword(e.target.value)} className="input" type="password" id="lname" name="password"/>
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
