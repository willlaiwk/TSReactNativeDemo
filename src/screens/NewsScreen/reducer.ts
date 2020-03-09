import { Reducer } from '../../types'
import { NewsState, NewsActions, ReducerActionTypes } from './types'

const initialState: NewsState = {
  articles: []
}

const newsReducer: Reducer<NewsState, NewsActions> = (state = initialState, action) => {
  switch (action.type) {
    case ReducerActionTypes.SET_HEAD_LINES: {
      return {
        ...state,
        articles: action.payload.articles
      }
    }

    default: {
      return state
    }
  }
}

export default newsReducer
