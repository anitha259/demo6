import React from 'react';
import '../Styles/Home.css';
import QuickSearchItem from './QuickSearchItem';

class QuickSearch extends React.Component {
    render() {
        const { watchData } = this.props;
        return (
            <div>
                <div className="quickSearch">
                    <p className="quickSearchHeading">
                        Quick Searches
                    </p>
                    <p className="quickSearchSubHeading">
                        Discover watch for your wrist 
                    </p>

                    <div className="container-fluid">
                        <div className="row">
                            {watchData.map(item => {
                                return <QuickSearchItem
                                    heading={item.name}
                                    description={item.content}
                                    image={item.image}
                                    id={item.watch}
                                />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuickSearch;