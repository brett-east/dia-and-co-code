import React from 'react';
import PropTypes from 'prop-types';

import Article from 'Components/article';

import './styles.scss';

const Results = (props) => {
  const { articles } = props;
  const articleEls = articles.map((article) => (
    <Article
      article={article}
    />
  ));
  return (
    <div className="results">
      {articleEls}
    </div>
  );
};

Results.propTypes = {

};

export default Results;
