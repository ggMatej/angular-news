import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { ApplicationState } from 'src/app/modules/ngrx-store/ApplicationState';
import { Subscription } from 'rxjs';
import { ArticleSelectors } from '../../store/articles.selectors';
import { ArticleItem } from '../../models/ArticleItem';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss'],
})
export class ArticleDetailsComponent implements OnInit {
  articleId: number;
  articleSubscription: Subscription;
  routeSubscription: Subscription;
  article: ArticleItem;

  constructor(
    private route: ActivatedRoute,
    private store: Store<ApplicationState>
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.articleId = +params.get('articleId');
      this.articleSubscription = this.store
        .pipe(select(ArticleSelectors.getAllArticles))
        .subscribe((articles) => {
          this.article = articles[this.articleId];
        });
    });
  }
}
