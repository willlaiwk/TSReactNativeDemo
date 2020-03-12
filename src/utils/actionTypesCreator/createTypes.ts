import ReturnTypes from './ReturnTypes'

export default function createTypes<EnumTypes>(
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
