import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { ArticleService } from '../service/article.service';
import { of } from 'rxjs';
import { ArticleActions } from './articles.actions';

@Injectable()
export class ArticlesEffects {
  loadArticles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticleActions.GetRequest),
      mergeMap(() =>
        this.articleService.getArticles().pipe(
          map((response) =>
            ArticleActions.GetSuccess({
              payload: { articles: response.articles },
            })
          ),
          catchError(() =>
            of(
              ArticleActions.Error({
                payload: { error: 'Error getting articles' },
              })
            )
          )
        )
      )
    )
  );

  saveArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticleActions.SaveRequest),
      mergeMap((action) =>
        this.articleService.saveArticle(action.article).pipe(
          map((article) =>
            ArticleActions.SaveSuccess({ payload: { article } })
          ),
          catchError(() =>
            of(
              ArticleActions.Error({
                payload: { error: 'Error saving article' },
              })
            )
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private articleService: ArticleService
  ) {}
}
