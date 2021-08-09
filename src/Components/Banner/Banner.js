import React from 'react';

import './Banner.css';
import Menu from '../Menu/Menu';
function Banner() {
  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <Menu/>
        <div className="banner">
          <img
            src="../../../Images/banner copy.png"
            alt=""
          />
        </div>
      </div>
      
    </div>
  );
}

export default Banner;
