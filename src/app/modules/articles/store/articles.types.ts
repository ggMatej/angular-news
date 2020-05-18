enum ArticleActions {
  GetArticlesRequest = '[ARTICLES] Aricles Get Request',
  GetArticlesSuccess = '[ARTICLES EFFECT] Articles Get Success',
  Error = '[ARTICLES] Articles Error',
  SaveArticleRequest = '[ARTICLES] Article save request',
  SaveArticleSuccess = '[ARTICLES EFFECT] Article save success',
}

export const ArticleActionTypes = {
  ...ArticleActions,
};
