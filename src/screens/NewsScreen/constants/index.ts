import { createSagaActionTypes, createReducerActionTypes } from 'src/utils/actionTypesCreator'

export const SCREEN_NAME = 'News'

enum ESagaActionTypes {
  FETCH_HEAD_LINES
}

enum EReducerActionTypes {
  SET_HEAD_LINES
}

export const SagaActionTypes = createSagaActionTypes(ESagaActionTypes, SCREEN_NAME)
export const ReducerActionTypes = createReducerActionTypes(EReducerActionTypes, SCREEN_NAME)

export const ActionTypes = {
  SAGA: SagaActionTypes,
  REDUCER: ReducerActionTypes
}
