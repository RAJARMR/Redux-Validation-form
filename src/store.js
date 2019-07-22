import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import postReducer from './reducers/postReducers.jsx';

const reducer = combineReducers({
  form: reduxFormReducer, 
  postReducer:postReducer
});
const store = createStore(reducer);

export default store;