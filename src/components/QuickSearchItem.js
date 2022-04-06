 import React from 'react';

 class QuickSearchItem extends React.Component {
     render() {
      return (
          
               <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="item">
                   <div className="item-left">
                     <img alt="dinner" src="./Assets/dinner.png" width="100%" height="100%" />
                   </div>
                <div className="item-right">
                <div className="qs-heading">Dinner</div>
                <div className="qs-subheading">Have Breakfast Option From Here</div>
                   </div>
                  </div>
              </div>
          
      )

 }
 }
 export default QuickSearchItem;