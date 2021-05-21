import { combineReducers } from 'redux'

import themeReducer from './themeReducer'
import profileMenuReducer from './profileMenuReducer'

const rootReducers = combineReducers({
  theme: themeReducer,
  profileMenu: profileMenuReducer
})

export default rootReducers
