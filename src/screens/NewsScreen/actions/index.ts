import { Action, PayloadAction } from 'src/types/actions'
import Article from 'src/models/Article'
import { ActionTypes } from '../constants'

export type FetchHeadLinesAction = Action<typeof ActionTypes.SAGA.FETCH_HEAD_LINES>

export type FetchNewsListSuccessAction = PayloadAction<
  typeof ActionTypes.REDUCER.SET_HEAD_LINES,
  {
    articles: Article[]
  }
>

export type NewsActions = FetchHeadLinesAction | FetchNewsListSuccessAction

export const fetchHeadLines = (): FetchHeadLinesAction => ({
  type: ActionTypes.SAGA.FETCH_HEAD_LINES
})

export const setHeadLines = (articles: Article[]): FetchNewsListSuccessAction => ({
  type: ActionTypes.REDUCER.SET_HEAD_LINES,
  payload: { articles }
})
