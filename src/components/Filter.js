import React from 'react';
import '../Styles/filter.css';

class Filter extends React.Component {
 
    
        render() {
        return (
          <div>
                    <div className="header">
            <div className="header-logo">
                <b>e!</b>
            </div>
            <div className="user-accounts">
                <div className="login">Login</div>
                <div className="signup">Create an account</div>
            </div>
        </div>

        <div className="heading">Breakfast Places in Mumbai</div>
        <div style={{display: "inline-block", width: "30%"}}>
            <div className="filter">
                <div className="filter-header">Filters</div>
                <div className="filter-header">Select Location</div>
                <select className="dd">
                    <option>Select</option>
                    <option>Delhi</option>
                </select>
                <div className="filter-header">Cuisine</div>
                <div>
                    <input type="checkbox" />
                    <span className="filter-option">North Indian</span>
                </div>
                <div>
                    <input type="checkbox" />
                    <span className="filter-option">South Indian</span>
                </div>
                <div>
                    <input type="checkbox" />
                    <span className="filter-option">Chinese</span>
                </div>
                <div>
                    <input type="checkbox" />
                    <span className="filter-option">Fast Food</span>
                </div>
                <div>
                    <input type="checkbox" />
                    <span className="filter-option">Street Food</span>
                </div>
                <div className="filter-header">Cost For Two</div>
                <div>
                    <input type="radio" />
                    <span className="filter-option">Less than &#8377;500</span>
                </div>
                <div>
                    <input type="radio" />
                    <span className="filter-option">&#8377;500 to &#8377;1000</span>
                </div>
                <div>
                    <input type="radio" />
                    <span className="filter-option">&#8377;1000 to &#8377;1500</span>
                </div>
                <div>
                    <input type="radio" />
                    <span className="filter-option">&#8377;1500 to &#8377;2000</span>
                </div>
                <div>
                    <input type="radio" />
                    <span className="filter-option">&#8377;2000+</span>
                </div>
                <div className="filter-header">Sort</div>
                <div>
                    <input type="radio" />
                    <span className="filter-option">Price low to high</span>
                </div>
                <div>
                    <input type="radio" />
                    <span className="filter-option">Price high to low</span>
                </div>
            </div>
        </div>
        <div style="display: inline-block; width: 65%; vertical-align: top;">
            <div className="item">
                <div style="display: inline-block; width: 35%; padding: 20px;">
                    <img src="./Images/breakfast.jpg" width="100px" height="100px" style="border-radius: 15px;margin-left: 50px;" />
                </div>
                <div style="display: inline-block; width: 50%; vertical-align: top;margin-top: 30px;">
                    <div className="item-heading">The Big Chill Cakery</div>
                    <div style="color: gray;">FORT</div>
                    <div style="color: gray;">Shalimar Bagh, Delhi</div>
                </div>
                <hr />
            </div>

            <div className="item">
                <div style="display: inline-block; width: 35%; padding: 20px;">
                    <img src="./Images/breakfast.jpg" width="100px" height="100px" style="border-radius: 15px;margin-left: 50px;" />
                </div>
                <div style="display: inline-block; width: 50%; vertical-align: top;margin-top: 30px;">
                    <div className="item-heading">The Big Chill Cakery</div>
                    <div style={{color: "gray;"}}>FORT</div>
                    <div style="color: gray;">Shalimar Bagh, Delhi</div>
                </div>
                <hr />
            </div>

            <div className="pagination">
                <div className="page">&#8592;</div>
                <div className="page">1</div>
                <div className="page">2</div>
                <div className="page">3</div>
                <div className="page">4</div>
                <div className="page">5</div>
                <div className="page">&#8594;</div>
            </div>
        </div>
          </div>               
     

        )   
    }  
}
export default Filter;