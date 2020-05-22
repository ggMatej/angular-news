import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { ApplicationState } from 'src/app/modules/ngrx-store/ApplicationState';
import { Subscription } from 'rxjs';
import { ArticleSelectors } from '../../store/articles.selectors';
import { ArticleItem } from '../../models/ArticleItem';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss'],
})
export class ArticleDetailsComponent implements OnInit, OnDestroy {
  articleId: number;
  articleSubscription: Subscription;
  article: ArticleItem;
  filter = 'All';

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
      this.filter = params.get('filter');
      this.articleSubscription = this.store
        .pipe(select(ArticleSelectors.getAllArticles))
        .subscribe((articles) => {
          if (this.filter === 'All') {
            this.article = articles[this.articleId];
            return;
          }
          const filteredArticles = articles.filter(
            (article) => article.source.name === this.filter
          );
          this.article = filteredArticles[this.articleId];
        });
    });
  }
}
