import { NewsActions, ActionTypes } from './types'
import { Article } from 'src/types/Models'

export const fetchHeadLines = (): NewsActions => ({
  type: ActionTypes.SAGA.FETCH_HEAD_LINES
})

export const setHeadLines = (articles: Article[]): NewsActions => ({
  type: ActionTypes.REDUCER.SET_HEAD_LINES,
  payload: { articles }
})
