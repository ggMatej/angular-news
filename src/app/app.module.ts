import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { ArticlesModule } from './modules/articles/articles.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { articlesReducer } from './modules/articles/store/articles.reducer';
import { ArticlesEffects } from './modules/articles/store/articles.effect';
import { ArticlesComponent } from './modules/articles/views/articles/articles.component';
import { ArticleDetailsComponent } from './modules/articles/views/article-details/article-details.component';

import {
  StoreModule,
  ActionReducer,
  MetaReducer,
  ActionReducerMap,
} from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { reducers } from './modules/ngrx-store/Reducers';
import { ApplicationState } from './modules/ngrx-store/ApplicationState';

export function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({ keys: ['articles'], rehydrate: true })(reducer);
}

const persistedReducers: ActionReducerMap<ApplicationState> = reducers;
const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

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
    StoreModule.forRoot(persistedReducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    EffectsModule.forRoot([ArticlesEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
