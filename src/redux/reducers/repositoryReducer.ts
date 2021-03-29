import { RepositoryType } from '../types';
import { RepositoryAction } from '../interface';

export interface RepositoryState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialState: RepositoryState = {
  loading: false,
  error: null,
  data: [],
};

const repositoryReducer = (
  state: RepositoryState = initialState,
  action: RepositoryAction
): RepositoryState => {
  switch (action.type) {
    case RepositoryType.SEARCH_REPOSITORY_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
        data: [],
      };
    case RepositoryType.SEARCH_REPOSITORY_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
      };
    case RepositoryType.SEARCH_REPOSITORY_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: [],
      };
    default:
      return state;
  }
};

export default repositoryReducer;
