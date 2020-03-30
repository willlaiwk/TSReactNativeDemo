import { createReducerActionTypes } from 'src/utils/actionTypesCreator'

export const MODULE_NAME = 'AppStyle'

enum EReducerActionTypes {
  RESET,
  CHANGE_THEME
}

export const ReducerActionTypes = createReducerActionTypes(EReducerActionTypes, MODULE_NAME)

export const ActionTypes = {
  REDUCER: ReducerActionTypes
}
