 import React from 'react';
 import { withRouter} from 'react-router-dom';

 class QuickSearchItem extends React.Component {
    handleNavigate = () => {
       this.props.history.push('/filter');
    }
     render() {
        const { heading,  description,  image, id } = this.props;
      return (
          
               <div className="col-lg-4 col-md-6 col-sm-12" onClick={this.handleNavigate}>
                <div className="item">
                   <div className="item-left">
                     <img alt="" src={`./${image}`} width="100%" height="100%" />
                   </div>
                <div className="item-right">
                <div className="qs-heading">{heading}</div>
                <div className="qs-subheading">{description}</div>
                   </div>
                  </div>
              </div>
          
      )

 }
 }
 export default withRouter(QuickSearchItem);