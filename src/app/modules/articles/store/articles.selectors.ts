import { createSelector } from '@ngrx/store';
import { ApplicationState } from '../../ngrx-store/ApplicationState';

const getAllArticles = createSelector(
  (state: ApplicationState) => state.articles.articles,
  (articles) => articles
);

export const ArticleSelectors = {
  getAllArticles,
};
