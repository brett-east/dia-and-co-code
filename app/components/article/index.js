import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Article = (props) => {
  const { article } = props;
  return (
    <article className="article">
      <img
        className="article-image"
        src={article.urlToImage}
        alt=""
      />
      <div className="text-container">
        <h1>{article.title}</h1>
        <p>{article.description}</p>
        <a
          className="read-more__button"
          href={article.url}
          target="_blank"
        >
          Read more
        </a>
      </div>
    </article>
  );
};

Article.propTypes = {

};

export default Article;
