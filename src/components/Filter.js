import React from 'react';
import queryString from 'query-string';
import axios from 'axios';
import '../Styles/filter.css';

class Filter extends React.Component {
    constructor() {
        super();
        this.state = {
            brand: [],
            location: [],
            watch: undefined,
            // location: undefined,
            model: [],
            lcost: undefined,
            hcost: undefined,
            sort: 1,
            page: 1,
            pageCount: []
        }
    }

    componentDidMount() {
        const qs = queryString.parse(this.props.location.search);
        const { watch, location } = qs;

        const filterObj = {
            watch: Number(watch),
            location
        };

        axios({
            method: 'POST',
            url: 'http://localhost:2598/filter',
            headers: { 'Content-Type': 'application/json' },
            data: filterObj
        })
            .then(response => {
                this.setState({ brand: response.data.brand, watch, pageCount: response.data.pageCount })
            })
            .catch()

        axios({
            method: 'GET',
            url: 'http://localhost:2598/location',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => {
                this.setState({ location: response.data.location })
            })
            .catch()
    }

    handleSortChange = (sort) => {
        
        
        const { watch, page , location, lcost, hcost, model } = this.state;
         
        const filterObj = {
            watch: Number(watch),
            sort,
            model, 
            location,
            lcost,
            hcost,
            page
        };

        axios({
            method: 'POST',
            url: 'http://localhost:2598/filter',
            headers: { 'Content-Type': 'application/json' },
            data: filterObj
        })
            .then(response => {
                this.setState({ brand: response.data.brand, sort, pageCount: response.data.pageCount })
            })
            .catch()
    }

    handleCostChange = (lcost, hcost) => {
            // const { watch } = this.state;

        const { watch, model, location, sort, page } = this.state;

        const filterObj = {
             watch: Number(watch),
            //  lcost,
            //  hcost
            model: model.length === 0 ? undefined : model,
            location,
            lcost,
            hcost,
            sort,
            page
        };

        axios({
            method: 'POST',
            url: 'http://localhost:2598/filter',
            headers: { 'Content-Type': 'application/json' },
            data: filterObj
        })
            .then(response => {
                this.setState({ brand: response.data.brand, lcost, hcost, pageCount: response.data.pageCount })
            })
            .catch()
    }

    handleLocationChange = (event) => {
        
        const location = event.target.value;

        const { watch, model, lcost, hcost, sort, page } = this.state;
        console.log(model)
        const filterObj = {
            watch: Number(watch),
            model: model.length === 0 ? undefined : model,
            location,
            lcost,
            hcost,
            sort,
            page
        };

        axios({
            method: 'POST',
            url: 'http://localhost:2598/filter',
            headers: { 'Content-Type': 'application/json' },
            data: filterObj
        })
            .then(response => {
                this.setState({ brand: response.data.brand, location, pageCount: response.data.pageCount })
            })
            .catch()
    }

    handlePageChange = (page) => {
        
        const { watch, model, location, lcost, hcost, sort } = this.state;

        const filterObj = {
            watch: Number(watch),
            model: model.length === 0 ? undefined : model,
            location,
            lcost,
            hcost,
            sort,
            page
        };

        axios({
            method: 'POST',
            url: 'http://localhost:2598/filter',
            headers: { 'Content-Type': 'application/json' },
            data: filterObj
        })
            .then(response => {
                this.setState({ brand: response.data.brand, page, pageCount: response.data.pageCount })
            })
            .catch()
    }

    handlemodelChange = (modelId) => {
        
        const { watch, model, location, lcost, hcost, sort, page } = this.state;

        const index = model.indexOf(modelId);

        if (index === -1) {
            model.push(modelId);
        } else {
            model.splice(index, 1);
        }

        const filterObj = {
            watch: Number(watch),
            model: model.length === 0 ? undefined : model,
            location,
            lcost,
            hcost,
            sort,
            page
        };

        axios({
            method: 'POST',
            url: 'http://localhost:2598/filter',
            headers: { 'Content-Type': 'application/json' },
            data: filterObj
        })
            .then(response => {
                this.setState({ brand: response.data.brand, model, pageCount: response.data.pageCount })
            })
            .catch()
    }

    handleNavigate = (resId) => {
        
        this.props.history.push(`/details?brand=${resId}`);
    }

    render() {
        const { brand, location, pageCount } = this.state;
        return (
            <div>
                <div>

                    <div id="myId" className="heading">Breakfast Places in Mumbai</div>

                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-4 col-md-4 col-lg-4 filter-options">
                                <div className="filter-heading">Filters / Sort</div>
                                <span className="glyphicon glyphicon-chevron-down toggle-span" data-toggle="collapse"
                                    data-target="#filter"></span>
                                <div id="filter" className="collapse show">
                                    <div className="Select-Location">Select Location</div>
                                    <select className="Rectangle-2236" onChange={this.handleLocationChange}>
                                        <option value="0">Select</option>
                                        {location.map((item) => {
                                            return <option value={item.location_id}>{`${item.name}, ${item.city}`}</option>
                                        })}
                                    </select>
                                    <div className="model">model</div>
                                    <div>
                                        <input type="checkbox" onChange={() => this.handleModelChange(1)} />
                                        <span className="checkbox-items">North Indian</span>
                                    </div>
                                    <div style={{ display: "block" }} >
                                        <input type="checkbox" onChange={() => this.handleModelChange(2)} />
                                        <span className="checkbox-items">South Indian</span>
                                    </div>
                                    <div>
                                        <input type="checkbox" onChange={() => this.handleModelChange(3)} />
                                        <span className="checkbox-items">Chinese</span>
                                    </div>
                                    <div>
                                        <input type="checkbox" onChange={() => this.handleModelChange(4)} />
                                        <span className="checkbox-items">Fast Food</span>
                                    </div>
                                    <div>
                                        <input type="checkbox" onChange={() => this.handleModelChange(5)} />
                                        <span className="checkbox-items">Street Food</span>
                                    </div>
                                    <div className="model">Cost For Two</div>
                                    <div>
                                        <input type="radio" name="cost" onChange={() => this.handleCostChange(1, 500)} />
                                        <span className="checkbox-items">Less than &#8377; 500</span>
                                    </div>
                                    <div>
                                        <input type="radio" name="cost" onChange={() => this.handleCostChange(500, 1000)} />
                                        <span className="checkbox-items">&#8377; 500 to &#8377; 1000</span>
                                    </div>
                                    <div>
                                        <input type="radio" name="cost" onChange={() => this.handleCostChange(1000, 1500)} />
                                        <span className="checkbox-items">&#8377; 1000 to &#8377; 1500</span>
                                    </div>
                                    <div>
                                        <input type="radio" name="cost" onChange={() => this.handleCostChange(1500, 2000)} />
                                        <span className="checkbox-items">&#8377; 1500 to &#8377; 2000</span>
                                    </div>
                                    <div>
                                        <input type="radio" name="cost" onChange={() => this.handleCostChange(2000, 50000)} />
                                        <span className="checkbox-items">&#8377; 2000 +</span>
                                    </div>
                                    <div className="model">Sort</div>
                                    <div>
                                        <input type="radio" name="sort" onChange={() => this.handleSortChange(1)} />
                                        <span className="checkbox-items">Price low to high</span>
                                    </div>
                                    <div>
                                        <input type="radio" name="sort" onChange={() => this.handleSortChange(-1)} />
                                        <span className="checkbox-items">Price high to low</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-8 col-md-8 col-lg-8">


                                {brand.length > 0 ? brand.map(item => {
                                    return <div className="item" onClick={() => this.handleNavigate(item._id)}>
                                        <div>
                                            <div className="small-item vertical">
                                                <img alt="" className="img" src={`./${item.image}`} />
                                            </div>
                                            <div className="big-item">
                                                <div className="rest-name">{item.name}</div>
                                                <div className="rest-location">{item.locality}</div>
                                                <div className="rest-address">{item.city}</div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div>
                                            <div className="margin-left">
                                                <div className="design">MODELS : {item.model.map(modelItem => { return `${modelItem.name}, ` })}</div>
                                                <div className="design">COST FOR TWO : &#8377; {item.min_price} </div>
                                            </div>
                                        </div>
                                    </div>
                                }) : <div className='no-records'>No Records Found ...</div>}


                                {brand.length > 0 ?
                                    <div className="pagination">
                                        <span className="page-num">&laquo;</span>
                                        {pageCount.map(pageNo => {
                                            return <span className="page-num" onClick={() => this.handlePageChange(pageNo)}>{pageNo}</span>
                                        })}
                                        < span className="page-num" >&raquo;</span>
                                    </div> : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Filter;