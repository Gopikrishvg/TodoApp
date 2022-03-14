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
  getLoading: boolean;
  getStatus: boolean;
  getError: boolean;
  postLoading: boolean;
  postStatus: boolean;
  postError: boolean;
  updateLoading: boolean;
  updateStatus: boolean;
  updateError: boolean;
  deleteLoading: boolean;
  deleteStatus: boolean;
  deleteError: boolean;
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

interface postTodoAction {
  type: ActionType.POST_TODO;
}

interface postTodoActionSuccess {
  type: ActionType.POST_TODO_SUCCESS;
}

interface postTodoActionFailure {
  type: ActionType.POST_TODO_FAILURE;
  errorMsg: string;
}

interface updateTodoAction {
  type: ActionType.UPDATE_TODO;
}

interface updateTodoActionSuccess {
  type: ActionType.UPDATE_TODO_SUCCESS;
}

interface updateTodoActionFailure {
  type: ActionType.UPDATE_TODO_FAILURE;
  errorMsg: string;
}

interface deleteTodoAction {
  type: ActionType.DELETE_TODO;
}

interface deleteTodoActionSuccess {
  type: ActionType.DELETE_TODO_SUCCESS;
}

interface deleteTodoActionFailure {
  type: ActionType.DELETE_TODO_FAILURE;
  errorMsg: string;
}

const initialState = {
  todos: null,
  getLoading: false,
  getStatus: false,
  getError: false,
  postLoading: false,
  postStatus: false,
  postError: false,
  updateLoading: false,
  updateStatus: false,
  updateError: false,
  deleteLoading: false,
  deleteStatus: false,
  deleteError: false,
  errorMsg: null,
};

type Action =
  | getTodoAction
  | getTodoActionSuccess
  | getTodoActionFailure
  | postTodoAction
  | postTodoActionSuccess
  | postTodoActionFailure
  | updateTodoAction
  | updateTodoActionSuccess
  | updateTodoActionFailure
  | deleteTodoAction
  | deleteTodoActionSuccess
  | deleteTodoActionFailure;

function todoReducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case ActionType.GET_TODO: {
      return {
        ...state,
        getLoading: true,
        getStatus: false,
        getError: false,
      };
    }
    case ActionType.GET_TODO_SUCCESS: {
      return {
        ...state,
        getLoading: false,
        getStatus: true,
        getError: false,
        todos: action.result,
      };
    }
    case ActionType.GET_TODO_FAILURE: {
      return {
        ...state,
        getLoading: false,
        getStatus: false,
        getError: true,
        errorMsg: action.errorMsg,
      };
    }
    case ActionType.POST_TODO: {
      return {
        ...state,
        postLoading: true,
        postStatus: false,
        postError: false,
      };
    }
    case ActionType.POST_TODO_SUCCESS: {
      return {
        ...state,
        postLoading: false,
        postStatus: true,
        postError: false,
      };
    }
    case ActionType.POST_TODO_FAILURE: {
      return {
        ...state,
        postLoading: false,
        postStatus: false,
        postError: true,
        errorMsg: action.errorMsg,
      };
    }
    case ActionType.UPDATE_TODO: {
      return {
        ...state,
        updateLoading: true,
        updateStatus: false,
        updateError: false,
      };
    }
    case ActionType.UPDATE_TODO_SUCCESS: {
      return {
        ...state,
        updateLoading: false,
        updateStatus: true,
        updateError: false,
      };
    }
    case ActionType.UPDATE_TODO_FAILURE: {
      return {
        ...state,
        updateLoading: false,
        updateStatus: false,
        updateError: true,
        errorMsg: action.errorMsg,
      };
    }
    case ActionType.DELETE_TODO: {
      return {
        ...state,
        deleteLoading: true,
        deleteStatus: false,
        deleteError: false,
      };
    }
    case ActionType.DELETE_TODO_SUCCESS: {
      return {
        ...state,
        deleteLoading: false,
        deleteStatus: true,
        deleteError: false,
      };
    }
    case ActionType.DELETE_TODO_FAILURE: {
      return {
        ...state,
        deleteLoading: false,
        deleteStatus: false,
        deleteError: true,
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
