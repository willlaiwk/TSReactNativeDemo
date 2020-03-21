import { Reducer } from 'src/types/reducers'
import { ThemeType, ThemeStyle } from './types'
import { ActionTypes } from './constants'
import { ThemeActions } from './actions'
import { themeStyles, getThemeStyles } from './styles'

const DEFAULT_THEME: ThemeType = 'light'

export interface ThemeState {
  type: ThemeType
  styles: ThemeStyle
}

const initialState: ThemeState = {
  type: DEFAULT_THEME,
  styles: themeStyles[DEFAULT_THEME]
}

const themeReducer: Reducer<ThemeState, ThemeActions> = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.REDUCER.CHANGE_THEME: {
      const { themeType } = action.payload
      return {
        ...state,
        type: themeType,
        styles: getThemeStyles(themeType)
      }
    }

    default: {
      return state
    }
  }
}

export default themeReducer
