import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesComponent } from './views/articles/articles.component';
import { ArticleDetailsComponent } from './views/article-details/article-details.component';
import { ArticleComponent } from './components/article-card/article.component';
import { RouterModule } from '@angular/router';
import { SavedArticlesComponent } from './views/saved-articles/saved-articles.component';
import { SavedArticleCardComponent } from './components/saved-article-card/saved-article-card.component';
import { SavedArticlesDetailsComponent } from './views/saved-articles-details/saved-articles-details.component';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [
    ArticleComponent,
    ArticlesComponent,
    ArticleDetailsComponent,
    SavedArticlesComponent,
    SavedArticleCardComponent,
    SavedArticlesDetailsComponent,
  ],
  imports: [CommonModule, RouterModule, ComponentsModule],
})
export class ArticlesModule {}
