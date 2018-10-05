import React from 'react';

import SearchBar from 'Components/search-bar';
import Results from 'Components/results';

import uniqBy from 'lodash.uniqby';

import searchRequest from 'App/search-request';
import './styles.scss';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      totalResults: null,
      viewableResults: 0,
      lastSortBy: '',
      lastSearchedValue: '',
      nextPage: 0
    };
  }

  onSearch = ({ searchValue, sortBy, moreResults = false }) => {
    const nextPage = moreResults ? this.state.nextPage + 1 : 1;
    searchRequest.get('/everything', { params: {
      q: searchValue,
      sortBy,
      page: nextPage
    }})
      .then((res) => {
        const { articles, totalResults } = res.data;
        const filteredArticles = moreResults ? uniqBy([...this.state.articles, ...articles], 'url') :
          uniqBy(articles, 'url');
        this.setState((state) => ({
          articles: filteredArticles,
          totalResults,
          viewableResults: state.viewableResults + articles.length,
          lastSearchedValue: searchValue,
          lastSortBy: sortBy,
          nextPage: nextPage
        }));
      })
      .catch((err) => {
        this.setState(() => ({
          articles: [],
          totalResults: null,
          viewableResults: 0
        }));
      });
  }

  render() {
    const {
      articles,
      viewableResults,
      totalResults,
      lastSortBy,
      lastSearchedValue
    } = this.state;
    return (
      <div className="homepage">
        <SearchBar
          onSearch={this.onSearch}
        />
        <Results
          viewableResults={viewableResults}
          totalResults={totalResults}
          lastSearchedValue={lastSearchedValue}
          lastSortBy={lastSortBy}
          articles={articles}
          onMoreResults={this.onSearch}
        />
      </div>
    );
  }
};

export default Home;
