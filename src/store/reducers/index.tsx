import {TypeofTypeAnnotation} from '@babel/types';
import {combineReducers} from 'redux';
import {ActionType} from '../actions';

export interface todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface State {
  todos: todo[] | null;
  loading: boolean;
  status: boolean;
  error: boolean;
  errorMsg: string | null;
}

interface getTodoAction {
  type: ActionType.GET_TODO;
}

interface getTodoActionSuccess {
  type: ActionType.GET_TODO_SUCCESS;
  result: todo[];
}

interface getTodoActionFailure {
  type: ActionType.GET_TODO_FAILURE;
  errorMsg: string;
}

const initialState = {
  todos: null,
  loading: false,
  status: false,
  error: false,
  errorMsg: null,
};

type Action = getTodoAction | getTodoActionSuccess | getTodoActionFailure;

function todoReducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case ActionType.GET_TODO: {
      return {
        ...state,
        loading: true,
        status: false,
        error: false,
      };
    }
    case ActionType.GET_TODO_SUCCESS: {
      return {
        ...state,
        loading: false,
        status: true,
        error: false,
        todos: action.result,
      };
    }
    case ActionType.GET_TODO_FAILURE: {
      return {
        ...state,
        loading: false,
        status: false,
        error: true,
        errorMsg: action.errorMsg,
      };
    }
    default: {
      return state;
    }
  }
}

const reducers = combineReducers({
  todos: todoReducer,
});

export default reducers;
// export type RootState = ReturnType<typeof reducers>;
