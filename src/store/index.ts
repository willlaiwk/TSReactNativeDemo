import configureStore from './configureStore'
import rootReducer from './rootReducer'
import rootSaga from './rootSaga'

export const store = configureStore(rootReducer, rootSaga)

export type RootState = ReturnType<typeof rootReducer>
