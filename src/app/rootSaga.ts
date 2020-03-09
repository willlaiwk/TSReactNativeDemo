import { all, spawn } from 'redux-saga/effects'
import newsSagas from '../screens/NewsScreen/sagas'

export default function* rootSaga() {
  yield all([spawn(newsSagas)])
}
