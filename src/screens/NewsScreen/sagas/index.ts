import { SagaIterator } from 'redux-saga'
import { all, call, put, takeLeading } from 'redux-saga/effects'
import { SagaActionTypes } from '../constants'
import { setHeadLines } from '../actions'
import * as newsService from 'src/services/newsService'

function* fetchHeadLineArticles(): SagaIterator {
  const response: newsService.FetchTopHeadlinesResp = yield call(newsService.fetchTopHeadlines)
  yield put(setHeadLines(response.articles))
}

export default function* root() {
  yield all([takeLeading(SagaActionTypes.FETCH_HEAD_LINES, fetchHeadLineArticles)])
}
