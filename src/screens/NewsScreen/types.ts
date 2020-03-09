import { Action, PayloadAction } from '../../types'
import actionTypesCreator from '../../utils/action-types-creator'
import { Article } from '../../types/Models'
/**
 * Module's name
 */
export const MODULE_NAME = 'News'

// Define ActionTypes
enum ESagaActionTypes {
  FETCH_HEAD_LINES
}

enum EReducerActionTypes {
  SET_HEAD_LINES
}

export const SagaActionTypes = actionTypesCreator(
  ESagaActionTypes,
  MODULE_NAME,
  'SAGA'
)

export const ReducerActionTypes = actionTypesCreator(
  EReducerActionTypes,
  MODULE_NAME,
  'REDUCER'
)

export const ActionTypes = {
  SAGA: SagaActionTypes,
  REDUCER: ReducerActionTypes
}

export type FetchHeadLinesAction = Action<
  typeof SagaActionTypes.FETCH_HEAD_LINES
>

export type FetchNewsListSuccessAction = PayloadAction<
  typeof ReducerActionTypes.SET_HEAD_LINES,
  {
    articles: Article[]
  }
>

export type NewsActions = FetchHeadLinesAction | FetchNewsListSuccessAction

export interface NewsState {
  articles: Article[]
}
