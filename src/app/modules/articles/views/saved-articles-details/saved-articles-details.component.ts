import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ArticleItem } from '../../models/ArticleItem';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { ApplicationState } from 'src/app/modules/ngrx-store/ApplicationState';
import { ArticleSelectors } from '../../store/articles.selectors';

@Component({
  selector: 'app-saved-articles-details',
  templateUrl: './saved-articles-details.component.html',
  styleUrls: ['./saved-articles-details.component.scss'],
})
export class SavedArticlesDetailsComponent implements OnInit, OnDestroy {
  articleId: number;
  articleSubscription: Subscription;
  article: ArticleItem;

  constructor(
    private route: ActivatedRoute,
    private store: Store<ApplicationState>
  ) {}

  ngOnDestroy(): void {
    this.articleSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.articleId = +params.get('articleId');
      this.articleSubscription = this.store
        .pipe(select(ArticleSelectors.getSavedArticles))
        .subscribe((articles) => {
          this.article = articles[this.articleId];
        });
    });
  }
}
