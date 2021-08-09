import React from 'react'
import Menu from '../Menu/Menu'
import './Profile.css'
function Profile() {
    return (
        <div>
            <div className="bannerParentDiv">
                <div className="bannerChildDiv">
                    <Menu/>
                    <div className="profileMainDiv"> 
                        <div className="profileMenu">
                            <div className="ADS">
                                <span><b>Edit profile</b></span>
                            </div>
                            <div className="ADS">
                                <span>Profile picture</span>
                            </div>
                        </div>
                        <div className="profileFormDiv">
                            <div className="editTitle">
                                Edit Profile
                            </div>
                            <div className="formDataDiv">
                                <span>Basic informations</span>
                                <div className="textBoxess">
                                    <div className="textBoxes">
                                        <input type="text" value="name" className="nameTextbox"/>
                                        <input type="text" placeholder="About Me (optional)" className="aboutTextbox"/>
                                    </div>
                                    <div className="warningBox">
                                        <span><b>Why is it important?</b></span>
                                        <p>
                                        OLX is built on trust. Help other people get to know you. Tell them about the things you like. Share your favorite brands, books, movies, shows, music, food. And you will see the results…
                                        </p>
                                        {/* <input type="text" className="warningBox" /> */}
                                    </div>
                                </div>
                            </div>
                            <div className="formDataDiv">
                                <span>Contact informations</span>
                                <div className="textBoxess">
                                    <div className="textBoxes">
                                        <input type="text" placeholder="Phone No" className="nameTextbox"/>
                                        <input type="text" placeholder="Email ID" className="nameTextbox"/>
                                    </div>
                                </div>
                            </div>
                            <div>
                            <button className="">Discard</button>
                            <button style={{alignItems:'right'}}>Save</button>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    )
}

export default Profile
