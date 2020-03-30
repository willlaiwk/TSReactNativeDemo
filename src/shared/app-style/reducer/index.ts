import { Reducer } from 'src/types/reducers'
import { Theme, ThemeMode } from '../types'
import styles from '../styles'
import { ActionTypes } from '../constants'
import { AppStyleActions } from '../actions'

const DEFAULT_MODE: ThemeMode = 'light'
const defaultThemeStyles = styles.theme[DEFAULT_MODE]

export interface AppStyleState {
  theme: Theme
}

const initialState: AppStyleState = {
  theme: {
    mode: DEFAULT_MODE,
    styles: defaultThemeStyles
  }
}

const appStyleReducer: Reducer<AppStyleState, AppStyleActions> = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.REDUCER.RESET: {
      return initialState
    }

    case ActionTypes.REDUCER.CHANGE_THEME: {
      const { mode } = action.payload
      const theme = { mode, styles: styles.theme[mode] }

      return { ...state, theme }
    }

    default: {
      return state
    }
  }
}

export default appStyleReducer
