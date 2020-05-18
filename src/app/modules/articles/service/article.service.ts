import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ArticlesResponse } from '../models/ArticlesResponse';
import { ArticleItem } from '../models/ArticleItem';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  API_KEY = '871cb65ccd724a46a6b954a280b4b08c';
  BASE_URL = `https://newsapi.org/v2/top-headlines?q=trump&apiKey=${this.API_KEY}`;

  constructor(private http: HttpClient) {}

  getArticles(): Observable<ArticlesResponse> {
    return this.http.get<ArticlesResponse>(this.BASE_URL);
  }

  saveArticle(article: ArticleItem): Observable<ArticleItem> {
    return of(article);
  }
}
