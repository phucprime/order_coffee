export const TOGGLE_BOTTOM_BAR_SUCCESS = 'TOGGLE_BOTTOM_BAR_SUCCESS'
export const TOGGLE_BOTTOM_BAR_FAILURE = 'TOGGLE_BOTTOM_BAR_FAILURE'

export const toggleBottomBarSuccess = (isOpen) => ({
  type: TOGGLE_BOTTOM_BAR_SUCCESS,
  payload: isOpen
})

export const toggleBottomBarFailure = error => ({
  type: TOGGLE_BOTTOM_BAR_FAILURE,
  payload: { error }
})

export function toggleBottomBar (isOpen) {
  return dispatch => {
    switch (isOpen) {
      case isOpen:
        dispatch(toggleBottomBarSuccess(isOpen))
        break

      default:
        dispatch(toggleBottomBarFailure({ error: 'Invalid isOpen type' }))
        break
    }
  }
}
