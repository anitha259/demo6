import React from 'react';
import { withRouter } from 'react-router-dom';

class QuickSearchItem extends React.Component {
    handleNavigate = (watchId) => {
        const locationId = sessionStorage.getItem('locationId');
        if (locationId) {
            this.props.history.push(`/filter?watch=${watchId}&location=${locationId}`);
        } else {
            this.props.history.push(`/filter?watch=${watchId}`);
        }
    }

    render() {
        const { heading, description, image, id } = this.props;
        return (
            <div className="col-sm-12 col-md-6 col-lg-4" onClick={() => this.handleNavigate(id)}>
                <div className="tileContainer">
                    <div className="tileComponent1">
                        <img alt="" src={`./${image}`} height="150" width="140" />
                    </div>
                    <div className="tileComponent2">
                        <div className="componentHeading">
                            {heading}
                        </div>
                        <div className="componentSubHeading">
                            {description}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(QuickSearchItem);