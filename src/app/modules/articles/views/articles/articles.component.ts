import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApplicationState } from 'src/app/modules/ngrx-store/ApplicationState';
import { Store, select } from '@ngrx/store';

import { Subscription } from 'rxjs';
import { ArticleItem } from 'src/app/modules/articles/models/ArticleItem';
import { ArticleActions } from 'src/app/modules/articles/store/articles.actions';
import { ArticleSelectors } from 'src/app/modules/articles/store/articles.selectors';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit, OnDestroy {
  articles: ArticleItem[];
  filteredArticles: ArticleItem[];
  articlesSubscription: Subscription;
  newsSources: Set<string>;
  filter: string;

  constructor(private store: Store<ApplicationState>) {}

  ngOnDestroy(): void {
    this.articlesSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.store.dispatch(ArticleActions.GetRequest());
    this.setArticles();
  }

  setArticles() {
    const newsSources = [];

    this.articlesSubscription = this.store
      .pipe(select(ArticleSelectors.getAllArticles))
      .subscribe((articles) => {
        this.articles = articles;
        this.filteredArticles = articles;
      });

    this.articles.forEach((article) => newsSources.push(article.source.name));
    this.newsSources = new Set(newsSources);
  }

  onChange(selectedSource) {
    this.filter = selectedSource;
    if (selectedSource === 'All') {
      this.filteredArticles = this.articles;
      return;
    }
    this.filteredArticles = this.articles.filter(
      (article) => article.source.name === selectedSource
    );
  }
}
