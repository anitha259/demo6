import React from 'react';
import '../styles/Home.css';
import QuickSearchItem from './QuickSearchItem';

class QuickSearch extends React.Component {
    render() {
        return (
<div>
  <div className="container">
   <div className="heading">Quick Search</div>
    <div className="sub-heading">Discover restaurant by type of meal</div>
     <div className="row">
         <QuickSearchItem />
         <QuickSearchItem />
         <QuickSearchItem />
         <QuickSearchItem />
         <QuickSearchItem />
         <QuickSearchItem />
     
</div> 

</div>
</div>
      )
     }
    }   
export default QuickSearch;     