import { Component, OnInit, Input } from '@angular/core';
import { ArticleItem } from '../../models/ArticleItem';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  @Input() article: ArticleItem;
  @Input() articleId: number;

  constructor() {}

  ngOnInit(): void {}
}
