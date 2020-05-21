import { Component, OnInit, Input } from '@angular/core';
import { ArticleItem } from '../../models/ArticleItem';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { ApplicationState } from 'src/app/modules/ngrx-store/ApplicationState';
import { ArticleActions } from '../../store/articles.actions';

@Component({
  selector: 'app-saved-article-card',
  templateUrl: './saved-article-card.component.html',
  styleUrls: ['./saved-article-card.component.scss'],
})
export class SavedArticleCardComponent implements OnInit {
  @Input() article: ArticleItem;
  @Input() articleId: number;
  @Input() savedArticles: ArticleItem[];

  articlesSubscription: Subscription;
  isSaved: boolean;

  constructor(private store: Store<ApplicationState>) {}

  ngOnInit(): void {}

  showDialog() {
    const modal = document.getElementById('modal');
    modal.classList.remove('hidden');
  }

  onRemove() {
    console.log(this.article);
    this.store.dispatch(
      ArticleActions.DeleteSuccess({
        payload: {
          savedArticles: this.savedArticles.filter(
            (article) => article.title !== this.article.title
          ),
        },
      })
    );

    const modal = document.getElementById('modal');
    modal.classList.add('hidden');
  }
}
