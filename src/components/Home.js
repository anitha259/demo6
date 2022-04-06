import React from 'react';
import '../styles/Home.css';
import Wallpaper from './Wallpaper'
import QuickSearch from './QuickSearch'
import axios from 'axios' ;

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            location: [],
            mealTypes: []
        }
    }

    componentDidMount(){
        axios({
            method: 'GET',
            url: 'http://localhost:9825/Locations',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => {
                this.setState({ Locations: response.data.location })
            })
            .catch()
    

    axios({
        method: 'GET',
        url: 'http://localhost:9825/MealTypes',
        headers: { 'Content-Type': 'application/json' }
    })
        .then(response => {
            this.setState({ MealTypes: response.data.mealTypes })
        })
        .catch()
    }

    render() {
        const { location, mealTypes } = this.state;
        return (
           <div>
             <Wallpaper LocationsData = {location} />
             <QuickSearch MealTypesData = {mealTypes}/>
 
          </div>


)
            
  
}    
}
export default Home;