import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: ''
    };
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onSearch(this.state.searchValue);
  }

  onChange(e) {
    this.setState({
      searchValue: e.target.value
    });
  }

  render() {
    const { searchValue } = this.state;
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <label>
          Search for news:
          <input
            type="text"
            name="search"
            value={searchValue}
            onChange={this.onChange.bind(this)}
          />
        </label>
        <button
          type="submit"
        >
          Search
        </button>
      </form>
    );
  }
};

SearchBar.propTypes = {

};

export default SearchBar;
