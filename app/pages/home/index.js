import React from 'react';

import SearchBar from 'Components/search-bar';
import Results from 'Components/results';

import searchRequest from 'App/search-request';
import './styles.scss';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      totalResults: null
    };
  }

  onSearch = (searchValue) => {
    console.log(searchValue);
    searchRequest.get('/everything', { params: {
      q: searchValue
    }})
      .then((res) => {
        console.log(res.data);
        const { articles, totalResults } = res.data;
        this.setState(() => ({
          articles,
          totalResults
        }));
      })
      .catch((err) => {
        console.log('An error occured', err);
        this.setState(() => ({
          articles: [],
          totalResults: null
        }));
      });
  }

  render() {
    return (
      <div className="homepage">
        <SearchBar
          onSearch={this.onSearch}
        />
        <Results
          articles={this.state.articles}
        />
      </div>
    );
  }
};

export default Home;
