import * as actions from './constants';

export default function NameApp(state, action) {
  switch (action.type) {
  case actions.ADD_TODO:
    return {...state, todo: action.payload};
  case actions.REMOVE_TODO:
    return {...state, todo: action.payload};
  case actions.TOGGLE_TODO:
    return {...state, todo: action.payload};
  default: 
    return state;
  }
}