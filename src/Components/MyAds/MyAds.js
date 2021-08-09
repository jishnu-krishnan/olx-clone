import React from 'react'
import './MyAds.css'
import { useState } from 'react'
import Adss from '../Ads/Adss'
import Favourites from '../Favourites/Favourites'
import Menu from '../Menu/Menu'
function MyAds() {
  const [link, setLink] = useState('')
  let component
  if(link==='ads'){
    component=<Adss/>
  }else if(link==='fav'){
    component=<Favourites/>
  }else{
    component=<Adss/>
  }
    return (
        <div className="bannerParentDiv">
          <div className="bannerChildDiv">
            <Menu/>
            <div className="link">
                <div className="ADS" onClick={()=>{setLink('ads')}}>
                    <span>ADS</span>
                </div>
                <div className="ADS" onClick={()=>{setLink('fav')}}>
                    <span>FAVOURITES</span>
                </div>
                <hr/>
            </div>
          </div>
          {component}
    </div>
    )
}

export default MyAds
