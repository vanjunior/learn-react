// import React from 'react';
import React, { Component } from 'react';
// let Component = React.Component;

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    render() {

        return (
            <div className="search-bar">
                <input
                    onChange={event => this.onInputChange(event.target.value)}
                    placeholder={this.props.placeholder}
                    value={this.state.term} />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({ term });
        this.props.onSearchTermChange(term);
    }
}

module.exports = SearchBar;
