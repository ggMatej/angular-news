import { createAction, props } from '@ngrx/store';
import { ArticleActionTypes } from './articles.types';
import { ArticleItem } from '../models/ArticleItem';

export const ArticleActions = {
  GetRequest: createAction(ArticleActionTypes.GetArticlesRequest),
  GetSuccess: createAction(
    ArticleActionTypes.GetArticlesSuccess,
    props<{ payload: { articles: ArticleItem[] } }>()
  ),
  Error: createAction(
    ArticleActionTypes.Error,
    props<{ payload: { error: string } }>()
  ),
  SaveRequest: createAction(
    ArticleActionTypes.SaveArticleRequest,
    props<{ article: ArticleItem }>()
  ),
  SaveSuccess: createAction(
    ArticleActionTypes.SaveArticleSuccess,
    props<{ payload: { article: ArticleItem } }>()
  ),
  DeleteSuccess: createAction(
    ArticleActionTypes.DeleteArticleSuccess,
    props<{ payload: { savedArticles: ArticleItem[] } }>()
  ),
};
