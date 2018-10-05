import React from 'react';
import PropTypes from 'prop-types';

import Article from 'Components/article';

const Results = (props) => {
  const { articles } = props;
  console.log('articles', articles);
  const articleEls = articles.map((article) => (
    <Article
      article={article}
    />
  ));
  return (
    <div>
      {articleEls}
    </div>
  );
};

Results.propTypes = {

};

export default Results;
