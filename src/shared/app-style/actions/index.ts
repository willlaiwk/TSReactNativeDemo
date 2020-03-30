import { Action, PayloadAction } from 'src/types/actions'
import { ThemeMode } from '../types'
import { ActionTypes } from '../constants'

export type ResetAction = Action<typeof ActionTypes.REDUCER.RESET>

export type ChangeThemeAction = PayloadAction<
  typeof ActionTypes.REDUCER.CHANGE_THEME,
  {
    mode: ThemeMode
  }
>

export type AppStyleActions = ResetAction | ChangeThemeAction

export const reset = (): ResetAction => ({
  type: ActionTypes.REDUCER.RESET
})

export const changeTheme = (mode: ThemeMode): ChangeThemeAction => ({
  type: ActionTypes.REDUCER.CHANGE_THEME,
  payload: { mode }
})
