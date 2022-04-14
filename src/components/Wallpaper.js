import React from 'react';
import '../Styles/Home.css';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class Wallpaper extends React.Component {
    constructor() {
        super();
        this.state = {
            brand: [],
            inputText: undefined,
            suggestions: []
        }
    }

    handleLocationChange = (event) => {
        const locationId = event.target.value;
        sessionStorage.setItem('locationId', locationId);

        axios({
            method: 'GET',
            url: `http://localhost:2598/brand/${locationId}`,
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => {
                this.setState({ brand: response.data.brand, inputText: '' })
            })
            .catch()
    }

    handleSearch = (event) => {
        const { brand } = this.state;
        const inputText = event.target.value;

        const suggestions = brand.filter(item => item.name.toLowerCase().includes(inputText.toLowerCase()));
        this.setState({ inputText, suggestions });
    }

    selectingBrand = (resObj) => {
        this.props.history.push(`/details?brand=${resObj._id}`);
    }

    showSuggestion = () => {
        const { suggestions, inputText } = this.state;

        if (suggestions.length === 0 && inputText === undefined) {
            return null;
        }
        if (suggestions.length > 0 && inputText === '') {
            return null;
        }
        if (suggestions.length === 0 && inputText) {
            return <ul >
                <li>No Search Results Found</li>
            </ul>
        }
        return (
            <ul >
                {
                    suggestions.map((item, index) => (<li key={index} onClick={() => this.selectingBrand(item)}>{`${item.name} -   ${item.locality},${item.city}`}</li>))
                }
            </ul>
        );

    }

    render() {
        const { locationData, inputText } = this.props;
        return (
            <div>
                {/* Adding Wallpaper */}
                <img alt="" src="./Assets/image7.jpg" width="100%" height="450" />
                <div>

                    <div className="logo">
                        <p>w$</p>
                    </div>

                    <div className="headings">
                        Find the best brand, stylish watch
                    </div>

                    <div className="locationSelector">
                        <select className="locationDropdown" onChange={this.handleLocationChange}>
                            <option value="0">Select</option>
                            {locationData.map((item) => {
                                return <option value={item.location_id}>{`${item.name}, ${item.city}`}</option>
                            })}
                        </select>
                        <div>
                            <span className="glyphicon glyphicon-search search"></span>
                            <div id="notebooks">
                                <input id="query" className="brandinput" type="text" value={inputText}
                                    placeholder="Please Enter Brand Name" onChange={this.handleSearch} />
                                {this.showSuggestion()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Wallpaper);