import React from 'react';
import '../styles/Home.css';
import QuickSearchItem from './QuickSearchItem';

class QuickSearch extends React.Component {
    render() {
        const { MealTypesData } = this.props;
        return (
<div>
  <div className="container">
   <div className="heading">Quick Search</div>
    <div className="sub-heading">Discover restaurant by type of meal</div>
     <div className="row">
       {MealTypesData.map(item => { 
           return < QuickSearchItem 
             heading={item}
             description={item}
             image={item}
             Id={item}
            />
           })}
     
</div> 

</div>
</div>
      )
     }
    }   
export default QuickSearch;     