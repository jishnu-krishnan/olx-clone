import React from 'react'
import Arrow from '../../assets/Arrow'

function Menu() {
    return (
        <div>
            <div className="menuBar">
              <div className="categoryMenu">
                <span>ALL CATEGORIES</span>
                <Arrow></Arrow> 
              </div>
              <div className="otherQuickOptions">
                <span>Cars</span>
                <span>Motorcycles</span>
                <span>Mobile Phones</span>
                <span>For Sale:Houses & Apartments</span>
                <span>Scooters</span>
                <span>Commercial & Other Veicles</span>
                <span>For Rent: House & Apartments</span>
              </div>
            </div>
        </div>
    )
}

export default Menu
