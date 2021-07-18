import React from 'react'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import MyAds from '../Components/MyAds/MyAds'


function Ads() {
    return (
        <div className="adsParentDiv">
            <Header/>
            <MyAds/>
            <Footer/>
        </div>
    )
}

export default Ads
