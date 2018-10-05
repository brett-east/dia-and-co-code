import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './styles.scss';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: '',
      sortBy: 'relevancy'
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { searchValue, sortBy } = this.state;
    if (!searchValue) {
      alert('Please add a search term');
      return;
    }
    this.props.onSearch({ searchValue, sortBy });
  }

  onSearchChange = (e) => {
    this.setState({
      searchValue: e.target.value
    });
  }

  onSelectChange = (e) => {
    const sortBy = e.target.value;
    this.setState({ sortBy }, () => {
      const { searchValue, sortBy } = this.state;
      this.props.onSearch({ searchValue, sortBy });
    });

  }

  render() {
    const { searchValue } = this.state;
    return (
      <div className="search-bar">
        <form onSubmit={this.onSubmit}>
          <label className="search-bar__label">
            <span>Search for news:</span>
            <input
              placeholder="Search for a news story"
              type="text"
              name="search"
              value={searchValue}
              onChange={this.onSearchChange}
              className="search-bar__input"
            />
          </label>
          <select
            className="search-bar__select"
            onChange={this.onSelectChange}
          >
            <option value="">
              Sort Articles
            </option>
            <option value="relevancy">
              Relevance
            </option>
            <option value="publishedAt">
              Date
            </option>
            <option value="popularity">
              Popularity
            </option>
            <option value="relevancy">
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
