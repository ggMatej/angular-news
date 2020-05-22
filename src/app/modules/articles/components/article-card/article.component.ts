import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ArticleItem } from '../../models/ArticleItem';
import { Store, select } from '@ngrx/store';
import { ApplicationState } from 'src/app/modules/ngrx-store/ApplicationState';
import { ArticleActions } from '../../store/articles.actions';
import { ArticleSelectors } from '../../store/articles.selectors';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { createNgModule } from '@angular/compiler/src/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  @Input() article: ArticleItem;
  @Input() articleId: number;
  @Input() filter: string;

  articlesSubscription: Subscription;
  isSaved: boolean;

  constructor(private store: Store<ApplicationState>) {}

  ngOnInit(): void {
    this.checkIfSaved();
    console.log('onInit');
  }

  onSaveForLater() {
    this.store.dispatch(ArticleActions.SaveRequest({ article: this.article }));
  }

  checkIfSaved() {
    this.articlesSubscription = this.store
      .pipe(select(ArticleSelectors.getSavedArticles))
      .subscribe((savedArticles) => {
        const isSaved = savedArticles.filter(
          (article) => article.title === this.article.title
        );
        isSaved.length ? (this.isSaved = true) : (this.isSaved = false);
      });
  }
}
