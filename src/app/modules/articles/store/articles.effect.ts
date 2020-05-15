import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ArticleService } from '../service/article.service';
import { of } from 'rxjs';
import { ArticleActions } from './articles.actions';

@Injectable()
export class ArticlesEffects {
  loadArticles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticleActions.Get),
      mergeMap(() =>
        this.articleService.getArticles().pipe(
          map((response) =>
            ArticleActions.Success({
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

  constructor(
    private actions$: Actions,
    private articleService: ArticleService
  ) {}
}
