import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesComponent } from './views/articles/articles.component';
import { ArticleDetailsComponent } from './views/article-details/article-details.component';
import { ArticleComponent } from './components/article-card/article.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ArticleComponent, ArticlesComponent, ArticleDetailsComponent],
  imports: [CommonModule, RouterModule],
})
export class ArticlesModule {}
