import * as Redux from 'redux'

/** 基本 Action */
export type Action<T> = Redux.Action<T>

/** Action with payload */
export interface PayloadAction<T = any, P = any> extends Redux.Action<T> {
  payload: P
}
