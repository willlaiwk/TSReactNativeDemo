import { createStore, applyMiddleware, Middleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../rootReducer'
import rootSaga from '../rootSaga'

function configureStore(preloadedState = undefined) {
  /**
   * Middlewares
   */
  const sagaMiddleware = createSagaMiddleware()
  const middlewares: Middleware[] = [sagaMiddleware]

  if (__DEV__) {
    const logger = createLogger()
    middlewares.push(logger)
  }

  /**
   * Enhancers
   */
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const composedEnhancer = __DEV__
    ? composeWithDevTools(middlewareEnhancer)
    : middlewareEnhancer

  /**
   * Create Store & Run Saga
   */
  const store = createStore(rootReducer, preloadedState, composedEnhancer)

  sagaMiddleware.run(rootSaga)

  return store
}

export default configureStore
