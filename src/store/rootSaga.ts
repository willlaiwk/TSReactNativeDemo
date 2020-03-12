import { all, spawn } from 'redux-saga/effects'
import newsSagas from '../screens/NewsScreen/sagas'

function* rootSaga() {
  yield all([spawn(newsSagas)])
}

export default rootSaga
