export enum ActionType {
  GET_TODO = 'GET_TODO',
  GET_TODO_SUCCESS = 'GET_TODO_SUCCESS',
  GET_TODO_FAILURE = 'GET_TODO_FAILURE',
  POST_TODO = 'POST_TODO',
  POST_TODO_SUCCESS = 'POST_TODO_SUCCESS',
  POST_TODO_FAILURE = 'POST_TODO_FAILURE',
  UPDATE_TODO = 'UPDATE_TODO',
  UPDATE_TODO_SUCCESS = 'UPDATE_TODO_SUCCESS',
  UPDATE_TODO_FAILURE = 'UPDATE_TODO_FAILURE',
  DELETE_TODO = 'DELETE_TODO',
  DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS',
  DELETE_TODO_FAILURE = 'DELETE_TODO_FAILURE',
}

export function getTodo() {
  return {
    type: ActionType.GET_TODO,
  };
}
