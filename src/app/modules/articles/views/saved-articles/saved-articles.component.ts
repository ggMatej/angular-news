import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ArticleItem } from '../../models/ArticleItem';
import { Store, select } from '@ngrx/store';
import { ApplicationState } from 'src/app/modules/ngrx-store/ApplicationState';
import { ArticleSelectors } from '../../store/articles.selectors';
import { ArticleActions } from '../../store/articles.actions';

@Component({
  selector: 'app-saved-articles',
  templateUrl: './saved-articles.component.html',
  styleUrls: ['./saved-articles.component.scss'],
})
export class SavedArticlesComponent implements OnInit, OnDestroy {
  savedArticles: ArticleItem[];
  savedArticlesSubscription: Subscription;
  articleId: number;

  showModal = false;

  constructor(private store: Store<ApplicationState>) {}

  ngOnDestroy(): void {
    this.savedArticlesSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.setArticles();
  }

  setArticles() {
    this.savedArticlesSubscription = this.store
      .pipe(select(ArticleSelectors.getSavedArticles))
      .subscribe((articles) => (this.savedArticles = articles));
  }

  onShowModal(articleId: number) {
    this.showModal = true;
    this.articleId = articleId;
    const modal = document.getElementById('modal');
    modal.classList.remove('hidden');
  }

  onRemove() {
    this.showModal = false;
    this.savedArticles = this.savedArticles.filter(
      (article) => this.savedArticles.indexOf(article) !== this.articleId
    );
    this.store.dispatch(
      ArticleActions.DeleteSuccess({
        payload: {
          savedArticles: this.savedArticles,
        },
      })
    );
  }

  onCancel() {
    this.showModal = false;
  }
}
