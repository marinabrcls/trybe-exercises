import { combineReducers } from 'redux';
import { FETCHING_API, REQUEST_OK, REQUEST_FAILED } from '../actions/index';

const initialState = {
  isFetching: false,
  character: '',
};

function charReducer(state = initialState, action) {
  switch(action.type) {
    case FETCHING_API:
      return {...state, isFetching: true};
    case REQUEST_OK:
      return {...state, isFetching: false, character: action.character[0]};
    case REQUEST_FAILED:
      return {...state, isFetching: false, error: action.error};
    default:
      return state;
  }
} 

export const rootReducer = combineReducers({charReducer});
