import { RepositoryAction } from '../interface';
import { RepositoryType } from '../types';
import axios from 'axios';
import { Dispatch } from 'redux';

export const search_repository = (term: string) => async (
  dispatch: Dispatch<RepositoryAction>
) => {
  dispatch({
    type: RepositoryType.SEARCH_REPOSITORY_LOADING,
  });

  try {
    const { data } = await axios.get(
      `http://registry.npmjs.org/-/v1/search?text=${term}`
    );

    const repository_names = data.objects.map((object: any) => {
      return object.package.name;
    });

    dispatch({
      type: RepositoryType.SEARCH_REPOSITORY_SUCCESS,
      payload: repository_names,
    });
  } catch (error) {
    dispatch({
      type: RepositoryType.SEARCH_REPOSITORY_ERROR,
      payload: error.message,
    });
  }
};
