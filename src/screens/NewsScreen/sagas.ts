import { SagaIterator } from 'redux-saga'
import { all, call, put, takeLeading } from 'redux-saga/effects'
import { SagaActionTypes } from './types'
import { setHeadLines } from './actions'
import * as APIs from '../../APIs'

function* fetchHeadLineArticles(): SagaIterator {
  const response: APIs.FetchTopHeadlinesResp = yield call(
    APIs.fetchTopHeadlines
  )

  yield put(setHeadLines(response.articles))
}

export default function* root() {
  yield all([
    takeLeading(SagaActionTypes.FETCH_HEAD_LINES, fetchHeadLineArticles)
  ])
}
