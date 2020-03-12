import { createStore, applyMiddleware, Middleware, Action, Reducer, Store, PreloadedState } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

function configureStore<S, A extends Action>(rootReducer: Reducer<S, A>, rootSaga: any): Store<S, A>
function configureStore<S, A extends Action>(
  rootReducer: Reducer<S, A>,
  rootSaga: any,
  preloadedState: PreloadedState<S>
): Store<S, A>

function configureStore<S, A extends Action>(
  rootReducer: Reducer<S, A>,
  rootSaga: any,
  preloadedState?: PreloadedState<S>
): Store<S, A> {
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

  const composedEnhancer = __DEV__ ? composeWithDevTools(middlewareEnhancer) : middlewareEnhancer

  /**
   * Create Store & Run Saga
   */
  const store = createStore(rootReducer, preloadedState, composedEnhancer)

  sagaMiddleware.run(rootSaga)

  return store
}

export default configureStore
