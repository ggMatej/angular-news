import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticleItem } from '../../models/ArticleItem';
import { Store, select } from '@ngrx/store';
import { ApplicationState } from 'src/app/modules/ngrx-store/ApplicationState';
import { ArticleActions } from '../../store/articles.actions';
import { ArticleSelectors } from '../../store/articles.selectors';

@Component({
  selector: 'app-saved-articles',
  templateUrl: './saved-articles.component.html',
  styleUrls: ['./saved-articles.component.scss'],
})
export class SavedArticlesComponent implements OnInit {
  savedArticles$: Observable<ArticleItem[]>;

  constructor(private store: Store<ApplicationState>) {}

  ngOnInit(): void {
    this.setArticles();
  }

  setArticles() {
    this.savedArticles$ = this.store.pipe(
      select(ArticleSelectors.getSavedArticles)
    );
  }
}
