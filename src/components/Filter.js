import React from 'react';

class Filter extends React.Component {
  handleBack = () => {
        this.props.history.push('/');
    }
        render() {
        return (
            <div>
                <div>Filter Page</div>
                <button onClick={this.handleBack}>Back</button>
            </div>
        )   
    }    
}
    export default Filter;