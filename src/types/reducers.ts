import * as Redux from 'redux'

export type Reducer<S = any, A extends Redux.Action = Redux.AnyAction> = Redux.Reducer<S, A>
