import { NewsActions, ActionTypes } from './types'

export const fetchArticles = (page: number): NewsActions => ({
  type: ActionTypes.SAGA.FETCH_ARTICLES,
  payload: { page }
})
