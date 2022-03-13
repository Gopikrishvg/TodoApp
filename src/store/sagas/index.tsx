import {all, put, takeEvery} from 'redux-saga/effects';
import {ActionType, getTodo} from '../actions';
import {getRequest} from '../../utils/Requests';

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

function* getTodoData(action: any) {
  try {
    const response: ResponseGenerator = yield getRequest(
      'https://jsonplaceholder.typicode.com/todos',
    );
    console.log('response: ', response.data);

    if (response.status == 200) {
      yield put({
        type: ActionType.GET_TODO_SUCCESS,
        result: response.data,
      });
    } else {
      yield put({
        type: ActionType.GET_TODO_FAILURE,
      });
    }
  } catch (error) {
    console.log(error);
    yield put({
      type: ActionType.GET_TODO_FAILURE,
    });
  }
}

function* rootSaga() {
  yield all([takeEvery(ActionType.GET_TODO, getTodoData)]);
}

export default rootSaga;
