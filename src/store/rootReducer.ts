import { combineReducers } from 'redux'
import newsReducer from '../screens/NewsScreen/reducer'
import themeReducer from '../shared/theme/reducer'

/**
 * State of each screen
 * Only accessible on the current screen, not across screens.
 */
const screensReducers = combineReducers({
  news: newsReducer
})

/**
 * Shared State
 * All screens are accessible.
 */
const sharedReducers = combineReducers({
  theme: themeReducer
})

const rootReducer = combineReducers({
  screens: screensReducers,
  shared: sharedReducers
})

export default rootReducer
