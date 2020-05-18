import { createSelector } from '@ngrx/store';
import { ApplicationState } from '../../ngrx-store/ApplicationState';

const getAllArticles = createSelector(
  (state: ApplicationState) => state.articles.articles,
  (articles) => articles.filter((article) => article.urlToImage)
);

const getSavedArticles = createSelector(
  (state: ApplicationState) => state.articles.savedArticles,
  (savedArticles) => savedArticles
);

export const ArticleSelectors = {
  getAllArticles,
  getSavedArticles,
};
