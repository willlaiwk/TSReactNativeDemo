import { Reducer } from '../../types'
import { NewsState, NewsActions, ReducerActionTypes } from './types'

const initialState: NewsState = {
  articles: []
}

const newsReducer: Reducer<NewsState, NewsActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ReducerActionTypes.FETCH_ARTICLES_SUCCESS: {
      return state
    }

    default: {
      return state
    }
  }
}

export default newsReducer
