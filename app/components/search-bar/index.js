import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './styles.scss';

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
      <div className="search-bar">
        <form onSubmit={this.onSubmit.bind(this)}>
          <label className="search-bar__label">
            <span>Search for news:</span>
            <input
              placeholder="Search for a news story"
              type="text"
              name="search"
              value={searchValue}
              onChange={this.onChange.bind(this)}
              className="search-bar__input"
            />
          </label>
          <select className="search-bar__select">
            <option value="">
              Sort Articles
            </option>
            <option value="relevance">
              Relevance
            </option>
            <option value="date">
              Date
            </option>
            <option value="popularity">
              Popularity
            </option>
            <option value="none">
              None
            </option>
          </select>
          <button
            type="submit"
            className="search-bar__submit"
          >
            Search
          </button>
        </form>
      </div>
    );
  }
};

SearchBar.propTypes = {

};

export default SearchBar;
