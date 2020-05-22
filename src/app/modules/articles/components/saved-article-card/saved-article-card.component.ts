import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

  @Output() showModal = new EventEmitter<number>();

  articlesSubscription: Subscription;
  isSaved: boolean;

  constructor(private store: Store<ApplicationState>) {}

  ngOnInit(): void {}

  showDialog() {
    this.showModal.emit(this.articleId);
  }
}
