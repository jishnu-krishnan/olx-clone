import React, { useContext } from 'react'
import { useHistory, Link } from 'react-router-dom';
import { AuthContext, FirebaseContext } from '../../firebase/context';
import './Account.css';

function Account() {
    const {user} = useContext(AuthContext)
    const {firebase} = useContext(FirebaseContext)
    const history = useHistory()
    return (
        <div className="main">
            <div className="pro-img">
                <div className="imgg">
                    <img src="../../../Images/dp.png" alt="" style={{width: '70px'}}/>
                </div>
            <div className="profile">
                <div className="welcome">Hello,</div>
                <div className="username">{user.displayName}</div>
                <Link to='/account'>View and edit profile<hr/></Link>
            </div>
            </div>
            <div>
                <div className="_1863T">
                    <h5>2 steps left</h5>
                    <div className="rui-6ayPd">
                        <div className="rui-1EGXF rui-1Z990"></div>
                        <div className="rui-1EGXF rui-1Z990"></div>
                        <div className="rui-1EGXF rui-1Z990"></div>
                        <div className="rui-1EGXF rui-1Z990"></div>
                        <div className="rui-1EGXF rui-1Z991"></div>
                        <div className="rui-1EGXF rui-1Z991"></div>
                    </div>
                    <div className="rui-38RAu">
                        OLX is built on trust. Help other people get to know you. Tell them about the things you like.
                    </div>
                </div>
                <div className="menu">
                    <div className="menu-items">
                        <div className="items" onClick={()=>{
                            history.push('/ads')
                        }}>
                            <span>My Ads</span> 
                        </div>
                        <div className="items">
                            Buy Business Packages
                        </div>
                        <div className="items">
                            Bought Package & Billing
                        </div>
                        <div className=" items menu">
                            Help 
                        </div>
                        <div className="items">
                            Settings
                        </div>
                        <div className="items menu" >
                            Install OLX Lite app
                        </div>
                            {user && <div className="item menu" onClick={()=>{
                                firebase.auth().signOut();
                                history.push('/login')
                            }}>Logout</div>}
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Account

