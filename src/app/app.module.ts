import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ArticlesModule } from './modules/articles/articles.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { articlesReducer } from './modules/articles/store/articles.reducer';
import { ArticlesEffects } from './modules/articles/store/articles.effect';
import { ArticlesComponent } from './modules/articles/views/articles/articles.component';
import { ArticleDetailsComponent } from './modules/articles/views/article-details/article-details.component';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ArticlesModule,
    RouterModule.forRoot([
      { path: '', component: ArticlesComponent },
      { path: 'articles/:articleId', component: ArticleDetailsComponent },
    ]),
    StoreModule.forRoot({
      articles: articlesReducer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    EffectsModule.forRoot([ArticlesEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
