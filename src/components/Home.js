import React from 'react';
import '../Styles/Home.css';
import Wallpaper from './Wallpaper';
import QuickSearch from './QuickSearch';

import axios from 'axios';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            location: [],
            watch: []
        }
    }

    componentDidMount() {
        sessionStorage.clear();
        axios({
            method: 'GET',
            url: 'http://localhost:2598/location',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => {
                this.setState({ location: response.data.location })
            })
            .catch()

        axios({
            method: 'GET',
            url: 'http://localhost:2598/watch',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => {
                this.setState({ watch: response.data.watch })
            })
            .catch()
    }

    render() {
        const { location, watch } = this.state;
        return (
            <div>
                <Wallpaper locationData={location} />
                <QuickSearch watchData={watch} />
            </div>
        )
    }
}

export default Home;