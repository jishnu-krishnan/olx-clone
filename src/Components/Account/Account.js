import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';
import { AuthContext, FirebaseContext } from '../../firebase/context';
import './Account.css';

function Account() {
    const {user} = useContext(AuthContext)
    const {firebase} = useContext(FirebaseContext)
    const history = useHistory()
    return (
        <div className="main">
            sgg
            {user && <div className="logout" onClick={()=>{
                firebase.auth().signOut();
                history.push('/login')
            }}>Logout</div>}
        </div>
    )
}

export default Account

