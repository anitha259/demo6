 import React from 'react';

 class QuickSearchItem extends React.Component {
     render() {
        const {item} = this.props;
      return (
          
               <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="item">
                   <div className="item-left">
                     <img alt="dinner" src={item.image} width="100%" height="100%" />
                   </div>
                <div className="item-right">
                <div className="qs-heading">{item.name}</div>
                <div className="qs-subheading">{item.content}</div>
                   </div>
                  </div>
              </div>
          
      )

 }
 }
 export default QuickSearchItem;