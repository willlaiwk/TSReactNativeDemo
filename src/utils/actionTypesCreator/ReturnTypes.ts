type ReturnTypes<EnumTypes> = {
  [key in keyof EnumTypes]: key
}

export default ReturnTypes
