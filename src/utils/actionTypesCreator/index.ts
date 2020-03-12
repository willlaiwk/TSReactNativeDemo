import ReturnTypes from './ReturnTypes'
import createTypes from './createTypes'

/**
 * AcionTypes 創造器
 * @param enumTypes typescript enum
 * @param prefixes prefix 字串s。 EX: (enumTypes, a, b, c) => 'a/b/c/some-types'
 *
 * 範例：
 *
 * enum StateTypes {
 *   INCREMENT_COUNT,
 *   DECREMENT_COUNT
 * }
 *
 * const ActionTypes = actionTypesCreator(StateTypes, 'Counter', 'STATE');
 *
 * console.log(ActionTypes.INCREMENT_COUNT);    // 'Counter/STATE/INCREMENT_COUNT'
 */
export function actionTypesCreator<EnumTypes>(
  splitter: string,
  enumTypes: EnumTypes,
  ...prefixes: string[]
): ReturnTypes<EnumTypes> {
  return createTypes<EnumTypes>(splitter, enumTypes, ...prefixes)
}

export function createSagaActionTypes<EnumTypes>(
  enumTypes: EnumTypes,
  ...prefixes: string[]
): ReturnTypes<EnumTypes> {
  const combinedPrefixes = [...prefixes, 'SAGA']
  return actionTypesCreator<EnumTypes>('/', enumTypes, ...combinedPrefixes)
}

export function createReducerActionTypes<EnumTypes>(
  enumTypes: EnumTypes,
  ...prefixes: string[]
): ReturnTypes<EnumTypes> {
  const combinedPrefixes = [...prefixes, 'REDUCER']
  return actionTypesCreator<EnumTypes>('/', enumTypes, ...combinedPrefixes)
}
