const initialState = {
  data: [],
  isLoading: false
}

export const photosListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PHOTO_LIST_REQUEST':
      return {
        ...state,
        isLoading: true
      }
    case 'GET_PHOTO_LIST_SUCCESS':
      return {
        ...state,
        data: action.payload,
        isLoading: false
      }
    case 'GET_PHOTO_LIST_ERROR':
      return {
        ...state,
        error: action.payload,
        isLoading: false
      }
    default:
      return state
  }
}
