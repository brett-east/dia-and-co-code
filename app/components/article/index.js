import React from 'react';
import PropTypes from 'prop-types';

const Article = (props) => {
  const { article } = props;
  return (
    <div>
      <img src={article.urlToImage} alt="" />
      <p>{article.title}</p>
      <p>{article.description}</p>
    </div>
  );
};

Article.propTypes = {

};

export default Article;
