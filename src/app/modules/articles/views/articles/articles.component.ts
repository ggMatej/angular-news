import { Component, OnInit } from '@angular/core';
import { ApplicationState } from 'src/app/modules/ngrx-store/ApplicationState';
import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';
import { ArticleItem } from 'src/app/modules/articles/models/ArticleItem';
import { ArticleActions } from 'src/app/modules/articles/store/articles.actions';
import { ArticleSelectors } from 'src/app/modules/articles/store/articles.selectors';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  articles$: Observable<ArticleItem[]>;

  constructor(private store: Store<ApplicationState>) {
    this.getArticles();
  }

  ngOnInit(): void {
    this.store.dispatch(ArticleActions.GetRequest());
  }

  getArticles() {
    this.articles$ = this.store.pipe(select(ArticleSelectors.getAllArticles));
  }
}
