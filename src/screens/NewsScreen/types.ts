import { PayloadAction } from '../../types'
import actionTypesCreator from '../../utils/action-types-creator'

const MODULE_NAME = 'News'

enum ESagaActionTypes {
  FETCH_ARTICLES
}

enum EReducerActionTypes {
  FETCH_ARTICLES_SUCCESS
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

type FetchNewsListAction = PayloadAction<
  typeof SagaActionTypes.FETCH_ARTICLES,
  {
    page: number
  }
>

type FetchNewsListSuccessAction = PayloadAction<
  typeof ReducerActionTypes.FETCH_ARTICLES_SUCCESS,
  {
    page: number
    newsList: object[]
  }
>

export type NewsActions = FetchNewsListAction | FetchNewsListSuccessAction

export interface NewsState {
  articles: object[]
}
