import { createReducerActionTypes } from 'src/utils/actionTypesCreator'

enum EReducerActionTypes {
  CHANGE_THEME
}

export const MODULE_NAME = 'Theme'

export const ReducerActionTypes = createReducerActionTypes(EReducerActionTypes, MODULE_NAME)

export const ActionTypes = {
  REDUCER: ReducerActionTypes
}
