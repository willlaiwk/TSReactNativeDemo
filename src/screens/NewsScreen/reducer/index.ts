import Article from 'src/models/Article'
import { Reducer } from 'src/types/reducers'
import { NewsActions } from '../actions'
import { ReducerActionTypes } from '../constants'

export interface NewsState {
  articles: Article[]
}

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
