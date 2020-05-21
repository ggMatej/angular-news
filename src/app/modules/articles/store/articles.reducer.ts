import { createReducer, on } from '@ngrx/store';
import { ArticleActions } from './articles.actions';
import { ArticleItem } from '../models/ArticleItem';

export interface ArticlesState {
  articles: ArticleItem[];
  savedArticles: ArticleItem[];
  loading: boolean;
  error?: string;
}

const INITIAL_STATE: ArticlesState = {
  articles: [],
  savedArticles: [],
  loading: false,
};

export const articlesReducer = createReducer(
  INITIAL_STATE,
  on(ArticleActions.GetRequest, (state) => ({ ...state, loading: true })),
  on(ArticleActions.Error, (state, { payload }) => ({
    ...state,
    loading: false,
    error: payload.error,
  })),
  on(ArticleActions.GetSuccess, (state, { payload }) => ({
    ...state,
    loading: false,
    articles: payload.articles,
  })),
  on(ArticleActions.SaveRequest, (state) => ({
    ...state,
    loading: true,
  })),
  on(ArticleActions.SaveSuccess, (state, { payload }) => ({
    ...state,
    savedArticles: [...state.savedArticles, payload.article],
    loading: false,
  })),
  on(ArticleActions.DeleteSuccess, (state, { payload }) => ({
    ...state,
    savedArticles: payload.savedArticles,
  }))
);
