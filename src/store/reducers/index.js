import { combineReducers } from 'redux'
import { photosListReducer } from './photosListReducer'
import { addCommentReducer } from './addCommentReducer'

const rootReducer = combineReducers({
  photosListReducer,
  addCommentReducer
})

export default rootReducer
