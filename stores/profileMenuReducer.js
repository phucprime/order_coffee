import * as profileMenuActionTypes from './profileMenuActions'

const initialState = {
  isOpen: true,
  error: null
}

const profileMenuReducer = (state = initialState, action) => {
  switch (action.type) {
    case profileMenuActionTypes.TOGGLE_BOTTOM_BAR_SUCCESS:
      return {
        ...state,
        isOpen: action.payload
      }
    case profileMenuActionTypes.TOGGLE_BOTTOM_BAR_FAILURE:
      return {
        ...state,
        error: action.payload.error
      }

    default:
      return state
  }
}

export default profileMenuReducer
