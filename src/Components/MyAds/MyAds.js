import React from 'react'
import Arrow from '../../assets/Arrow'
import './MyAds.css'
import { useState } from 'react'
import Adss from '../Ads/Adss'
import Favourites from '../Favourites/Favourites'

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
            <div className="menuBar">
              <div className="categoryMenu">
                <span>ALL CATEGORIES</span>
                <Arrow></Arrow> 
              </div>
              <div className="otherQuickOptions">
                <span>Cars</span>
                <span>Motorcy...</span>
                <span>Mobile Ph...</span>
                <span>For Sale:Houses & Apart...</span>
                <span>Scoot...</span>
                <span>Commercial & Other Ve...</span>
                <span>For Rent: House & Apart...</span>
              </div>
            </div>
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
