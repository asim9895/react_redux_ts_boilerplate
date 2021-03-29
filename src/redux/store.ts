import { createStore, combineReducers, applyMiddleware } from 'redux';
import repositoryReducer from './reducers/repositoryReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  repository: repositoryReducer,
});

export type RootState = ReturnType<typeof reducers>;

const middleware = [thunk];

const store = createStore(
  reducers,
  {},
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
