import { combineReducers } from 'redux'
import newsReducer from '../screens/NewsScreen/reducer'

const screensReducers = combineReducers({
  news: newsReducer
})

const rootReducer = combineReducers({
  screens: screensReducers
})

export default rootReducer
