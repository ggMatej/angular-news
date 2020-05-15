import { ArticlesState } from '../articles/store/articles.reducer';

export interface ApplicationState {
  articles: ArticlesState;
}
