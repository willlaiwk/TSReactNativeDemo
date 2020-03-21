import { PayloadAction } from 'src/types/actions'
import { ThemeType } from './types'
import { ActionTypes } from './constants'

export type ChangeThemeAction = PayloadAction<
  typeof ActionTypes.REDUCER.CHANGE_THEME,
  {
    themeType: ThemeType
  }
>

export type ThemeActions = ChangeThemeAction

export const fetchHeadLines = (themeType: ThemeType): ChangeThemeAction => ({
  type: ActionTypes.REDUCER.CHANGE_THEME,
  payload: { themeType }
})
