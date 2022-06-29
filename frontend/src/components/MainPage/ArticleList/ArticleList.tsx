import { useEffect } from 'react';

import { useTypedSelector, useTypedDispatch } from '../../../state/hooks';
import { fetchArticlesAsync } from '../../../state/articles/articlesSlice';
import { Article } from '../Article/Article';

export const ArticleList = () => {
  const articles = useTypedSelector((state) => state.articles.articles);
  const isLoadingArticles = useTypedSelector((state) => state.articles.isLoadingArticles);
  const dispatch = useTypedDispatch();

  useEffect(() => {
    // Use "world" as default since the API does not allow an empty string
    dispatch(fetchArticlesAsync({ query: 'world', page: 1 }));
  }, []);

  const renderArticles = () => {
    return articles.map((article) => <Article article={article} key={article.url} />);
  }

  return (
    <div>
      {isLoadingArticles ? 'loading' : renderArticles()}
    </div>
  );
}