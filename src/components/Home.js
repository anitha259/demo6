import React from 'react';
import '../styles/Home.css';
import Wallpaper from './Wallpaper'
import QuickSearch from './QuickSearch'
import axios from 'axios' ;

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            Locations: []
        }
    }

    componentDidMount(){
        axios({
            method: 'GET',
            url: 'http://localhost:9825/Locations',
            header: {'Content-Type': 'application/json'}
        })
            .then(response => {
                this.setState({ Locations: response.data.Locations })
            })
            .catch()
    }
    render() {
        const { Locations } = this.state;
        return (
           <div>
             <Wallpaper LocationsData = {Locations} />
             <QuickSearch />
 
          </div>


)
            
  
}    
}
export default Home;