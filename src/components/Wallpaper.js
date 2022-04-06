import React from 'react';
import '../styles/Home.css';

class Wallpaper extends React.Component {
    render() {
        const { LocationsData } = this.props;
        return (
           <div>
            <div className="header">

              <div className="header-logo">
                <b>e!</b>
              </div>

    <div className="header-content">
    <div className="login">Login
    <div className="create-account">Create an account</div>
    </div> </div>
    </div>


     <img alt="homepageimg" src="./Assets/homepageimg.png" width="100%" height="470px"/>
     <div>
      <div className="absolute-block">
       <div className="logo">
        <b>e!</b>
       </div>
     <div className="main-heading">Find the best restaurant, cafes and bars</div>

     <select className="dd">
      
       {/* <option value="0" selected disabled>select</option> */}
        {LocationsData.map((item) => {
            return <option value="0">{`${item.name}, ${item.city}`}</option>
        })}
     </select>

  <input className="search" type="text"/> 

 </div>
 </div>
</div>
)
}
}
export default Wallpaper;