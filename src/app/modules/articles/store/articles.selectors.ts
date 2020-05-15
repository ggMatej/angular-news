import { createSelector } from '@ngrx/store';
import { ApplicationState } from '../../ngrx-store/ApplicationState';

const getAllArticles = createSelector(
  (state: ApplicationState) => state.articles.articles,
  (articles) => articles.filter((article) => article.urlToImage)
);

export const ArticleSelectors = {
  getAllArticles,
};
