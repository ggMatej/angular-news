import { ArticleItem } from './ArticleItem';

export interface ArticlesResponse {
  status: string;
  totalResults: number;
  articles: ArticleItem[];
}
