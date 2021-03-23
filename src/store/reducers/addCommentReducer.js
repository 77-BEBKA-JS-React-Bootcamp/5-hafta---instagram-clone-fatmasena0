const initialState = {
  image: {},
  data: {},
  isLoading: false
}

export const addCommentReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEND_PHOTO':
      return {
        ...state,
        image: action.payload
      }
    case 'GET_PHOTO':
      return {
        ...state
      }
    case 'ADD_NEW_COMMENT':
      return {
        ...state,
        data: [...state.data, action.payload]
      }
    case 'GET_COMMENTS_REQUEST':
      return {
        ...state,
        isLoading: true
      }
    case 'GET_COMMENTS_SUCCESS':
      return {
        ...state,
        data: action.payload,
        isLoading: false
      }
    case 'GET_COMMENTS_ERROR':
      return {
        ...state,
        error: action.payload,
        isLoading: false
      }
    default:
      return state
  }
}
