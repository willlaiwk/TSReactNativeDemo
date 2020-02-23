type ReturnTypes<EnumTypes> = {
  [key in keyof EnumTypes]: key
}

function createTypes<EnumTypes>(
  splitter = '/',
  enumTypes: EnumTypes,
  ...prefixes: string[]
): ReturnTypes<EnumTypes> {
  return new Proxy(enumTypes as any, {
    get(target, property: any) {
      if (!Array.isArray(prefixes)) {
        return property
      }
      if (prefixes.length <= 0) {
        return property
      }

      return prefixes.join(splitter) + splitter + property
    }
  })
}

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
 * const actionTypes = actionTypesCreator(StateTypes, 'Counter', 'STATE');
 *
 * console.log(actionTypes.INCREMENT_COUNT);    // 'Counter/STATE/INCREMENT_COUNT'
 */
export default function actionTypesCreator<EnumTypes>(
  enumTypes: EnumTypes,
  ...prefixes: string[]
): ReturnTypes<EnumTypes> {
  return createTypes<EnumTypes>('/', enumTypes, ...prefixes)
}
