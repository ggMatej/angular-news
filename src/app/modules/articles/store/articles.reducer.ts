import { createReducer, on } from '@ngrx/store';
import { ArticleActions } from './articles.actions';
import { ArticleItem } from '../models/ArticleItem';

export interface ArticlesState {
  articles: ArticleItem[];
  loading: boolean;
  error?: string;
}

const INITIAL_STATE: ArticlesState = {
  articles: [],
  loading: false,
};

export const articlesReducer = createReducer(
  INITIAL_STATE,
  on(ArticleActions.Get, (state) => ({ ...state, loading: true })),
  on(ArticleActions.Error, (state, { payload }) => ({
    ...state,
    loading: false,
    error: payload.error,
  })),
  on(ArticleActions.Success, (state, { payload }) => ({
    ...state,
    loading: false,
    articles: payload.articles,
  }))
);
