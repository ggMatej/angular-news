import { createAction, props } from '@ngrx/store';
import { ArticleActionTypes } from './articles.types';
import { ArticleItem } from '../models/ArticleItem';

export const ArticleActions = {
  Get: createAction(ArticleActionTypes.Get),
  Success: createAction(
    ArticleActionTypes.Success,
    props<{ payload: { articles: ArticleItem[] } }>()
  ),
  Error: createAction(
    ArticleActionTypes.Error,
    props<{ payload: { error: string } }>()
  ),
};
