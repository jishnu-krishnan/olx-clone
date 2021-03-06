import React,{useEffect, useContext} from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Create from './Pages/Create'
import View from './Pages/ViewPost'
import Ads from './Pages/Ads'
import { AuthContext,FirebaseContext } from './firebase/context';
import Post from './firebase/postContext'
import EditProfile from './Pages/EditProfile';
function App() {
  const {setUser} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user=>{
      setUser(user)
    })
  })
  return (
    <div>
      <Post>
        <Router>
          <Route exact path='/'><Home /></Route>
          <Route path='/signup'><Signup/></Route>
          <Route path='/login'><Login/></Route>
          <Route path='/sell'><Create/></Route>
          <Route path='/view'><View/></Route>
          <Route path='/ads'><Ads/></Route>
          <Route path='/editProfile/info'><EditProfile/></Route>
        </Router>
      </Post>
    </div>
  );
}

export default App;
