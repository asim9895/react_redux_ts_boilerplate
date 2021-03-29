import { RepositoryType } from './types';

interface SearchRepositoryLoading {
  type: RepositoryType.SEARCH_REPOSITORY_LOADING;
}

interface SearchRepositorySuccess {
  type: RepositoryType.SEARCH_REPOSITORY_SUCCESS;
  payload: string[];
}

interface SearchRepositoryError {
  type: RepositoryType.SEARCH_REPOSITORY_ERROR;
  payload: string;
}

export type RepositoryAction =
  | SearchRepositoryLoading
  | SearchRepositorySuccess
  | SearchRepositoryError;
