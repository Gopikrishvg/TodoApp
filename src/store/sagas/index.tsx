import {fork, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {ActionType, getTodo} from '../actions';
import {
  deleteRequest,
  getRequest,
  postRequest,
  putRequest,
} from '../../utils/Requests';

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

function* updateTodoData(action: any) {
  try {
    const response: ResponseGenerator = yield putRequest(
      `https://jsonplaceholder.typicode.com/todos/${action.id}`,
      action.data,
    );
    console.log('response:==============> ', response.data);

    if (response.status == 200) {
      yield put({
        type: ActionType.UPDATE_TODO_SUCCESS,
        result: response.data,
      });
    } else {
      yield put({
        type: ActionType.UPDATE_TODO_FAILURE,
      });
    }
  } catch (error) {
    console.log(error);
    yield put({
      type: ActionType.UPDATE_TODO_FAILURE,
    });
  }
}

function* postTodoData(action: any) {
  try {
    const response: ResponseGenerator = yield postRequest(
      'https://jsonplaceholder.typicode.com/todos',
      action.data,
    );
    console.log('response:==============> ', response.data);

    if (response.status == 201) {
      yield put({
        type: ActionType.POST_TODO_SUCCESS,
        result: response.data,
      });
    } else {
      yield put({
        type: ActionType.POST_TODO_FAILURE,
      });
    }
  } catch (error) {
    console.log(error);
    yield put({
      type: ActionType.POST_TODO_FAILURE,
    });
  }
}

function* deleteTodoData(action: any) {
  try {
    const response: ResponseGenerator = yield deleteRequest(
      `https://jsonplaceholder.typicode.com/todos/${action.id}`,
    );
    console.log('response:==============> ', response.data);

    if (response.status == 200) {
      yield put({
        type: ActionType.DELETE_TODO_SUCCESS,
        result: response.data,
      });
    } else {
      yield put({
        type: ActionType.DELETE_TODO_FAILURE,
      });
    }
  } catch (error) {
    console.log(error);
    yield put({
      type: ActionType.DELETE_TODO_FAILURE,
    });
  }
}

function* todoSaga() {
  yield takeEvery(ActionType.GET_TODO, getTodoData);
  yield takeLatest(ActionType.POST_TODO, postTodoData);
  yield takeLatest(ActionType.UPDATE_TODO, updateTodoData);
  yield takeLatest(ActionType.DELETE_TODO, deleteTodoData);
}

export default function* rootSaga() {
  yield fork(todoSaga);
}
