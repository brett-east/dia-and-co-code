import React from 'react';
import PropTypes from 'prop-types';

import Article from 'Components/article';

import './styles.scss';

const Results = (props) => {
  const { articles } = props;


  const moreResults = () => {
    const { onMoreResults, lastSortBy, lastSearchedValue } = props;
    onMoreResults({ searchValue: lastSearchedValue, sortBy: lastSortBy, moreResults: true });
  }

  const articleEls = articles.map((article) => (
    <Article
      key={article.url}
      article={article}
    />
  ));

  const showMoreResultsButton = (articles.length > 0) &&
    (props.totalResults > props.viewableResults);

  const moreResultsEl = showMoreResultsButton ? (
    <div className="more-results-button">
      <button onClick={moreResults}>
        More results
      </button>
    </div>
  ) : null;

  return (
    <div className="results">
      {articleEls}
      {moreResultsEl}
    </div>
  );
};

Results.propTypes = {

};

export default Results;
