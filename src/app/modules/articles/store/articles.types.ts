enum ArticleActions {
  GetArticlesRequest = '[ARTICLES] Aricles Get Request',
  GetArticlesSuccess = '[ARTICLES EFFECT] Articles Get Success',
  Error = '[ARTICLES] Articles Error',
  SaveArticleRequest = '[ARTICLES] Article save request',
  SaveArticleSuccess = '[ARTICLES EFFECT] Article save success',
  DeleteArticleSuccess = '[ARTICLES] Article delete success',
}

export const ArticleActionTypes = {
  ...ArticleActions,
};
