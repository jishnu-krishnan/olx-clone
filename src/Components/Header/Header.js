import React, { useContext, useState } from 'react';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, FirebaseContext } from '../../firebase/context';
import { useHistory, Link } from 'react-router-dom';
import Account from '../Account/Account';
function Header() {
  const history = useHistory()
  const {user} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  const [viewAcc, setViewAcc] = useState(false)

  
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <Link to='/'><OlxLogo/></Link>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
          
        </div>
        
        {user ? <div className="loginPage" onClick={()=>setViewAcc(!viewAcc)} >
          Account
          {/* {`Welcome ${user.displayName}`} */}
          {viewAcc ? <Account></Account> : null} 
        </div>: <Link to='/login'>Login</Link> }

        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span onClick={()=>{history.push('/sell')}}>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
