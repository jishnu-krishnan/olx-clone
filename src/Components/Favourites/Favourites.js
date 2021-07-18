import React from 'react'
import './Favourites.css'
import Heart from '../../assets/Heart';
function Favourites() {
    return (
        <div className="favouritesParentDiv">
            <div className="cards">
                <div className="card">
                    <div className="favorite">
                    <Heart></Heart>
                    </div>
                    <div className="data">
                    <div className="image">
                        <img src="../../../Images/R15V3.jpg" alt="" />
                    </div>
                    <div className="content">
                        <p className="rate">&#x20B9; 250000</p>
                        <span className="kilometer">Two Wheeler</span>
                        <p className="name"> YAMAHA R15V3</p>
                    </div>
                    <div className="date">
                        <span>10/5/2021</span>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Favourites
