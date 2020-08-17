import charAPI from '../services/charAPI';
export const FETCHING_API = 'FETCHING_API';
export const REQUEST_OK = 'REQUEST_OK';
export const REQUEST_FAILED = 'REQUEST_FAILED';

export function fetchingAPI(inputValue) {
  return {
    type: FETCHING_API,
    isFetching: true,
    inputValue
  }
}

export function requestOK(character) {
  return {
    type: REQUEST_OK,
    isFetching: false,
    character,
  }
}

export function requestFailed(error) {
  return {
    type: REQUEST_FAILED,
    isFetching: false,
    error,
  }
}

export function fetchChar(inputText) {
  return (dispatch) => {
    dispatch(fetchingAPI(inputText));
    return charAPI(inputText)
    .then(
      (character) => dispatch(requestOK(character)),
      (error) => dispatch(requestFailed(error.message)),
    );   
  };
}
